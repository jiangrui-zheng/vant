import { PropType } from 'vue';
export declare type CascaderOption = {
    text?: string;
    value?: string | number;
    children?: CascaderOption[];
    [key: string]: any;
};
declare type CascaderFieldNames = {
    text?: string;
    value?: string;
    children?: string;
};
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    modelValue: (NumberConstructor | StringConstructor)[];
    fieldNames: PropType<CascaderFieldNames>;
    placeholder: StringConstructor;
    activeColor: StringConstructor;
    options: {
        type: PropType<CascaderOption[]>;
        default: () => never[];
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "update:modelValue" | "finish")[], "change" | "close" | "update:modelValue" | "finish", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    closeable: boolean;
    options: CascaderOption[];
} & {
    title?: string | undefined;
    placeholder?: string | undefined;
    modelValue?: string | number | undefined;
    activeColor?: string | undefined;
    fieldNames?: CascaderFieldNames | undefined;
}>, {
    closeable: boolean;
    options: CascaderOption[];
}>;
export default _default;
