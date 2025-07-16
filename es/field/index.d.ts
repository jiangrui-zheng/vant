declare const Field: import("../utils").WithInstall<import("vue").DefineComponent<{
    rows: (NumberConstructor | StringConstructor)[];
    name: StringConstructor;
    rules: import("vue").PropType<import("./types").FieldRule[]>;
    autosize: import("vue").PropType<boolean | import("./types").FieldAutosizeConfig>;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    clearable: BooleanConstructor;
    formatter: import("vue").PropType<(value: string) => string>;
    maxlength: (NumberConstructor | StringConstructor)[];
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelClass: import("vue").PropType<unknown>;
    labelAlign: import("vue").PropType<import("./types").FieldTextAlign>;
    inputAlign: import("vue").PropType<import("./types").FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    errorMessage: StringConstructor;
    errorMessageAlign: import("vue").PropType<import("./types").FieldTextAlign>;
    showWordLimit: BooleanConstructor;
    type: {
        type: import("vue").PropType<import("./types").FieldType>;
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
        type: import("vue").PropType<import("./types").FieldClearTrigger>;
        default: string;
    };
    formatTrigger: {
        type: import("vue").PropType<import("./types").FieldFormatTrigger>;
        default: string;
    };
    icon: StringConstructor;
    size: import("vue").PropType<"large">;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    required: BooleanConstructor;
    iconPrefix: StringConstructor;
    valueClass: import("vue").PropType<unknown>;
    titleClass: import("vue").PropType<unknown>;
    titleStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    arrowDirection: import("vue").PropType<import("../cell").CellArrowDirection>;
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    clickable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "blur" | "focus" | "keypress" | "click-input" | "click-left-icon" | "click-right-icon" | "update:modelValue")[], "clear" | "blur" | "focus" | "keypress" | "click-input" | "click-left-icon" | "click-right-icon" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    center: boolean;
    type: import("./types").FieldType;
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
    clearTrigger: import("./types").FieldClearTrigger;
    formatTrigger: import("./types").FieldFormatTrigger;
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
    rules?: import("./types").FieldRule[] | undefined;
    autosize?: boolean | import("./types").FieldAutosizeConfig | undefined;
    leftIcon?: string | undefined;
    rightIcon?: string | undefined;
    formatter?: ((value: string) => string) | undefined;
    maxlength?: string | number | undefined;
    labelWidth?: string | number | undefined;
    labelAlign?: import("./types").FieldTextAlign | undefined;
    inputAlign?: import("./types").FieldTextAlign | undefined;
    placeholder?: string | undefined;
    autocomplete?: string | undefined;
    errorMessage?: string | undefined;
    errorMessageAlign?: import("./types").FieldTextAlign | undefined;
}>, {
    center: boolean;
    type: import("./types").FieldType;
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
    clearTrigger: import("./types").FieldClearTrigger;
    formatTrigger: import("./types").FieldFormatTrigger;
}>>;
export default Field;
export { Field };
export type { FieldType, FieldRule, FieldTextAlign, FieldClearTrigger, FieldFormatTrigger, FieldValidateError, FieldAutosizeConfig, FieldValidateTrigger, } from './types';
