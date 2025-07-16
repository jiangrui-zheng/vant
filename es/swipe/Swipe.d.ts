import { ComputedRef } from 'vue';
export declare const SWIPE_KEY: unique symbol;
export declare type SwipeToOptions = {
    immediate?: boolean;
};
export declare type SwipeProvide = {
    props: {
        loop: boolean;
        vertical?: boolean;
        lazyRender?: boolean;
    };
    size: ComputedRef<number>;
    count: ComputedRef<number>;
    activeIndicator: ComputedRef<number>;
};
declare const _default: import("vue").DefineComponent<{
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    vertical: BooleanConstructor;
    lazyRender: BooleanConstructor;
    indicatorColor: StringConstructor;
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoplay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialSwipe: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showIndicators: {
        type: BooleanConstructor;
        default: boolean;
    };
    stopPropagation: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    vertical: boolean;
    duration: string | number;
    lazyRender: boolean;
    loop: boolean;
    autoplay: string | number;
    touchable: boolean;
    initialSwipe: string | number;
    showIndicators: boolean;
    stopPropagation: boolean;
} & {
    width?: string | number | undefined;
    height?: string | number | undefined;
    indicatorColor?: string | undefined;
}>, {
    vertical: boolean;
    duration: string | number;
    lazyRender: boolean;
    loop: boolean;
    autoplay: string | number;
    touchable: boolean;
    initialSwipe: string | number;
    showIndicators: boolean;
    stopPropagation: boolean;
}>;
export default _default;
