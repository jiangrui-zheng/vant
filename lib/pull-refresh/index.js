"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PullRefresh = exports.default = void 0;

var _utils = require("../utils");

var _PullRefresh2 = _interopRequireDefault(require("./PullRefresh"));

var PullRefresh = (0, _utils.withInstall)(_PullRefresh2.default);
exports.PullRefresh = PullRefresh;
var _default = PullRefresh;
exports.default = _default;