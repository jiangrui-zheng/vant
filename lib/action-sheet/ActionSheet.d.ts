import { PropType } from 'vue';
export declare type ActionSheetAction = {
    name?: string;
    color?: string;
    subname?: string;
    loading?: boolean;
    disabled?: boolean;
    callback?: (action: ActionSheetAction) => void;
    className?: unknown;
};
declare const _default: import("vue").DefineComponent<{
    title: StringConstructor;
    actions: PropType<ActionSheetAction[]>;
    cancelText: StringConstructor;
    description: StringConstructor;
    closeOnPopstate: BooleanConstructor;
    closeOnClickAction: BooleanConstructor;
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
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
    round: boolean;
    overlay: boolean;
    show: boolean;
    transitionAppear: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIcon: string;
    closeOnClickAction: boolean;
} & {
    title?: string | undefined;
    zIndex?: string | number | undefined;
    duration?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    overlayStyle?: import("vue").CSSProperties | undefined;
    overlayClass?: unknown;
    actions?: ActionSheetAction[] | undefined;
    cancelText?: string | undefined;
    description?: string | undefined;
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
    closeIcon: string;
    closeOnClickAction: boolean;
}>;
export default _default;
