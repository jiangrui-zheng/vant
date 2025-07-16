declare const Search: import("../utils").WithInstall<import("vue").DefineComponent<{
    label: StringConstructor;
    rightIcon: StringConstructor;
    modelValue: StringConstructor;
    actionText: StringConstructor;
    background: StringConstructor;
    showAction: BooleanConstructor;
    clearTrigger: import("vue").PropType<import("../field").FieldClearTrigger>;
    shape: {
        type: import("vue").PropType<import("./Search").SearchShape>;
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
    shape: import("./Search").SearchShape;
    showAction: boolean;
} & {
    label?: string | undefined;
    rightIcon?: string | undefined;
    modelValue?: string | undefined;
    clearTrigger?: import("../field").FieldClearTrigger | undefined;
    background?: string | undefined;
    actionText?: string | undefined;
}>, {
    leftIcon: string;
    clearable: boolean;
    shape: import("./Search").SearchShape;
    showAction: boolean;
}>>;
export default Search;
export { Search };
export type { SearchShape } from './Search';
