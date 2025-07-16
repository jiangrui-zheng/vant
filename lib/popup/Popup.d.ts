import { PropType, CSSProperties } from 'vue';
export declare type PopupPosition = 'top' | 'left' | 'bottom' | 'right' | 'center' | '';
export declare type PopupCloseIconPosition = 'top-left' | 'top-right' | 'botttom-left' | 'bottom-right';
declare const _default: import("vue").DefineComponent<{
    round: BooleanConstructor;
    closeable: BooleanConstructor;
    transition: StringConstructor;
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
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: (NumberConstructor | StringConstructor)[];
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    overlayStyle: PropType<CSSProperties>;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "click" | "close" | "opened" | "closed" | "update:show" | "click-overlay" | "click-close-icon")[], "open" | "click" | "close" | "opened" | "closed" | "update:show" | "click-overlay" | "click-close-icon", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    safeAreaInsetBottom: boolean;
    round: boolean;
    overlay: boolean;
    show: boolean;
    transitionAppear: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeable: boolean;
    closeOnPopstate: boolean;
    position: PopupPosition;
    closeIcon: string;
    closeIconPosition: PopupCloseIconPosition;
} & {
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
    transitionAppear: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeable: boolean;
    closeOnPopstate: boolean;
    position: PopupPosition;
    closeIcon: string;
    closeIconPosition: PopupCloseIconPosition;
}>;
export default _default;
