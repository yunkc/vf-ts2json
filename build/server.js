const liveServer = require('live-server')

module.exports = function (options) {
  liveServer.start({
    port: 8181,
    open: true,
    logLevel: 0, // 2 show all, 0 only error
    watch: options.watch,
  })
}
