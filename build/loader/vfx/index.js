const VFSParser = require('./VFScriptParser.js').default;
const VFSP = new VFSParser();
module.exports = function (context, options) {
  if (context.components) {
    Object.keys(context.components).forEach(key => {
      const widget = context.components[key]

      if (widget.type === 'custom' && typeof widget.actionList === 'string') {
        widget.actionList = VFSP.parse(widget.actionList)
      }
    });
  }
  return context
}
