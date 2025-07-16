import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace, addUnit } from '../utils';
import { BORDER_TOP } from '../utils/constant';
import { useChildren } from '@vant/use';
var [name, bem] = createNamespace('grid');
export var GRID_KEY = Symbol(name);
export default defineComponent({
  name,
  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    direction: String,
    clickable: Boolean,
    columnNum: {
      type: [Number, String],
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },

  setup(props, {
    slots
  }) {
    var {
      linkChildren
    } = useChildren(GRID_KEY);
    linkChildren({
      props
    });
    return () => _createVNode("div", {
      "style": {
        paddingLeft: addUnit(props.gutter)
      },
      "class": [bem(), {
        [BORDER_TOP]: props.border && !props.gutter
      }]
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});