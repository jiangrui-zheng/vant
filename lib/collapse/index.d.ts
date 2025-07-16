declare const Collapse: import("../utils").WithInstall<import("vue").DefineComponent<{
    accordion: BooleanConstructor;
    modelValue: {
        type: import("vue").PropType<string | number | (string | number)[]>;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    border: boolean;
    modelValue: string | number | (string | number)[];
    accordion: boolean;
} & {}>, {
    border: boolean;
    modelValue: string | number | (string | number)[];
    accordion: boolean;
}>>;
export default Collapse;
export { Collapse };
