"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Calendar = exports.default = void 0;

var _utils = require("../utils");

var _Calendar2 = _interopRequireDefault(require("./Calendar"));

var Calendar = (0, _utils.withInstall)(_Calendar2.default);
exports.Calendar = Calendar;
var _default = Calendar;
exports.default = _default;