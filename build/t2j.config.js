const Path = require('path')
const Utils = require('./utils')
const t2jconfig = require('../t2j.config')
const requireJSON5 = require('require-json5')
const tsconfig = requireJSON5('./tsconfig')

const CONFIG = {
  baseURL: '../',
  spaces: t2jconfig.spaces || 2,
  debug: t2jconfig.debug   || false,
  entry: Utils.checkEntryName(t2jconfig.entry) || 'index.js',
  output: t2jconfig.output || '/vf-json',
  jsOutput: tsconfig.compilerOptions.outDir,
}


module.exports = Object.assign({}, CONFIG, {
  entry: Path.join(Path.resolve(__dirname, CONFIG.baseURL + CONFIG.jsOutput), CONFIG.entry),
  output: Path.resolve(__dirname, CONFIG.baseURL + CONFIG.output),
  jsOutput: Path.resolve(__dirname, CONFIG.baseURL + CONFIG.jsOutput)
})
