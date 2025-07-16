"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

var _utils = require("../utils");

var _RadioGroup = require("../radio-group/RadioGroup");

var _use = require("@vant/use");

var _Checker = _interopRequireWildcard(require("../checkbox/Checker"));

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('radio');

var _default = (0, _vue.defineComponent)({
  name,
  props: _Checker.checkerProps,
  emits: ['update:modelValue'],

  setup(props, {
    emit,
    slots
  }) {
    var {
      parent
    } = (0, _use.useParent)(_RadioGroup.RADIO_KEY);

    var checked = () => {
      var value = parent ? parent.props.modelValue : props.modelValue;
      return value === props.name;
    };

    var toggle = () => {
      if (parent) {
        parent.updateValue(props.name);
      } else {
        emit('update:modelValue', props.name);
      }
    };

    return () => (0, _vue.createVNode)(_Checker.default, (0, _vue.mergeProps)({
      "bem": bem,
      "role": "radio",
      "parent": parent,
      "checked": checked(),
      "onToggle": toggle
    }, props), (0, _extends2.default)({}, (0, _utils.pick)(slots, ['default', 'icon'])));
  }

});

exports.default = _default;