const VFSParser = require("@vf.js/vfx").default
const VFSP = new VFSParser();
module.exports = function (context, options) {
  if (context.components) {
    Object.keys(context.components).forEach(key => {
      const widget = context.components[key]

      if (widget.type === 'custom' && typeof widget.actionList === 'string') {
        const alist = VFSP.parse(widget.actionList);
        let hasActionList = false;
        if(alist && alist.length) {
          for( var i = 0, len = alist.length; i < len; i++) {
            let action = alist[i];
            if(action && action.type == 36) {
              if (key.toString() === action.value ||
                  action.value === 'this') {
                  widget.actionList =  action.execute;
                  hasActionList = true;
                  break;
              } else {
                console.warn("component " + key + ": actionlist's target:" + "\"" + action.value + "\"" + " is wrong, please start with \"@this=\"");
              }
            }
          }
        }
        if(!hasActionList) {
          delete widget.actionList;
        }
      }
    });
  }
  return context;
}
