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

module.exports = {
  Log,
  checkEntryName
}
