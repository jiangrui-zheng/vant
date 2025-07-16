import { PropType, CSSProperties } from 'vue';
export declare type PopupPosition = 'top' | 'left' | 'bottom' | 'right' | 'center' | '';
export declare type PopupCloseIconPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
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
    overlayStyle: PropType<CSSProperties>;
    overlayClass: PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    round: BooleanConstructor;
    closeable: BooleanConstructor;
    transition: StringConstructor;
    iconPrefix: StringConstructor;
    closeOnPopstate: BooleanConstructor;
    safeAreaInsetBottom: BooleanConstructor;
    position: {
        type: PropType<PopupPosition>;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    closeIconPosition: {
        type: PropType<PopupCloseIconPosition>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "click" | "close" | "opened" | "closed" | "update:show" | "click-overlay" | "click-close-icon")[], "open" | "click" | "close" | "opened" | "closed" | "update:show" | "click-overlay" | "click-close-icon", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
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
    round?: unknown;
    closeable?: unknown;
    transition?: unknown;
    iconPrefix?: unknown;
    closeOnPopstate?: unknown;
    safeAreaInsetBottom?: unknown;
    position?: unknown;
    closeIcon?: unknown;
    closeIconPosition?: unknown;
} & {
    safeAreaInsetBottom: boolean;
    round: boolean;
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    closeable: boolean;
    closeOnPopstate: boolean;
    position: PopupPosition;
    closeIcon: string;
    closeIconPosition: PopupCloseIconPosition;
} & {
    iconPrefix?: string | undefined;
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    overlayStyle?: CSSProperties | undefined;
    overlayClass?: unknown;
    transition?: string | undefined;
}>, {
    safeAreaInsetBottom: boolean;
    round: boolean;
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    closeable: boolean;
    closeOnPopstate: boolean;
    position: PopupPosition;
    closeIcon: string;
    closeIconPosition: PopupCloseIconPosition;
}>;
export default _default;
