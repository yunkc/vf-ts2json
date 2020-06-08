const vfxLoader = require('./loader/vfx')
const launcherVersionPatch = require('./loader/launcherVersionPatch')

module.exports = [
  {
    name: 'vfx-parser',
    options: {},
    install: vfxLoader
  },
  {
    name: 'launcher-version-patch',
    options: {},
    install: launcherVersionPatch
  }
];
