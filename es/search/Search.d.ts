import { PropType } from 'vue';
import type { FieldClearTrigger } from '../field/types';
export declare type SearchShape = 'square' | 'round';
declare const _default: import("vue").DefineComponent<{
    label: StringConstructor;
    rightIcon: StringConstructor;
    modelValue: StringConstructor;
    actionText: StringConstructor;
    background: StringConstructor;
    showAction: BooleanConstructor;
    clearTrigger: PropType<FieldClearTrigger>;
    shape: {
        type: PropType<SearchShape>;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftIcon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "search" | "update:modelValue")[], "cancel" | "search" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    leftIcon: string;
    clearable: boolean;
    shape: SearchShape;
    showAction: boolean;
} & {
    label?: string | undefined;
    rightIcon?: string | undefined;
    modelValue?: string | undefined;
    clearTrigger?: FieldClearTrigger | undefined;
    background?: string | undefined;
    actionText?: string | undefined;
}>, {
    leftIcon: string;
    clearable: boolean;
    shape: SearchShape;
    showAction: boolean;
}>;
export default _default;
