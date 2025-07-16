"use strict";

exports.__esModule = true;
exports.kebabCase = kebabCase;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var [name, bem] = (0, _utils.createNamespace)('config-provider');

function kebabCase(word) {
  return word.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

function mapThemeVarsToCSSVars(themeVars) {
  var cssVars = {};
  Object.keys(themeVars).forEach(key => {
    cssVars["--van-" + kebabCase(key)] = themeVars[key];
  });
  return cssVars;
}

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    themeVars: Object,
    tag: {
      type: String,
      default: 'div'
    }
  },

  setup(props, {
    slots
  }) {
    var style = (0, _vue.computed)(() => {
      if (props.themeVars) {
        return mapThemeVarsToCSSVars(props.themeVars);
      }
    });
    return () => (0, _vue.createVNode)(props.tag, {
      "class": bem(),
      "style": style.value
    }, {
      default: () => [slots.default == null ? void 0 : slots.default()]
    });
  }

});

exports.default = _default;