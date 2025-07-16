import { PropType } from 'vue';
export declare type CascaderOption = {
    text?: string;
    value?: string | number;
    color?: string;
    disabled?: boolean;
    children?: CascaderOption[];
    className?: unknown;
    [key: string]: any;
};
export declare type CascaderFieldNames = {
    text?: string;
    value?: string;
    children?: string;
};
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    closeable: {
        type: BooleanConstructor;
        default: true;
    };
    swipeable: {
        type: BooleanConstructor;
        default: true;
    };
    modelValue: (NumberConstructor | StringConstructor)[];
    fieldNames: PropType<CascaderFieldNames>;
    placeholder: StringConstructor;
    activeColor: StringConstructor;
    options: {
        type: PropType<CascaderOption[]>;
        default: () => never[];
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "update:modelValue" | "finish" | "click-tab")[], "change" | "close" | "update:modelValue" | "finish" | "click-tab", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    title?: unknown;
    closeable?: unknown;
    swipeable?: unknown;
    modelValue?: unknown;
    fieldNames?: unknown;
    placeholder?: unknown;
    activeColor?: unknown;
    options?: unknown;
    closeIcon?: unknown;
} & {
    closeable: boolean;
    closeIcon: string;
    options: CascaderOption[];
    swipeable: boolean;
} & {
    title?: string | undefined;
    placeholder?: string | undefined;
    modelValue?: string | number | undefined;
    activeColor?: string | undefined;
    fieldNames?: CascaderFieldNames | undefined;
}>, {
    closeable: boolean;
    closeIcon: string;
    options: CascaderOption[];
    swipeable: boolean;
}>;
export default _default;
