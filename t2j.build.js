const Path = require('path')
const fse = require('fs-extra')
const chokidar = require('chokidar')
const t2jconfig = require('./t2j.config')
const requireJSON5 = require('require-json5')
const tsconfig = requireJSON5('./tsconfig')

const config = {
  T2J: t2jconfig,
  outDir: tsconfig.compilerOptions.outDir
};

function getEntryFile() {
  const entryPath = Path.resolve(config.T2J.entry);
  const entryFileFullName = entryPath.substr(entryPath.lastIndexOf('/') + 1);

  return entryFileFullName.substr(0, entryFileFullName.lastIndexOf('.'));
}

const watcher = chokidar.watch(config.outDir);
  
watcher.on('change', path => {
  const distTargetPath = Path.resolve(__dirname, config.T2J.outDir);
  const distTargetFullPath = Path.join(distTargetPath, `${getEntryFile()}.json`);

  const entryJSPath = Path.join(Path.resolve(__dirname, config.outDir), config.T2J.entry);

  delete require.cache[entryJSPath];
  delete require.cache[Path.resolve(__dirname, path)];

  fse.outputJson(distTargetFullPath, require(entryJSPath).default, {
    spaces: config.T2J.spacing,
    replacer: config.T2J.replacer
  });
});