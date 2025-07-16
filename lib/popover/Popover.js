"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _popperjs = require("@vant/popperjs");

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _use = require("@vant/use");

var _icon = _interopRequireDefault(require("../icon"));

var _popup = _interopRequireDefault(require("../popup"));

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('popover');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    show: Boolean,
    overlay: Boolean,
    offset: {
      type: Array,
      default: () => [0, 8]
    },
    theme: {
      type: String,
      default: 'light'
    },
    trigger: {
      type: String,
      default: 'click'
    },
    actions: {
      type: Array,
      default: () => []
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    teleport: {
      type: [String, Object],
      default: 'body'
    },
    closeOnClickAction: {
      type: Boolean,
      default: true
    }
  },
  emits: ['select', 'touchstart', 'update:show'],

  setup(props, {
    emit,
    slots,
    attrs
  }) {
    var popper;
    var wrapperRef = (0, _vue.ref)();
    var popoverRef = (0, _vue.ref)();

    var createPopperInstance = () => {
      return (0, _popperjs.createPopper)(wrapperRef.value, popoverRef.value.popupRef.value, {
        placement: props.placement,
        modifiers: [{
          name: 'computeStyles',
          options: {
            adaptive: false,
            gpuAcceleration: false
          }
        }, (0, _extends2.default)({}, _popperjs.offsetModifier, {
          options: {
            offset: props.offset
          }
        })]
      });
    };

    var updateLocation = () => {
      (0, _vue.nextTick)(() => {
        if (!props.show) {
          return;
        }

        if (!popper) {
          popper = createPopperInstance();
        } else {
          popper.setOptions({
            placement: props.placement
          });
        }
      });
    };

    var updateShow = value => emit('update:show', value);

    var onClickWrapper = () => {
      if (props.trigger === 'click') {
        updateShow(!props.show);
      }
    };

    var onTouchstart = event => {
      event.stopPropagation();
      emit('touchstart', event);
    };

    var onClickAction = (action, index) => {
      if (action.disabled) {
        return;
      }

      emit('select', action, index);

      if (props.closeOnClickAction) {
        updateShow(false);
      }
    };

    var onClickAway = () => updateShow(false);

    var renderAction = (action, index) => {
      var {
        icon,
        text,
        color,
        disabled,
        className
      } = action;
      return (0, _vue.createVNode)("div", {
        "role": "menuitem",
        "class": [bem('action', {
          disabled,
          'with-icon': icon
        }), className],
        "style": {
          color
        },
        "onClick": () => onClickAction(action, index)
      }, [icon && (0, _vue.createVNode)(_icon.default, {
        "name": icon,
        "class": bem('action-icon')
      }, null), (0, _vue.createVNode)("div", {
        "class": [bem('action-text'), _constant.BORDER_BOTTOM]
      }, {
        default: () => [text]
      })]);
    };

    (0, _vue.onMounted)(updateLocation);
    (0, _vue.onBeforeUnmount)(() => {
      if (popper) {
        popper.destroy();
        popper = null;
      }
    });
    (0, _vue.watch)(() => [props.show, props.placement], updateLocation);
    (0, _use.useClickAway)(wrapperRef, onClickAway, {
      eventName: 'touchstart'
    });
    return () => (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("span", {
      "ref": wrapperRef,
      "class": bem('wrapper'),
      "onClick": onClickWrapper
    }, [slots.reference == null ? void 0 : slots.reference()]), (0, _vue.createVNode)(_popup.default, (0, _vue.mergeProps)({
      "ref": popoverRef,
      "show": props.show,
      "class": bem([props.theme]),
      "overlay": props.overlay,
      "position": '',
      "teleport": props.teleport,
      "transition": "van-popover-zoom",
      "lockScroll": false,
      "onTouchstart": onTouchstart
    }, (0, _extends2.default)({}, attrs, {
      'onUpdate:show': updateShow
    })), {
      default: () => [(0, _vue.createVNode)("div", {
        "class": bem('arrow')
      }, null), (0, _vue.createVNode)("div", {
        "role": "menu",
        "class": bem('content')
      }, [slots.default ? slots.default() : props.actions.map(renderAction)])]
    })]);
  }

});

exports.default = _default;