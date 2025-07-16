import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace } from '../utils';
import { useChildren } from '@vant/use';
var [name, bem] = createNamespace('action-bar');
export var ACTION_BAR_KEY = Symbol(name);
export default defineComponent({
  name,
  props: {
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  },

  setup(props, {
    slots
  }) {
    var {
      linkChildren
    } = useChildren(ACTION_BAR_KEY);
    linkChildren();
    return () => _createVNode("div", {
      "class": bem({
        unfit: !props.safeAreaInsetBottom
      })
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});