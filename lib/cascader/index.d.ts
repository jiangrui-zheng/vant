declare const Cascader: import("../utils").WithInstall<import("vue").DefineComponent<{
    title: StringConstructor;
    modelValue: (NumberConstructor | StringConstructor)[];
    fieldNames: import("vue").PropType<{
        text?: string | undefined;
        value?: string | undefined;
        children?: string | undefined;
    }>;
    placeholder: StringConstructor;
    activeColor: StringConstructor;
    options: {
        type: import("vue").PropType<import("./Cascader").CascaderOption[]>;
        default: () => never[];
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "update:modelValue" | "finish")[], "change" | "close" | "update:modelValue" | "finish", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    closeable: boolean;
    options: import("./Cascader").CascaderOption[];
} & {
    title?: string | undefined;
    placeholder?: string | undefined;
    modelValue?: string | number | undefined;
    activeColor?: string | undefined;
    fieldNames?: {
        text?: string | undefined;
        value?: string | undefined;
        children?: string | undefined;
    } | undefined;
}>, {
    closeable: boolean;
    options: import("./Cascader").CascaderOption[];
}>>;
export default Cascader;
export { Cascader };
export type { CascaderOption } from './Cascader';
