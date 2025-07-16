declare const Grid: import("../utils").WithInstall<import("vue").DefineComponent<{
    square: BooleanConstructor;
    center: {
        type: BooleanConstructor;
        default: true;
    };
    border: {
        type: BooleanConstructor;
        default: true;
    };
    gutter: (NumberConstructor | StringConstructor)[];
    reverse: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: import("vue").PropType<import("./Grid").GridDirection>;
    clickable: BooleanConstructor;
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    square?: unknown;
    center?: unknown;
    border?: unknown;
    gutter?: unknown;
    reverse?: unknown;
    iconSize?: unknown;
    direction?: unknown;
    clickable?: unknown;
    columnNum?: unknown;
} & {
    center: boolean;
    reverse: boolean;
    border: boolean;
    square: boolean;
    clickable: boolean;
    columnNum: string | number;
} & {
    iconSize?: string | number | undefined;
    direction?: import("./Grid").GridDirection | undefined;
    gutter?: string | number | undefined;
}>, {
    center: boolean;
    reverse: boolean;
    border: boolean;
    square: boolean;
    clickable: boolean;
    columnNum: string | number;
}>>;
export default Grid;
export { Grid };
export type { GridDirection } from './Grid';
