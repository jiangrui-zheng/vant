import { PropType } from 'vue';
export declare type IndexBarProvide = {
    props: {
        sticky: boolean;
        zIndex?: number | string;
        highlightColor?: string;
    };
};
declare function genAlphabet(): string[];
export declare const INDEX_BAR_KEY: unique symbol;
declare const _default: import("vue").DefineComponent<{
    zIndex: (NumberConstructor | StringConstructor)[];
    highlightColor: StringConstructor;
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    indexList: {
        type: PropType<string[]>;
        default: typeof genAlphabet;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "change")[], "select" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    sticky: boolean;
    stickyOffsetTop: number;
    indexList: string[];
} & {
    zIndex?: string | number | undefined;
    highlightColor?: string | undefined;
}>, {
    sticky: boolean;
    stickyOffsetTop: number;
    indexList: string[];
}>;
export default _default;
