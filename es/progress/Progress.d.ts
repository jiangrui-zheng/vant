declare const _default: import("vue").DefineComponent<{
    color: StringConstructor;
    inactive: BooleanConstructor;
    pivotText: StringConstructor;
    textColor: StringConstructor;
    pivotColor: StringConstructor;
    trackColor: StringConstructor;
    strokeWidth: (NumberConstructor | StringConstructor)[];
    percentage: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
        validator: (value: number | string) => boolean;
    };
    showPivot: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    inactive: boolean;
    percentage: string | number;
    showPivot: boolean;
} & {
    color?: string | undefined;
    textColor?: string | undefined;
    strokeWidth?: string | number | undefined;
    pivotText?: string | undefined;
    pivotColor?: string | undefined;
    trackColor?: string | undefined;
}>, {
    inactive: boolean;
    showPivot: boolean;
}>;
export default _default;
