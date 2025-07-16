"use strict";

exports.__esModule = true;
exports.default = exports.TABBAR_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _interceptor = require("../utils/interceptor");

var _use = require("@vant/use");

var _usePlaceholder = require("../composables/use-placeholder");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('tabbar');
var TABBAR_KEY = Symbol(name);
exports.TABBAR_KEY = TABBAR_KEY;

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    route: Boolean,
    zIndex: [Number, String],
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: null
    }
  },
  emits: ['change', 'update:modelValue'],

  setup(props, {
    emit,
    slots
  }) {
    var root = (0, _vue.ref)();
    var {
      linkChildren
    } = (0, _use.useChildren)(TABBAR_KEY);
    var renderPlaceholder = (0, _usePlaceholder.usePlaceholder)(root, bem);

    var isUnfit = () => {
      if (props.safeAreaInsetBottom !== null) {
        return !props.safeAreaInsetBottom;
      } // enable safe-area-inset-bottom by default when fixed


      return !props.fixed;
    };

    var renderTabbar = () => {
      var {
        fixed,
        zIndex,
        border
      } = props;
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "style": (0, _utils.getZIndexStyle)(zIndex),
        "class": [bem({
          unfit: isUnfit(),
          fixed
        }), {
          [_constant.BORDER_TOP_BOTTOM]: border
        }]
      }, [slots.default == null ? void 0 : slots.default()]);
    };

    var setActive = active => {
      if (active !== props.modelValue) {
        (0, _interceptor.callInterceptor)({
          interceptor: props.beforeChange,
          args: [active],

          done() {
            emit('update:modelValue', active);
            emit('change', active);
          }

        });
      }
    };

    linkChildren({
      props,
      setActive
    });
    return () => {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderTabbar);
      }

      return renderTabbar();
    };
  }

});

exports.default = _default;