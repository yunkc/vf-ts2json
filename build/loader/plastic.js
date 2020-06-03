// For now is just DRAFT stage, don't use it!
const Path = require("path")
const fse = require("fs-extra")

let whiteList = []
module.exports = function (context, options, {path, distPath}) {
  if (!context.components) return context;

  function getModule(actionList) {
    const isModule = /import\(\S+\)/.test(actionList)
    return {
      isModule,
      path: isModule ? actionList.match(/(?<=('|")).*?(?=('|"))/)[0] : null
    }
  }

  Object.keys(context.components).forEach(key => {
    let {type, actionList} = context.components[key]
    const actionModule = getModule(actionList)
    const isMatch = type === 'custom' && typeof context.components[key].actionList === 'string' && actionModule.isModule

    if (!(isMatch && path)) {
      return
    }

    let tempParentPath = path.split('/')
    tempParentPath.pop()
    tempParentPath = tempParentPath.join('/')
    tempParentPath = tempParentPath.replace(distPath, '')

    const finalModulePath = process.cwd() + Path.resolve(tempParentPath, actionModule.path)
    const isHitModule = fse.pathExistsSync(finalModulePath)

    isHitModule && whiteList.push(finalModulePath)
    // console.log(finalModulePath)
    const encoding = 'utf-8'
    whiteList.forEach((path) => {
      context.components[key].actionList = fse.readFileSync(path, {encoding})
    })
  });
  return context
}
