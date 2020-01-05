const Path = require('path')
const fse = require('fs-extra')
const Utils = require('./utils')
const chokidar = require('chokidar')
const CONFIG = require('./t2j.config')
const Loader = require('./t2j.loader')

const Log = new Utils.Log(CONFIG.debug)

function getEntryFileName() {
  const entryFileFullName = CONFIG.entry.substr(CONFIG.entry.lastIndexOf('/') + 1)
  return entryFileFullName.substr(0, entryFileFullName.lastIndexOf('.'))
}

const entryFileName = getEntryFileName()
const watcher = chokidar.watch(CONFIG.jsOutput)
const distJSON = Path.join(CONFIG.output, `${entryFileName}.json`)

setTimeout(() => {
  Log.info(`Entry ${entryFileName}.js files target path: ${CONFIG.entry}`)
  Log.info(`Dist .JSON files target path: ${distJSON}`)
}, 400)
watcher.on('change', path => {
  delete require.cache[path]
  delete require.cache[CONFIG.entry]

  let entryJSFile;
  try {
    entryJSFile = require(CONFIG.entry).default
  }catch (e) {}

  if (entryJSFile === undefined) {
    Log.error(`Can't find this entry file or this "${ CONFIG.entry }" not export default object`)
    // TODO: Someday maybe we turn unwatch features, but now we NEED MORE to know TSC!!!!!
    // watcher.unwatch(CONFIG.jsOutput)
    return
  }

  let isContinue = true
  if (Array.isArray(Loader)) {
    Loader.reduce((context, loaderItem, idx) => {
      const breakReduce = () => {
        isContinue = false
        Loader.splice(idx + 1)
      }
      const {name, options, install} = loaderItem

      if (!name) {
        Log.warn(`Please set a name for you loader, index: ${idx}`)
        breakReduce()
        return
      }
      if (!install) {
        Log.error(`Look like you don't install this loader: '${name}', index: ${idx}`)
        breakReduce()
        return
      }

      const currentContext = install(context, options)

      if (!currentContext) {
        Log.error(`Please check this loader: ${name} return is '${JSON.stringify(currentContext)}'`)
        breakReduce()
        return
      }

      return currentContext
    }, entryJSFile)
  }

  if (isContinue) {
    fse.outputJson(distJSON, entryJSFile, {spaces: CONFIG.spaces})
  }
});
