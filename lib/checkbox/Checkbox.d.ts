declare const _default: import("vue").DefineComponent<{
    bindGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: import("vue").PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<import("./Checker").CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
    shape: {
        type: import("vue").PropType<import("./Checker").CheckerShape>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
    bindGroup: boolean;
    labelDisabled: boolean;
    shape: import("./Checker").CheckerShape;
} & {
    name?: unknown;
    modelValue?: unknown;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    labelPosition?: import("./Checker").CheckerLabelPosition | undefined;
}>, {
    disabled: boolean;
    bindGroup: boolean;
    labelDisabled: boolean;
    shape: import("./Checker").CheckerShape;
}>;
export default _default;
