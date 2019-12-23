const Path = require('path')
const fse = require('fs-extra')
const chokidar = require('chokidar')
const t2jconfig = require('./t2j.config')
const requireJSON5 = require('require-json5')
const tsconfig = requireJSON5('./tsconfig')

const config = {
  T2J: t2jconfig,
  outDir: tsconfig.compilerOptions.outDir
}

const watcher = chokidar.watch(config.outDir, {
  // ignored: function () {
  //
  // }
});
  
watcher.on('change', path => {
  const jsPath = Path.resolve(__dirname, path);
  const jsFile = require(jsPath);

  const fileIndex = jsPath.lastIndexOf('/') + 1;
  const fileFullName = jsPath.substr(fileIndex);
  const filePureName = fileFullName.substr(0, fileFullName.lastIndexOf('.'));

  const distJSONPath = Path.resolve(__dirname, config.T2J.outDir);
  const finalPath = Path.join(distJSONPath, `${filePureName}.json`);

  delete require.cache[jsPath];

  if (!jsFile.default) {
    return
  }

  const entryPath = Path.resolve(config.T2J.entry);
  const projectPath = entryPath.split(__dirname)[1];


  if (jsPath.indexOf(projectPath) === -1) {
    return;
  }

  fse.outputJson(finalPath, jsFile.default, {
    spaces: config.T2J.spacing,
    replacer: config.T2J.replacer
  });
});