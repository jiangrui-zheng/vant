import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { createNamespace } from '../utils';
var [name, bem] = createNamespace('config-provider');
export function kebabCase(word) {
  return word.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

function mapThemeVarsToCSSVars(themeVars) {
  var cssVars = {};
  Object.keys(themeVars).forEach(key => {
    cssVars["--van-" + kebabCase(key)] = themeVars[key];
  });
  return cssVars;
}

export default defineComponent({
  name,
  props: {
    themeVars: Object,
    tag: {
      type: String,
      default: 'div'
    }
  },

  setup(props, {
    slots
  }) {
    var style = computed(() => {
      if (props.themeVars) {
        return mapThemeVarsToCSSVars(props.themeVars);
      }
    });
    return () => _createVNode(props.tag, {
      "class": bem(),
      "style": style.value
    }, {
      default: () => [slots.default == null ? void 0 : slots.default()]
    });
  }

});