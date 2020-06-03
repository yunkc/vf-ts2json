const path = require('path')
const fse = require('fs-extra')
const chokidar = require('chokidar')
const CONFIG = {
  entry: '/src/**/*.h',
  output: 'ts/',
  prefix: '.ts',
  encode: 'utf-8'
}

const watcher = chokidar.watch([process.cwd() + CONFIG.entry])

function getFileNameWithoutPrefix(filePath) {
  const fileName = filePath.split('/').pop()

  return fileName.split('.')[0]
}

function getTemplate(template) {
  /*
  * parse and build a es6 module template with typescript
  * Ids is Store.ts files
  * */
  return `export default function(Ids?: object) {return \`${template}\`}`
}

watcher.on('change', changePath => {
  const fileName = getFileNameWithoutPrefix(changePath) + CONFIG.prefix
  const outputPath = path.resolve(changePath, '../', CONFIG.output, fileName)
  const fileContent = fse.readFileSync(changePath)

  fse.outputFileSync(outputPath, getTemplate(fileContent), CONFIG.encode)
})

// Immediate run once on first start run server
watcher.on('ready', () => {
  const fileMap =watcher.getWatched()
  const fileMapKey =  Object.keys(fileMap)

  let hFileList = undefined
  fileMapKey.map(key => {
    hFileList = fileMap[key].map(subPath => {
      return {
        parentPath: key,
        hFilePath: path.resolve(key, subPath),
      }
    })
  })

  hFileList.map(({parentPath, hFilePath}) => {
    const fileName = getFileNameWithoutPrefix(hFilePath) + CONFIG.prefix

    const outputPath = path.resolve(parentPath, CONFIG.output + fileName)
    const fileContent = fse.readFileSync(hFilePath)

    fse.outputFileSync(outputPath, getTemplate(fileContent), CONFIG.encode)
  })
})
