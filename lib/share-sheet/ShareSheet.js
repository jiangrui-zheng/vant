"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _popup = _interopRequireDefault(require("../popup"));

var _shared = require("../popup/shared");

// Utils
// Components
var PRESET_ICONS = ['qq', 'link', 'weibo', 'wechat', 'poster', 'qrcode', 'weapp-qrcode', 'wechat-moments'];
var popupKeys = [..._shared.popupSharedPropKeys, 'closeOnPopstate', 'safeAreaInsetBottom'];

function getIconURL(icon) {
  if (PRESET_ICONS.includes(icon)) {
    return "https://img.yzcdn.cn/vant/share-sheet-" + icon + ".png";
  }

  return icon;
}

var [name, bem, t] = (0, _utils.createNamespace)('share-sheet');

var _default = (0, _vue.defineComponent)({
  name,
  props: (0, _extends2.default)({}, _shared.popupSharedProps, {
    title: String,
    cancelText: String,
    description: String,
    options: {
      type: Array,
      default: () => []
    },
    closeOnPopstate: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  }),
  emits: ['cancel', 'select', 'update:show'],

  setup(props, {
    emit,
    slots
  }) {
    var updateShow = value => emit('update:show', value);

    var onCancel = () => {
      updateShow(false);
      emit('cancel');
    };

    var onSelect = (option, index) => emit('select', option, index);

    var renderHeader = () => {
      var title = slots.title ? slots.title() : props.title;
      var description = slots.description ? slots.description() : props.description;

      if (title || description) {
        return (0, _vue.createVNode)("div", {
          "class": bem('header')
        }, [title && (0, _vue.createVNode)("h2", {
          "class": bem('title')
        }, {
          default: () => [title]
        }), description && (0, _vue.createVNode)("span", {
          "class": bem('description')
        }, {
          default: () => [description]
        })]);
      }
    };

    var renderOption = (option, index) => {
      var {
        name,
        icon,
        className,
        description
      } = option;
      return (0, _vue.createVNode)("div", {
        "role": "button",
        "tabindex": 0,
        "class": [bem('option'), className],
        "onClick": () => onSelect(option, index)
      }, [(0, _vue.createVNode)("img", {
        "src": getIconURL(icon),
        "class": bem('icon')
      }, null), name && (0, _vue.createVNode)("span", {
        "class": bem('name')
      }, {
        default: () => [name]
      }), description && (0, _vue.createVNode)("span", {
        "class": bem('option-description')
      }, {
        default: () => [description]
      })]);
    };

    var renderOptions = (options, border) => (0, _vue.createVNode)("div", {
      "class": bem('options', {
        border
      })
    }, [options.map(renderOption)]);

    var renderRows = () => {
      var {
        options
      } = props;

      if (Array.isArray(options[0])) {
        return options.map((item, index) => renderOptions(item, index !== 0));
      }

      return renderOptions(options);
    };

    var renderCancelText = () => {
      var _props$cancelText;

      var text = (_props$cancelText = props.cancelText) != null ? _props$cancelText : t('cancel');

      if (text) {
        return (0, _vue.createVNode)("button", {
          "type": "button",
          "class": bem('cancel'),
          "onClick": onCancel
        }, {
          default: () => [text]
        });
      }
    };

    return () => (0, _vue.createVNode)(_popup.default, (0, _vue.mergeProps)({
      "round": true,
      "class": bem(),
      "position": "bottom"
    }, (0, _extends2.default)({}, (0, _utils.pick)(props, popupKeys), {
      'onUpdate:show': updateShow
    })), {
      default: () => [renderHeader(), renderRows(), renderCancelText()]
    });
  }

});

exports.default = _default;