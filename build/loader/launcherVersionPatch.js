const launcherVersion = require('@vf.js/launcher/package.json')
module.exports = function (context, options) {
  context['launcherVersion'] = launcherVersion.version

  return context
}
