import { PropType } from 'vue';
import { Interceptor } from '../utils/interceptor';
declare const _default: import("vue").DefineComponent<{
    theme: StringConstructor;
    integer: BooleanConstructor;
    disabled: BooleanConstructor;
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
    showPlus: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMinus: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    longPress: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "update:modelValue" | "plus" | "minus" | "overlimit")[], "blur" | "change" | "focus" | "update:modelValue" | "plus" | "minus" | "overlimit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    name: string | number;
    max: string | number;
    disabled: boolean;
    min: string | number;
    step: string | number;
    integer: boolean;
    allowEmpty: boolean;
    disablePlus: boolean;
    disableMinus: boolean;
    disableInput: boolean;
    defaultValue: string | number;
    showPlus: boolean;
    showMinus: boolean;
    showInput: boolean;
    longPress: boolean;
} & {
    placeholder?: string | undefined;
    modelValue?: string | number | undefined;
    theme?: string | undefined;
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
    allowEmpty: boolean;
    disablePlus: boolean;
    disableMinus: boolean;
    disableInput: boolean;
    defaultValue: string | number;
    showPlus: boolean;
    showMinus: boolean;
    showInput: boolean;
    longPress: boolean;
}>;
export default _default;
