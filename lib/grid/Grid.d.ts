import { PropType } from 'vue';
export declare const GRID_KEY: unique symbol;
export declare type GridDirection = 'horizontal' | 'vertical';
export declare type GridProvide = {
    props: {
        center: boolean;
        border: boolean;
        square?: boolean;
        gutter?: number | string;
        iconSize?: number | string;
        columnNum: number | string;
        direction?: GridDirection;
        clickable?: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    square: BooleanConstructor;
    gutter: (NumberConstructor | StringConstructor)[];
    iconSize: (NumberConstructor | StringConstructor)[];
    direction: PropType<GridDirection>;
    clickable: BooleanConstructor;
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    center: boolean;
    border: boolean;
    square: boolean;
    clickable: boolean;
    columnNum: string | number;
} & {
    iconSize?: string | number | undefined;
    direction?: GridDirection | undefined;
    gutter?: string | number | undefined;
}>, {
    center: boolean;
    border: boolean;
    square: boolean;
    clickable: boolean;
    columnNum: string | number;
}>;
export default _default;
