import { PropType } from 'vue';
export declare type ShareSheetOption = {
    name: string;
    icon: string;
    className?: string;
    description?: string;
};
export declare type ShareSheetOptions = ShareSheetOption[] | ShareSheetOption[][];
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    cancelText: StringConstructor;
    description: StringConstructor;
    options: {
        type: PropType<ShareSheetOptions>;
        default: () => never[];
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: (NumberConstructor | StringConstructor)[];
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    overlayStyle: PropType<import("vue").CSSProperties>;
    overlayClass: PropType<unknown>;
    transitionAppear: BooleanConstructor;
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cancel" | "update:show")[], "select" | "cancel" | "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    safeAreaInsetBottom: boolean;
    overlay: boolean;
    show: boolean;
    transitionAppear: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    options: ShareSheetOptions;
} & {
    title?: string | undefined;
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    overlayStyle?: import("vue").CSSProperties | undefined;
    overlayClass?: unknown;
    cancelText?: string | undefined;
    description?: string | undefined;
}>, {
    safeAreaInsetBottom: boolean;
    overlay: boolean;
    show: boolean;
    transitionAppear: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    options: ShareSheetOptions;
}>;
export default _default;
