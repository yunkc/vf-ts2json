class Log {
  constructor(enable = false) {
    this.enable = enable
  }

  error(...args) {
    console.log('\x1b[41m%s\x1b[0m', ...args);
  }
  info(...args) {
    if (this.enable) {
      console.log("\x1b[36m", ...args)
    }
  }
  warn(...args) {
    console.log("\x1b[33m", ...args)
  }
  debug(...args) {
    console.log("\x1b[36m", ...args)
  }
}

function checkEntryName(filePath) {
  const fileSuffix = filePath.lastIndexOf('.');
  const fileType = filePath.substr(filePath.lastIndexOf('.') + 1);

  if (fileType === 'ts') {
    filePath = filePath.substring(0, fileSuffix) + '.js'
  }

  return filePath;
}

// todo 提高定位精度
function deleteRequireCache(caches, rule = /node_modules/) {
  const ignorePath = process.cwd() + '/node_modules'
  const ignoreReg = ignorePath.split('/').join('\\/')
  const regex = new RegExp(ignoreReg)

  const cacheKeys = Object.keys(caches);
  const cacheKeysLength = cacheKeys.length

  for (let i = 0; i < cacheKeysLength; i++) {
    !regex.test(cacheKeys[i]) && delete require.cache[cacheKeys[i]]
    // if (!regex.test(cacheKeys[i])) {delete require.cache[cacheKeys[i]]}
  }
}

module.exports = {
  Log,
  checkEntryName,
  deleteRequireCache,
}
