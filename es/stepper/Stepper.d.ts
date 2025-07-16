import { PropType } from 'vue';
import { Interceptor } from '../utils/interceptor';
export declare type StepperTheme = 'default' | 'round';
declare const _default: import("vue").DefineComponent<{
    theme: PropType<StepperTheme>;
    integer: BooleanConstructor;
    disabled: BooleanConstructor;
    showPlus: {
        type: BooleanConstructor;
        default: true;
    };
    showMinus: {
        type: BooleanConstructor;
        default: true;
    };
    showInput: {
        type: BooleanConstructor;
        default: true;
    };
    longPress: {
        type: BooleanConstructor;
        default: true;
    };
    allowEmpty: BooleanConstructor;
    modelValue: (NumberConstructor | StringConstructor)[];
    inputWidth: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    placeholder: StringConstructor;
    disablePlus: BooleanConstructor;
    disableMinus: BooleanConstructor;
    disableInput: BooleanConstructor;
    beforeChange: PropType<Interceptor>;
    decimalLength: (NumberConstructor | StringConstructor)[];
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    defaultValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "update:modelValue" | "plus" | "minus" | "overlimit")[], "blur" | "change" | "focus" | "update:modelValue" | "plus" | "minus" | "overlimit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    theme?: unknown;
    integer?: unknown;
    disabled?: unknown;
    showPlus?: unknown;
    showMinus?: unknown;
    showInput?: unknown;
    longPress?: unknown;
    allowEmpty?: unknown;
    modelValue?: unknown;
    inputWidth?: unknown;
    buttonSize?: unknown;
    placeholder?: unknown;
    disablePlus?: unknown;
    disableMinus?: unknown;
    disableInput?: unknown;
    beforeChange?: unknown;
    decimalLength?: unknown;
    name?: unknown;
    min?: unknown;
    max?: unknown;
    step?: unknown;
    defaultValue?: unknown;
} & {
    name: string | number;
    max: string | number;
    disabled: boolean;
    min: string | number;
    step: string | number;
    integer: boolean;
    showPlus: boolean;
    showMinus: boolean;
    showInput: boolean;
    longPress: boolean;
    allowEmpty: boolean;
    disablePlus: boolean;
    disableMinus: boolean;
    disableInput: boolean;
    defaultValue: string | number;
} & {
    placeholder?: string | undefined;
    modelValue?: string | number | undefined;
    theme?: StepperTheme | undefined;
    beforeChange?: Interceptor | undefined;
    buttonSize?: string | number | undefined;
    inputWidth?: string | number | undefined;
    decimalLength?: string | number | undefined;
}>, {
    name: string | number;
    max: string | number;
    disabled: boolean;
    min: string | number;
    step: string | number;
    integer: boolean;
    showPlus: boolean;
    showMinus: boolean;
    showInput: boolean;
    longPress: boolean;
    allowEmpty: boolean;
    disablePlus: boolean;
    disableMinus: boolean;
    disableInput: boolean;
    defaultValue: string | number;
}>;
export default _default;
