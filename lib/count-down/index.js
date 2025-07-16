"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CountDown = exports.default = void 0;

var _utils = require("../utils");

var _CountDown2 = _interopRequireDefault(require("./CountDown"));

var CountDown = (0, _utils.withInstall)(_CountDown2.default);
exports.CountDown = CountDown;
var _default = CountDown;
exports.default = _default;