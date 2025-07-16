"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Uploader = exports.default = void 0;

var _utils = require("../utils");

var _Uploader2 = _interopRequireDefault(require("./Uploader"));

var Uploader = (0, _utils.withInstall)(_Uploader2.default);
exports.Uploader = Uploader;
var _default = Uploader;
exports.default = _default;