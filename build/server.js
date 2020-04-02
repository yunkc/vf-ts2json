const liveServer = require('live-server')
const cwd = process.cwd()

module.exports = function () {
  liveServer.start({
    port: 8181,
    open: true,
    logLevel: 0, // 2 show all, 0 only error
    file: "index.html",
    ignore: [
      `${cwd}/build`,
      `${cwd}/README.md`,
      `${cwd}/package.json`,
      `${cwd}/t2j.config.json`,
      `${cwd}/tsconfig.json`,
      `${cwd}/.gitignore.json`,
      `${cwd}/types`,
      `${cwd}/dist`,
      `${cwd}/node_modules`
    ],
  })
}
