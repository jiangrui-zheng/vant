import { PropType } from 'vue';
import type { FieldRule, FieldType, FieldTextAlign, FieldClearTrigger, FieldFormatTrigger, FieldAutosizeConfig } from './types';
declare const _default: import("vue").DefineComponent<{
    rows: (NumberConstructor | StringConstructor)[];
    name: StringConstructor;
    rules: PropType<FieldRule[]>;
    autosize: PropType<boolean | FieldAutosizeConfig>;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    clearable: BooleanConstructor;
    formatter: PropType<(value: string) => string>;
    maxlength: (NumberConstructor | StringConstructor)[];
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelClass: PropType<unknown>;
    labelAlign: PropType<FieldTextAlign>;
    inputAlign: PropType<FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    errorMessage: StringConstructor;
    errorMessageAlign: PropType<FieldTextAlign>;
    showWordLimit: BooleanConstructor;
    type: {
        type: PropType<FieldType>;
        default: string;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    colon: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    clearTrigger: {
        type: PropType<FieldClearTrigger>;
        default: string;
    };
    formatTrigger: {
        type: PropType<FieldFormatTrigger>;
        default: string;
    };
    icon: StringConstructor;
    size: PropType<"large">;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    required: BooleanConstructor;
    iconPrefix: StringConstructor;
    valueClass: PropType<unknown>;
    titleClass: PropType<unknown>;
    titleStyle: PropType<string | import("vue").CSSProperties>;
    arrowDirection: PropType<import("../cell").CellArrowDirection>;
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    clickable: {
        type: PropType<boolean | null>;
        default: null;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "blur" | "focus" | "keypress" | "click-input" | "click-left-icon" | "click-right-icon" | "update:modelValue")[], "clear" | "blur" | "focus" | "keypress" | "click-input" | "click-left-icon" | "click-right-icon" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    center: boolean;
    type: FieldType;
    border: boolean;
    disabled: boolean;
    error: boolean;
    readonly: boolean;
    isLink: boolean;
    required: boolean;
    clickable: boolean | null;
    clearable: boolean;
    showWordLimit: boolean;
    colon: boolean;
    modelValue: string | number;
    clearTrigger: FieldClearTrigger;
    formatTrigger: FieldFormatTrigger;
} & {
    name?: string | undefined;
    label?: string | number | undefined;
    title?: string | number | undefined;
    icon?: string | undefined;
    size?: "large" | undefined;
    iconPrefix?: string | undefined;
    value?: string | number | undefined;
    valueClass?: unknown;
    labelClass?: unknown;
    titleClass?: unknown;
    titleStyle?: string | import("vue").CSSProperties | undefined;
    arrowDirection?: import("../cell").CellArrowDirection | undefined;
    rows?: string | number | undefined;
    rules?: FieldRule[] | undefined;
    autosize?: boolean | FieldAutosizeConfig | undefined;
    leftIcon?: string | undefined;
    rightIcon?: string | undefined;
    formatter?: ((value: string) => string) | undefined;
    maxlength?: string | number | undefined;
    labelWidth?: string | number | undefined;
    labelAlign?: FieldTextAlign | undefined;
    inputAlign?: FieldTextAlign | undefined;
    placeholder?: string | undefined;
    autocomplete?: string | undefined;
    errorMessage?: string | undefined;
    errorMessageAlign?: FieldTextAlign | undefined;
}>, {
    center: boolean;
    type: FieldType;
    border: boolean;
    disabled: boolean;
    error: boolean;
    readonly: boolean;
    isLink: boolean;
    required: boolean;
    clickable: boolean | null;
    clearable: boolean;
    showWordLimit: boolean;
    colon: boolean;
    modelValue: string | number;
    clearTrigger: FieldClearTrigger;
    formatTrigger: FieldFormatTrigger;
}>;
export default _default;
