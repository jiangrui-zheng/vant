"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.installable = installable;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _string = require("./format/string");

function installable(options) {
  return (0, _extends2.default)({}, options, {
    install(app) {
      var {
        name
      } = options;
      app.component(name, options);
      app.component((0, _string.camelize)("-" + name), options);
    }

  });
}