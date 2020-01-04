module.exports = class Log {
  static error(...args) {
    console.log('\x1b[41m%s\x1b[0m', ...args);
  }
  static info(...args) {
    console.log("\x1b[36m", ...args)
  }
  static warn(...args) {
    console.log("\x1b[33m", ...args)
  }
}
