import { createVNode as _createVNode } from "vue";
import { mergeProps as _mergeProps } from "vue";
import { resolveDirective as _resolveDirective } from "vue";
import _extends from "@babel/runtime/helpers/esm/extends";
import { computed, watch, defineComponent } from 'vue'; // Utils

import { createNamespace, pick } from '../utils';
import { CHECKBOX_GROUP_KEY } from '../checkbox-group/CheckboxGroup'; // Composables

import { useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useLinkField } from '../composables/use-link-field'; // Components

import Checker, { checkerProps } from './Checker';
var [name, bem] = createNamespace('checkbox');
export default defineComponent({
  name,
  props: _extends({}, checkerProps, {
    bindGroup: {
      type: Boolean,
      default: true
    }
  }),
  emits: ['change', 'update:modelValue'],

  setup(props, {
    emit,
    slots
  }) {
    var {
      parent
    } = useParent(CHECKBOX_GROUP_KEY);

    var setParentValue = checked => {
      var {
        name
      } = props;
      var {
        max,
        modelValue
      } = parent.props;
      var value = modelValue.slice();

      if (checked) {
        var overlimit = max && value.length >= max;

        if (!overlimit && !value.includes(name)) {
          value.push(name);

          if (props.bindGroup) {
            parent.updateValue(value);
          }
        }
      } else {
        var index = value.indexOf(name);

        if (index !== -1) {
          value.splice(index, 1);

          if (props.bindGroup) {
            parent.updateValue(value);
          }
        }
      }
    };

    var checked = computed(() => {
      if (parent && props.bindGroup) {
        return parent.props.modelValue.indexOf(props.name) !== -1;
      }

      return !!props.modelValue;
    });

    var toggle = (newValue = !checked.value) => {
      if (parent && props.bindGroup) {
        setParentValue(newValue);
      } else {
        emit('update:modelValue', newValue);
      }
    };

    watch(() => props.modelValue, value => emit('change', value));
    useExpose({
      toggle,
      props,
      checked
    });
    useLinkField(() => props.modelValue);
    return () => _createVNode(Checker, _mergeProps({
      "bem": bem,
      "role": "checkbox",
      "parent": parent,
      "checked": checked.value,
      "onToggle": toggle
    }, props), _extends({}, pick(slots, ['default', 'icon'])));
  }

});