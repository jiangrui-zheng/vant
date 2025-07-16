declare const _default: import("vue").DefineComponent<{
    name: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    isLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: StringConstructor;
    size: import("vue").PropType<"large">;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    required: BooleanConstructor;
    iconPrefix: StringConstructor;
    valueClass: import("vue").PropType<unknown>;
    labelClass: import("vue").PropType<unknown>;
    titleClass: import("vue").PropType<unknown>;
    titleStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    arrowDirection: import("vue").PropType<import("../cell").CellArrowDirection>;
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    clickable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
}, (() => JSX.Element) | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    center: boolean;
    border: boolean;
    disabled: boolean;
    isLink: boolean;
    required: boolean;
    clickable: boolean | null;
} & {
    name?: string | number | undefined;
    label?: string | number | undefined;
    title?: string | number | undefined;
    icon?: string | undefined;
    size?: "large" | undefined;
    iconPrefix?: string | undefined;
    value?: string | number | undefined;
    valueClass?: unknown;
    labelClass?: unknown;
    titleClass?: unknown;
    titleStyle?: string | import("vue").CSSProperties | undefined;
    arrowDirection?: import("../cell").CellArrowDirection | undefined;
}>, {
    center: boolean;
    border: boolean;
    disabled: boolean;
    isLink: boolean;
    required: boolean;
    clickable: boolean | null;
}>;
export default _default;
