"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ShareSheet = exports.default = void 0;

var _utils = require("../utils");

var _ShareSheet2 = _interopRequireDefault(require("./ShareSheet"));

var ShareSheet = (0, _utils.withInstall)(_ShareSheet2.default);
exports.ShareSheet = ShareSheet;
var _default = ShareSheet;
exports.default = _default;