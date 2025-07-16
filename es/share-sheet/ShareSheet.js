import { mergeProps as _mergeProps } from "vue";
import { createVNode as _createVNode } from "vue";
import _extends from "@babel/runtime/helpers/esm/extends";
import { defineComponent } from 'vue'; // Utils

import { createNamespace, pick } from '../utils'; // Components

import Popup from '../popup';
import { popupSharedProps, popupSharedPropKeys } from '../popup/shared';
var PRESET_ICONS = ['qq', 'link', 'weibo', 'wechat', 'poster', 'qrcode', 'weapp-qrcode', 'wechat-moments'];
var popupKeys = [...popupSharedPropKeys, 'closeOnPopstate', 'safeAreaInsetBottom'];

function getIconURL(icon) {
  if (PRESET_ICONS.includes(icon)) {
    return "https://img.yzcdn.cn/vant/share-sheet-" + icon + ".png";
  }

  return icon;
}

var [name, bem, t] = createNamespace('share-sheet');
export default defineComponent({
  name,
  props: _extends({}, popupSharedProps, {
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
        return _createVNode("div", {
          "class": bem('header')
        }, [title && _createVNode("h2", {
          "class": bem('title')
        }, {
          default: () => [title]
        }), description && _createVNode("span", {
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
      return _createVNode("div", {
        "role": "button",
        "tabindex": 0,
        "class": [bem('option'), className],
        "onClick": () => onSelect(option, index)
      }, [_createVNode("img", {
        "src": getIconURL(icon),
        "class": bem('icon')
      }, null), name && _createVNode("span", {
        "class": bem('name')
      }, {
        default: () => [name]
      }), description && _createVNode("span", {
        "class": bem('option-description')
      }, {
        default: () => [description]
      })]);
    };

    var renderOptions = (options, border) => _createVNode("div", {
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
        return _createVNode("button", {
          "type": "button",
          "class": bem('cancel'),
          "onClick": onCancel
        }, {
          default: () => [text]
        });
      }
    };

    return () => _createVNode(Popup, _mergeProps({
      "round": true,
      "class": bem(),
      "position": "bottom"
    }, _extends({}, pick(props, popupKeys), {
      'onUpdate:show': updateShow
    })), {
      default: () => [renderHeader(), renderRows(), renderCancelText()]
    });
  }

});