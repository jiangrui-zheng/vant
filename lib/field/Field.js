var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => stdin_default,
  fieldSharedProps: () => fieldSharedProps
});
module.exports = __toCommonJS(stdin_exports);
var import_vue = require("vue");
var import_vue2 = require("vue");
var import_utils = require("../utils");
var import_utils2 = require("./utils");
var import_Cell = require("../cell/Cell");
var import_use = require("@vant/use");
var import_use_id = require("../composables/use-id");
var import_use_expose = require("../composables/use-expose");
var import_icon = require("../icon");
var import_cell = require("../cell");
const [name, bem] = (0, import_utils.createNamespace)("field");
const fieldSharedProps = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: import_utils.numericProp,
  formatter: Function,
  clearIcon: (0, import_utils.makeStringProp)("clear"),
  modelValue: (0, import_utils.makeNumericProp)(""),
  inputAlign: String,
  placeholder: String,
  autocomplete: String,
  errorMessage: String,
  enterkeyhint: String,
  clearTrigger: (0, import_utils.makeStringProp)("focus"),
  formatTrigger: (0, import_utils.makeStringProp)("onChange"),
  error: {
    type: Boolean,
    default: null
  },
  disabled: {
    type: Boolean,
    default: null
  },
  readonly: {
    type: Boolean,
    default: null
  }
};
const fieldProps = (0, import_utils.extend)({}, import_Cell.cellSharedProps, fieldSharedProps, {
  rows: import_utils.numericProp,
  type: (0, import_utils.makeStringProp)("text"),
  rules: Array,
  autosize: [Boolean, Object],
  labelWidth: import_utils.numericProp,
  labelClass: import_utils.unknownProp,
  labelAlign: String,
  showWordLimit: Boolean,
  errorMessageAlign: String,
  colon: {
    type: Boolean,
    default: null
  }
});
var stdin_default = (0, import_vue2.defineComponent)({
  name,
  props: fieldProps,
  emits: ["blur", "focus", "clear", "keypress", "click-input", "end-validate", "start-validate", "click-left-icon", "click-right-icon", "update:modelValue"],
  setup(props, {
    emit,
    slots
  }) {
    const id = (0, import_use_id.useId)();
    const state = (0, import_vue2.reactive)({
      status: "unvalidated",
      focused: false,
      validateMessage: ""
    });
    const inputRef = (0, import_vue2.ref)();
    const clearIconRef = (0, import_vue2.ref)();
    const customValue = (0, import_vue2.ref)();
    const {
      parent: form
    } = (0, import_use.useParent)(import_utils.FORM_KEY);
    const getModelValue = () => {
      var _a;
      return String((_a = props.modelValue) != null ? _a : "");
    };
    const getProp = (key) => {
      if ((0, import_utils.isDef)(props[key])) {
        return props[key];
      }
      if (form && (0, import_utils.isDef)(form.props[key])) {
        return form.props[key];
      }
    };
    const showClear = (0, import_vue2.computed)(() => {
      const readonly = getProp("readonly");
      if (props.clearable && !readonly) {
        const hasValue = getModelValue() !== "";
        const trigger = props.clearTrigger === "always" || props.clearTrigger === "focus" && state.focused;
        return hasValue && trigger;
      }
      return false;
    });
    const formValue = (0, import_vue2.computed)(() => {
      if (customValue.value && slots.input) {
        return customValue.value();
      }
      return props.modelValue;
    });
    const runRules = (rules) => rules.reduce((promise, rule) => promise.then(() => {
      if (state.status === "failed") {
        return;
      }
      let {
        value
      } = formValue;
      if (rule.formatter) {
        value = rule.formatter(value, rule);
      }
      if (!(0, import_utils2.runSyncRule)(value, rule)) {
        state.status = "failed";
        state.validateMessage = (0, import_utils2.getRuleMessage)(value, rule);
        return;
      }
      if (rule.validator) {
        if ((0, import_utils2.isEmptyValue)(value) && rule.validateEmpty === false) {
          return;
        }
        return (0, import_utils2.runRuleValidator)(value, rule).then((result) => {
          if (result && typeof result === "string") {
            state.status = "failed";
            state.validateMessage = result;
          } else if (result === false) {
            state.status = "failed";
            state.validateMessage = (0, import_utils2.getRuleMessage)(value, rule);
          }
        });
      }
    }), Promise.resolve());
    const resetValidation = () => {
      state.status = "unvalidated";
      state.validateMessage = "";
    };
    const endValidate = () => emit("end-validate", {
      status: state.status
    });
    const validate = (rules = props.rules) => new Promise((resolve) => {
      resetValidation();
      if (rules) {
        emit("start-validate");
        runRules(rules).then(() => {
          if (state.status === "failed") {
            resolve({
              name: props.name,
              message: state.validateMessage
            });
            endValidate();
          } else {
            state.status = "passed";
            resolve();
            endValidate();
          }
        });
      } else {
        resolve();
      }
    });
    const validateWithTrigger = (trigger) => {
      if (form && props.rules) {
        const {
          validateTrigger
        } = form.props;
        const defaultTrigger = (0, import_utils.toArray)(validateTrigger).includes(trigger);
        const rules = props.rules.filter((rule) => {
          if (rule.trigger) {
            return (0, import_utils.toArray)(rule.trigger).includes(trigger);
          }
          return defaultTrigger;
        });
        if (rules.length) {
          validate(rules);
        }
      }
    };
    const limitValueLength = (value) => {
      var _a;
      const {
        maxlength
      } = props;
      if ((0, import_utils.isDef)(maxlength) && (0, import_utils2.getStringLength)(value) > maxlength) {
        const modelValue = getModelValue();
        if (modelValue && (0, import_utils2.getStringLength)(modelValue) === +maxlength) {
          return modelValue;
        }
        const selectionEnd = (_a = inputRef.value) == null ? void 0 : _a.selectionEnd;
        if (state.focused && selectionEnd) {
          const valueArr = [...value];
          const exceededLength = valueArr.length - +maxlength;
          valueArr.splice(selectionEnd - exceededLength, exceededLength);
          return valueArr.join("");
        }
        return (0, import_utils2.cutString)(value, +maxlength);
      }
      return value;
    };
    const updateValue = (value, trigger = "onChange") => {
      const originalValue = value;
      value = limitValueLength(value);
      const limitDiffLen = (0, import_utils2.getStringLength)(originalValue) - (0, import_utils2.getStringLength)(value);
      if (props.type === "number" || props.type === "digit") {
        const isNumber = props.type === "number";
        value = (0, import_utils.formatNumber)(value, isNumber, isNumber);
      }
      let formatterDiffLen = 0;
      if (props.formatter && trigger === props.formatTrigger) {
        const {
          formatter,
          maxlength
        } = props;
        value = formatter(value);
        if ((0, import_utils.isDef)(maxlength) && (0, import_utils2.getStringLength)(value) > maxlength) {
          value = (0, import_utils2.cutString)(value, +maxlength);
        }
        if (inputRef.value && state.focused) {
          const {
            selectionEnd
          } = inputRef.value;
          const bcoVal = (0, import_utils2.cutString)(originalValue, selectionEnd);
          formatterDiffLen = (0, import_utils2.getStringLength)(formatter(bcoVal)) - (0, import_utils2.getStringLength)(bcoVal);
        }
      }
      if (inputRef.value && inputRef.value.value !== value) {
        if (state.focused) {
          let {
            selectionStart,
            selectionEnd
          } = inputRef.value;
          inputRef.value.value = value;
          if ((0, import_utils.isDef)(selectionStart) && (0, import_utils.isDef)(selectionEnd)) {
            const valueLen = (0, import_utils2.getStringLength)(value);
            if (limitDiffLen) {
              selectionStart -= limitDiffLen;
              selectionEnd -= limitDiffLen;
            } else if (formatterDiffLen) {
              selectionStart += formatterDiffLen;
              selectionEnd += formatterDiffLen;
            }
            inputRef.value.setSelectionRange(Math.min(selectionStart, valueLen), Math.min(selectionEnd, valueLen));
          }
        } else {
          inputRef.value.value = value;
        }
      }
      if (value !== props.modelValue) {
        emit("update:modelValue", value);
      }
    };
    const onInput = (event) => {
      if (!event.target.composing) {
        updateValue(event.target.value);
      }
    };
    const blur = () => {
      var _a;
      return (_a = inputRef.value) == null ? void 0 : _a.blur();
    };
    const focus = () => {
      var _a;
      return (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const adjustTextareaSize = () => {
      const input = inputRef.value;
      if (props.type === "textarea" && props.autosize && input) {
        (0, import_utils2.resizeTextarea)(input, props.autosize);
      }
    };
    const onFocus = (event) => {
      state.focused = true;
      emit("focus", event);
      (0, import_vue2.nextTick)(adjustTextareaSize);
      if (getProp("readonly")) {
        blur();
      }
    };
    const onBlur = (event) => {
      if (getProp("readonly")) {
        return;
      }
      state.focused = false;
      updateValue(getModelValue(), "onBlur");
      emit("blur", event);
      validateWithTrigger("onBlur");
      (0, import_vue2.nextTick)(adjustTextareaSize);
      (0, import_utils.resetScroll)();
    };
    const onClickInput = (event) => emit("click-input", event);
    const onClickLeftIcon = (event) => emit("click-left-icon", event);
    const onClickRightIcon = (event) => emit("click-right-icon", event);
    const onClear = (event) => {
      (0, import_utils.preventDefault)(event);
      emit("update:modelValue", "");
      emit("clear", event);
    };
    const showError = (0, import_vue2.computed)(() => {
      if (typeof props.error === "boolean") {
        return props.error;
      }
      if (form && form.props.showError && state.status === "failed") {
        return true;
      }
    });
    const labelStyle = (0, import_vue2.computed)(() => {
      const labelWidth = getProp("labelWidth");
      if (labelWidth) {
        return {
          width: (0, import_utils.addUnit)(labelWidth)
        };
      }
    });
    const onKeypress = (event) => {
      const ENTER_CODE = 13;
      if (event.keyCode === ENTER_CODE) {
        const submitOnEnter = form && form.props.submitOnEnter;
        if (!submitOnEnter && props.type !== "textarea") {
          (0, import_utils.preventDefault)(event);
        }
        if (props.type === "search") {
          blur();
        }
      }
      emit("keypress", event);
    };
    const getInputId = () => props.id || `${id}-input`;
    const getValidationStatus = () => state.status;
    const renderInput = () => {
      const controlClass = bem("control", [getProp("inputAlign"), {
        error: showError.value,
        custom: !!slots.input,
        "min-height": props.type === "textarea" && !props.autosize
      }]);
      if (slots.input) {
        return (0, import_vue.createVNode)("div", {
          "class": controlClass,
          "onClick": onClickInput
        }, [slots.input()]);
      }
      const inputAttrs = {
        id: getInputId(),
        ref: inputRef,
        name: props.name,
        rows: props.rows !== void 0 ? +props.rows : void 0,
        class: controlClass,
        disabled: getProp("disabled"),
        readonly: getProp("readonly"),
        autofocus: props.autofocus,
        placeholder: props.placeholder,
        autocomplete: props.autocomplete,
        enterkeyhint: props.enterkeyhint,
        "aria-labelledby": props.label ? `${id}-label` : void 0,
        onBlur,
        onFocus,
        onInput,
        onClick: onClickInput,
        onChange: import_utils2.endComposing,
        onKeypress,
        onCompositionend: import_utils2.endComposing,
        onCompositionstart: import_utils2.startComposing
      };
      if (props.type === "textarea") {
        return (0, import_vue.createVNode)("textarea", inputAttrs, null);
      }
      return (0, import_vue.createVNode)("input", (0, import_vue.mergeProps)((0, import_utils2.mapInputType)(props.type), inputAttrs), null);
    };
    const renderLeftIcon = () => {
      const leftIconSlot = slots["left-icon"];
      if (props.leftIcon || leftIconSlot) {
        return (0, import_vue.createVNode)("div", {
          "class": bem("left-icon"),
          "onClick": onClickLeftIcon
        }, [leftIconSlot ? leftIconSlot() : (0, import_vue.createVNode)(import_icon.Icon, {
          "name": props.leftIcon,
          "classPrefix": props.iconPrefix
        }, null)]);
      }
    };
    const renderRightIcon = () => {
      const rightIconSlot = slots["right-icon"];
      if (props.rightIcon || rightIconSlot) {
        return (0, import_vue.createVNode)("div", {
          "class": bem("right-icon"),
          "onClick": onClickRightIcon
        }, [rightIconSlot ? rightIconSlot() : (0, import_vue.createVNode)(import_icon.Icon, {
          "name": props.rightIcon,
          "classPrefix": props.iconPrefix
        }, null)]);
      }
    };
    const renderWordLimit = () => {
      if (props.showWordLimit && props.maxlength) {
        const count = (0, import_utils2.getStringLength)(getModelValue());
        return (0, import_vue.createVNode)("div", {
          "class": bem("word-limit")
        }, [(0, import_vue.createVNode)("span", {
          "class": bem("word-num")
        }, [count]), (0, import_vue.createTextVNode)("/"), props.maxlength]);
      }
    };
    const renderMessage = () => {
      if (form && form.props.showErrorMessage === false) {
        return;
      }
      const message = props.errorMessage || state.validateMessage;
      if (message) {
        const slot = slots["error-message"];
        const errorMessageAlign = getProp("errorMessageAlign");
        return (0, import_vue.createVNode)("div", {
          "class": bem("error-message", errorMessageAlign)
        }, [slot ? slot({
          message
        }) : message]);
      }
    };
    const renderLabel = () => {
      const colon = getProp("colon") ? ":" : "";
      if (slots.label) {
        return [slots.label(), colon];
      }
      if (props.label) {
        return (0, import_vue.createVNode)("label", {
          "id": `${id}-label`,
          "for": getInputId()
        }, [props.label + colon]);
      }
    };
    const renderFieldBody = () => [(0, import_vue.createVNode)("div", {
      "class": bem("body")
    }, [renderInput(), showClear.value && (0, import_vue.createVNode)(import_icon.Icon, {
      "ref": clearIconRef,
      "name": props.clearIcon,
      "class": bem("clear")
    }, null), renderRightIcon(), slots.button && (0, import_vue.createVNode)("div", {
      "class": bem("button")
    }, [slots.button()])]), renderWordLimit(), renderMessage()];
    (0, import_use_expose.useExpose)({
      blur,
      focus,
      validate,
      formValue,
      resetValidation,
      getValidationStatus
    });
    (0, import_vue2.provide)(import_use.CUSTOM_FIELD_INJECTION_KEY, {
      customValue,
      resetValidation,
      validateWithTrigger
    });
    (0, import_vue2.watch)(() => props.modelValue, () => {
      updateValue(getModelValue());
      resetValidation();
      validateWithTrigger("onChange");
      (0, import_vue2.nextTick)(adjustTextareaSize);
    });
    (0, import_vue2.onMounted)(() => {
      updateValue(getModelValue(), props.formatTrigger);
      (0, import_vue2.nextTick)(adjustTextareaSize);
    });
    (0, import_use.useEventListener)("touchstart", onClear, {
      target: (0, import_vue2.computed)(() => {
        var _a;
        return (_a = clearIconRef.value) == null ? void 0 : _a.$el;
      })
    });
    return () => {
      const disabled = getProp("disabled");
      const labelAlign = getProp("labelAlign");
      const Label = renderLabel();
      const LeftIcon = renderLeftIcon();
      return (0, import_vue.createVNode)(import_cell.Cell, {
        "size": props.size,
        "icon": props.leftIcon,
        "class": bem({
          error: showError.value,
          disabled,
          [`label-${labelAlign}`]: labelAlign
        }),
        "center": props.center,
        "border": props.border,
        "isLink": props.isLink,
        "clickable": props.clickable,
        "titleStyle": labelStyle.value,
        "valueClass": bem("value"),
        "titleClass": [bem("label", [labelAlign, {
          required: props.required
        }]), props.labelClass],
        "arrowDirection": props.arrowDirection
      }, {
        icon: LeftIcon ? () => LeftIcon : null,
        title: Label ? () => Label : null,
        value: renderFieldBody,
        extra: slots.extra
      });
    };
  }
});
