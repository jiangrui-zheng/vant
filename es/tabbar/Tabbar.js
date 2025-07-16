import { createVNode as _createVNode } from "vue";
import { ref, defineComponent } from 'vue'; // Utils

import { createNamespace, getZIndexStyle } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { callInterceptor } from '../utils/interceptor'; // Composables

import { useChildren } from '@vant/use';
import { usePlaceholder } from '../composables/use-placeholder';
var [name, bem] = createNamespace('tabbar');
export var TABBAR_KEY = Symbol(name);
export default defineComponent({
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
    var root = ref();
    var {
      linkChildren
    } = useChildren(TABBAR_KEY);
    var renderPlaceholder = usePlaceholder(root, bem);

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
      return _createVNode("div", {
        "ref": root,
        "style": getZIndexStyle(zIndex),
        "class": [bem({
          unfit: isUnfit(),
          fixed
        }), {
          [BORDER_TOP_BOTTOM]: border
        }]
      }, [slots.default == null ? void 0 : slots.default()]);
    };

    var setActive = active => {
      if (active !== props.modelValue) {
        callInterceptor({
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