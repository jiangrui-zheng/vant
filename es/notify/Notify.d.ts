import { PropType } from 'vue';
export declare type NotifyType = 'primary' | 'success' | 'danger' | 'warning';
declare const _default: import("vue").DefineComponent<{
    color: StringConstructor;
    message: (NumberConstructor | StringConstructor)[];
    className: PropType<unknown>;
    background: StringConstructor;
    lockScroll: BooleanConstructor;
    type: {
        type: PropType<NotifyType>;
        default: string;
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
    lazyRender: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    type: NotifyType;
    overlay: boolean;
    show: boolean;
    transitionAppear: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
} & {
    color?: string | undefined;
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    overlayStyle?: import("vue").CSSProperties | undefined;
    overlayClass?: unknown;
    className?: unknown;
    message?: string | number | undefined;
    background?: string | undefined;
}>, {
    type: NotifyType;
    overlay: boolean;
    show: boolean;
    transitionAppear: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
}>;
export default _default;
