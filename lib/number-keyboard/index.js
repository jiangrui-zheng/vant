"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.NumberKeyboard = exports.default = void 0;

var _utils = require("../utils");

var _NumberKeyboard2 = _interopRequireDefault(require("./NumberKeyboard"));

var NumberKeyboard = (0, _utils.withInstall)(_NumberKeyboard2.default);
exports.NumberKeyboard = NumberKeyboard;
var _default = NumberKeyboard;
exports.default = _default;