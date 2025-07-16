import { PropType } from 'vue';
export declare type ShareSheetOption = {
    name: string;
    icon: string;
    className?: string;
    description?: string;
};
export declare type ShareSheetOptions = ShareSheetOption[] | ShareSheetOption[][];
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    overlayStyle: PropType<import("vue").CSSProperties>;
    overlayClass: PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    title: StringConstructor;
    cancelText: StringConstructor;
    description: StringConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    options: {
        type: PropType<ShareSheetOptions>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "cancel" | "update:show")[], "select" | "cancel" | "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    show?: unknown;
    zIndex?: unknown;
    overlay?: unknown;
    duration?: unknown;
    teleport?: unknown;
    lockScroll?: unknown;
    lazyRender?: unknown;
    overlayStyle?: unknown;
    overlayClass?: unknown;
    transitionAppear?: unknown;
    closeOnClickOverlay?: unknown;
    title?: unknown;
    cancelText?: unknown;
    description?: unknown;
    closeOnPopstate?: unknown;
    safeAreaInsetBottom?: unknown;
    options?: unknown;
} & {
    safeAreaInsetBottom: boolean;
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    options: ShareSheetOptions;
} & {
    description?: string | undefined;
    title?: string | undefined;
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    overlayStyle?: import("vue").CSSProperties | undefined;
    overlayClass?: unknown;
    cancelText?: string | undefined;
}>, {
    safeAreaInsetBottom: boolean;
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    options: ShareSheetOptions;
}>;
export default _default;
