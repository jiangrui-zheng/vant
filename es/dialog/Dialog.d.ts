import { PropType } from 'vue';
import { Interceptor } from '../utils/interceptor';
export declare type DialogTheme = 'default' | 'round-button';
export declare type DialogAction = 'confirm' | 'cancel';
export declare type DialogMessageAlign = 'left' | 'center' | 'right';
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    theme: PropType<DialogTheme>;
    width: (NumberConstructor | StringConstructor)[];
    message: StringConstructor;
    callback: PropType<(action?: DialogAction | undefined) => void>;
    allowHtml: BooleanConstructor;
    className: PropType<unknown>;
    beforeClose: PropType<Interceptor>;
    messageAlign: PropType<DialogMessageAlign>;
    showCancelButton: BooleanConstructor;
    cancelButtonText: StringConstructor;
    cancelButtonColor: StringConstructor;
    confirmButtonText: StringConstructor;
    confirmButtonColor: StringConstructor;
    closeOnClickOverlay: BooleanConstructor;
    transition: {
        type: StringConstructor;
        default: string;
    };
    showConfirmButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnPopstate: {
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "update:show" | "confirm")[], "cancel" | "update:show" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    overlay: boolean;
    show: boolean;
    transitionAppear: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    transition: string;
    closeOnPopstate: boolean;
    allowHtml: boolean;
    showCancelButton: boolean;
    showConfirmButton: boolean;
} & {
    title?: string | undefined;
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    overlayStyle?: import("vue").CSSProperties | undefined;
    overlayClass?: unknown;
    className?: unknown;
    callback?: ((action?: DialogAction | undefined) => void) | undefined;
    cancelButtonText?: string | undefined;
    confirmButtonText?: string | undefined;
    message?: string | undefined;
    theme?: DialogTheme | undefined;
    width?: string | number | undefined;
    beforeClose?: Interceptor | undefined;
    messageAlign?: DialogMessageAlign | undefined;
    cancelButtonColor?: string | undefined;
    confirmButtonColor?: string | undefined;
}>, {
    overlay: boolean;
    show: boolean;
    transitionAppear: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    transition: string;
    closeOnPopstate: boolean;
    allowHtml: boolean;
    showCancelButton: boolean;
    showConfirmButton: boolean;
}>;
export default _default;
