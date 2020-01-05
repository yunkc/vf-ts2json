const vfxLoader = require('./loader/vfx/index')

module.exports = [
  {
    name: 'vfx-parser',
    options: {},
    install: vfxLoader
  },
];
