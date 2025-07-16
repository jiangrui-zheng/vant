"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _tag = _interopRequireDefault(require("../tag"));

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireDefault(require("../cell"));

var _radio = _interopRequireDefault(require("../radio"));

// Utils
// Components
var [name, bem] = (0, _utils.createNamespace)('address-item');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    disabled: Boolean,
    switchable: Boolean,
    defaultTagText: String,
    address: {
      type: Object,
      required: true
    }
  },
  emits: ['edit', 'click', 'select'],

  setup(props, {
    slots,
    emit
  }) {
    var onClick = () => {
      if (props.switchable) {
        emit('select');
      }

      emit('click');
    };

    var renderRightIcon = () => (0, _vue.createVNode)(_icon.default, {
      "name": "edit",
      "class": bem('edit'),
      "onClick": event => {
        event.stopPropagation();
        emit('edit');
        emit('click');
      }
    }, null);

    var renderTag = () => {
      if (slots.tag) {
        return slots.tag((0, _extends2.default)({}, props.address));
      }

      if (props.address.isDefault && props.defaultTagText) {
        return (0, _vue.createVNode)(_tag.default, {
          "type": "danger",
          "round": true,
          "class": bem('tag')
        }, {
          default: () => [props.defaultTagText]
        });
      }
    };

    var renderContent = () => {
      var {
        address,
        disabled,
        switchable
      } = props;
      var Info = [(0, _vue.createVNode)("div", {
        "class": bem('name')
      }, [address.name + " " + address.tel, renderTag()]), (0, _vue.createVNode)("div", {
        "class": bem('address')
      }, [address.address])];

      if (switchable && !disabled) {
        return (0, _vue.createVNode)(_radio.default, {
          "name": address.id,
          "iconSize": 18
        }, {
          default: () => [Info]
        });
      }

      return Info;
    };

    return () => {
      var {
        disabled
      } = props;
      return (0, _vue.createVNode)("div", {
        "class": bem({
          disabled
        }),
        "onClick": onClick
      }, [(0, _vue.createVNode)(_cell.default, {
        "border": false,
        "valueClass": bem('value')
      }, {
        default: renderContent,
        'right-icon': renderRightIcon
      }), slots.bottom == null ? void 0 : slots.bottom((0, _extends2.default)({}, props.address, {
        disabled
      }))]);
    };
  }

});

exports.default = _default;