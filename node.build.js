const fse = require('fs-extra');
const Path = require('path');
const process = require('process');
const chokidar = require('chokidar');
const requireJSON5 = require('require-json5');

let tsconfig = {
  outDir: 'dist_JS/',
  T2J: {
    outDir: 'dist_JSON/',
    spacing: 2,
    debug: false,
    replacer: null,
    exclude: []
  }
};

try {
  tsconfig = Object.assign({}, tsconfig, requireJSON5('./tsconfig'));
} catch (e) {
  console.error('not found tsconfig.json, please check your config');
  return process.exit();
}

const watcher = chokidar.watch(tsconfig.compilerOptions.outDir, {
  // ignored: function () {
  //
  // }
});
  
watcher.on('change', path => {
  const jsPath = Path.resolve(__dirname, path);
  const jsFile = require(jsPath);

  const fileIndex = jsPath.lastIndexOf('/') + 1;
  const fileFullName = jsPath.substr(fileIndex);
  const filePureName = fileFullName.split('.')[0];

  const distJSONPath = Path.resolve(__dirname, tsconfig.T2J.outDir);
  const finalPath = Path.join(distJSONPath, `${filePureName}.json`);

  delete require.cache[jsPath];

  if (!jsFile.default) {
    return
  }

  fse.outputJson(finalPath, jsFile.default, {
    spaces: tsconfig.T2J.spacing,
    replacer: tsconfig.T2J.replacer
  });
});