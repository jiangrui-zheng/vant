import { mergeProps as _mergeProps } from "vue";
import { resolveDirective as _resolveDirective } from "vue";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
import { ref, defineComponent } from 'vue'; // Utils

import { pick, createNamespace, preventDefault } from '../utils'; // Composables

import { useExpose } from '../composables/use-expose'; // Components

import Field from '../field'; // Types

var [name, bem, t] = createNamespace('search');
export default defineComponent({
  name,
  inheritAttrs: false,
  props: {
    label: String,
    rightIcon: String,
    modelValue: String,
    actionText: String,
    background: String,
    showAction: Boolean,
    clearTrigger: String,
    shape: {
      type: String,
      default: 'square'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    leftIcon: {
      type: String,
      default: 'search'
    }
  },
  emits: ['update:modelValue', 'search', 'cancel'],

  setup(props, {
    emit,
    slots,
    attrs
  }) {
    var filedRef = ref();

    var onCancel = () => {
      if (!slots.action) {
        emit('update:modelValue', '');
        emit('cancel');
      }
    };

    var onKeypress = event => {
      var ENTER_CODE = 13;

      if (event.keyCode === ENTER_CODE) {
        preventDefault(event);
        emit('search', props.modelValue);
      }
    };

    var renderLabel = () => {
      if (slots.label || props.label) {
        return _createVNode("div", {
          "class": bem('label')
        }, [slots.label ? slots.label() : props.label]);
      }
    };

    var renderAction = () => {
      if (props.showAction) {
        var text = props.actionText || t('cancel');
        return _createVNode("div", {
          "class": bem('action'),
          "role": "button",
          "tabindex": 0,
          "onClick": onCancel
        }, [slots.action ? slots.action() : text]);
      }
    };

    var blur = () => {
      var _filedRef$value;

      return (_filedRef$value = filedRef.value) == null ? void 0 : _filedRef$value.blur();
    };

    var focus = () => {
      var _filedRef$value2;

      return (_filedRef$value2 = filedRef.value) == null ? void 0 : _filedRef$value2.focus();
    };

    var fieldPropNames = ['leftIcon', 'rightIcon', 'clearable', 'modelValue', 'clearTrigger'];

    var renderField = () => {
      var fieldAttrs = _extends({}, attrs, pick(props, fieldPropNames), {
        style: null,
        class: null
      });

      var onInput = value => emit('update:modelValue', value);

      return _createVNode(Field, _mergeProps({
        "ref": filedRef,
        "type": "search",
        "border": false,
        "onKeypress": onKeypress
      }, fieldAttrs, {
        'onUpdate:modelValue': onInput
      }), _extends({}, pick(slots, ['left-icon', 'right-icon'])));
    };

    useExpose({
      focus,
      blur
    });
    return () => _createVNode("div", {
      "class": [bem({
        'show-action': props.showAction
      }), attrs.class],
      "style": _extends({
        background: props.background
      }, attrs.style)
    }, [slots.left == null ? void 0 : slots.left(), _createVNode("div", {
      "class": bem('content', props.shape)
    }, [renderLabel(), renderField()]), renderAction()]);
  }

});