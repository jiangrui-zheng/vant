declare const Popup: import("../utils").WithInstall<import("vue").DefineComponent<{
    round: BooleanConstructor;
    closeable: BooleanConstructor;
    transition: StringConstructor;
    closeOnPopstate: BooleanConstructor;
    safeAreaInsetBottom: BooleanConstructor;
    position: {
        type: import("vue").PropType<import("./Popup").PopupPosition>;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    closeIconPosition: {
        type: import("vue").PropType<import("./Popup").PopupCloseIconPosition>;
        default: string;
    };
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    overlayClass: import("vue").PropType<unknown>;
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
    position: import("./Popup").PopupPosition;
    closeIcon: string;
    closeIconPosition: import("./Popup").PopupCloseIconPosition;
} & {
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    overlayStyle?: import("vue").CSSProperties | undefined;
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
    position: import("./Popup").PopupPosition;
    closeIcon: string;
    closeIconPosition: import("./Popup").PopupCloseIconPosition;
}>>;
export default Popup;
export { Popup };
export type { PopupPosition, PopupCloseIconPosition } from './Popup';
