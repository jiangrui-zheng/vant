import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { mergeProps as _mergeProps } from "vue";
import { resolveDirective as _resolveDirective } from "vue";
import { defineComponent } from 'vue'; // Utils

import { pick, createNamespace } from '../utils';
import { RADIO_KEY } from '../radio-group/RadioGroup'; // Composables

import { useParent } from '@vant/use'; // Components

import Checker, { checkerProps } from '../checkbox/Checker';
var [name, bem] = createNamespace('radio');
export default defineComponent({
  name,
  props: checkerProps,
  emits: ['update:modelValue'],

  setup(props, {
    emit,
    slots
  }) {
    var {
      parent
    } = useParent(RADIO_KEY);

    var checked = () => {
      var value = parent ? parent.props.modelValue : props.modelValue;
      return value === props.name;
    };

    var toggle = () => {
      if (parent) {
        parent.updateValue(props.name);
      } else {
        emit('update:modelValue', props.name);
      }
    };

    return () => _createVNode(Checker, _mergeProps({
      "bem": bem,
      "role": "radio",
      "parent": parent,
      "checked": checked(),
      "onToggle": toggle
    }, props), _extends({}, pick(slots, ['default', 'icon'])));
  }

});