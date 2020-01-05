"use strict";
exports.__esModule = true;
/// actionList ////////////////////////////////
var ExpressItemType;
(function (ExpressItemType) {
    ExpressItemType[ExpressItemType["CONST"] = 0] = "CONST";
    ExpressItemType[ExpressItemType["VARIABLE"] = 1] = "VARIABLE";
    ExpressItemType[ExpressItemType["RANDOM"] = 2] = "RANDOM";
    ExpressItemType[ExpressItemType["STSTEN"] = 3] = "STSTEN";
    ExpressItemType[ExpressItemType["PROPERTY"] = 4] = "PROPERTY";
    ExpressItemType[ExpressItemType["OPERATION"] = 5] = "OPERATION";
    ExpressItemType[ExpressItemType["ARRAY_LEN"] = 6] = "ARRAY_LEN";
    ExpressItemType[ExpressItemType["ARRAY_VALUE"] = 7] = "ARRAY_VALUE";
    ExpressItemType[ExpressItemType["OBJECT_VALUE"] = 8] = "OBJECT_VALUE";
    ExpressItemType[ExpressItemType["PARAM_VALUE"] = 9] = "PARAM_VALUE";
    ExpressItemType[ExpressItemType["ARRAY_FUNCTION"] = 10] = "ARRAY_FUNCTION";
})(ExpressItemType = exports.ExpressItemType || (exports.ExpressItemType = {}));
var SystemValueType;
(function (SystemValueType) {
    SystemValueType[SystemValueType["TIME"] = 0] = "TIME";
    SystemValueType[SystemValueType["YEAR"] = 1] = "YEAR";
    SystemValueType[SystemValueType["MONTH"] = 2] = "MONTH";
    SystemValueType[SystemValueType["DAY"] = 3] = "DAY";
    SystemValueType[SystemValueType["DATE"] = 4] = "DATE";
})(SystemValueType = exports.SystemValueType || (exports.SystemValueType = {}));
