const Path = require('path')
const Log = require('./log')
const fse = require('fs-extra')
const chokidar = require('chokidar')
const t2jconfig = require('../t2j.config')
const requireJSON5 = require('require-json5')
const tsconfig = requireJSON5('./tsconfig')
const VFSParser = require('./VFScriptParser').default;

const CONFIG = {
  baseURL: '../',
  spaces: t2jconfig.spaces || 2,
  debug: t2jconfig.debug   || false,
  entry: t2jconfig.entry   || 'index.js',
  output: t2jconfig.output || '/vf-json',
  jsOutput: tsconfig.compilerOptions.outDir,
}

function getEntryFile() {
  const entryPath = Path.resolve(CONFIG.entry);
  const entryFileFullName = entryPath.substr(entryPath.lastIndexOf('/') + 1);
  return entryFileFullName.substr(0, entryFileFullName.lastIndexOf('.'));
}
const watcher = chokidar.watch(CONFIG.jsOutput);
watcher.on('change', path => {
  const distJSONPath = Path.resolve(__dirname, CONFIG.baseURL + CONFIG.output);
  const distJSONFullPath = Path.join(distJSONPath, `${getEntryFile()}.json`);
  const entryJSPath = Path.join(Path.resolve(__dirname, CONFIG.baseURL + CONFIG.jsOutput), CONFIG.entry);

  delete require.cache[entryJSPath];
  delete require.cache[Path.resolve(__dirname, CONFIG.baseURL + path)];

  let entryJSFile;
  try {
    entryJSFile = require(entryJSPath).default
  }catch (e) {}

  if (entryJSFile === undefined) {
    Log.error(`Can't find this entry file or this "${ entryJSPath }" not export default object`)
    watcher.unwatch(CONFIG.jsOutput)
    return
  }

  if (entryJSFile.components) {
    Object.keys(entryJSFile.components).forEach(key => {
      const widget = entryJSFile.components[key];

      if (widget.type === 'custom' && typeof widget.actionList === 'string') {
        widget.actionList = new VFSParser().parse(widget.actionList)
      }
    });
  }

  fse.outputJson(distJSONFullPath, entryJSFile, {spaces: CONFIG.spaces});
});
