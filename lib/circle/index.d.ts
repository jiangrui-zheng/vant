declare const Circle: import("../utils").WithInstall<import("vue").DefineComponent<{
    text: StringConstructor;
    size: (NumberConstructor | StringConstructor)[];
    color: import("vue").PropType<string | Record<string, string>>;
    layerColor: StringConstructor;
    strokeLinecap: import("vue").PropType<CanvasLineCap>;
    currentRate: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fill: {
        type: StringConstructor;
        default: string;
    };
    rate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    clockwise: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:currentRate"[], "update:currentRate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    fill: string;
    strokeWidth: string | number;
    currentRate: number;
    speed: string | number;
    rate: string | number;
    clockwise: boolean;
} & {
    text?: string | undefined;
    color?: string | Record<string, string> | undefined;
    size?: string | number | undefined;
    strokeLinecap?: CanvasLineCap | undefined;
    layerColor?: string | undefined;
}>, {
    fill: string;
    strokeWidth: string | number;
    currentRate: number;
    speed: string | number;
    rate: string | number;
    clockwise: boolean;
}>>;
export default Circle;
export { Circle };
