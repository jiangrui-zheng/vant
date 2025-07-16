declare const _default: import("vue").DefineComponent<{
    millisecond: BooleanConstructor;
    time: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    autoStart: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "finish")[], "change" | "finish", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    time: string | number;
    millisecond: boolean;
    format: string;
    autoStart: boolean;
} & {}>, {
    time: string | number;
    millisecond: boolean;
    format: string;
    autoStart: boolean;
}>;
export default _default;
