"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.usePopupState = usePopupState;
exports.mountComponent = mountComponent;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

var _useExpose = require("../composables/use-expose");

function usePopupState() {
  var state = (0, _vue.reactive)({
    show: false
  });

  var toggle = show => {
    state.show = show;
  };

  var open = props => {
    (0, _extends2.default)(state, props);
    (0, _vue.nextTick)(() => toggle(true));
  };

  var close = () => toggle(false);

  (0, _useExpose.useExpose)({
    open,
    close,
    toggle
  });
  return {
    open,
    close,
    state,
    toggle
  };
}

function mountComponent(RootComponent) {
  var app = (0, _vue.createApp)(RootComponent);
  var root = document.createElement('div');
  document.body.appendChild(root);
  return {
    instance: app.mount(root),

    unmount() {
      app.unmount();
      document.body.removeChild(root);
    }

  };
}