declare const NumberKeyboard: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    title: StringConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    randomKeyOrder: BooleanConstructor;
    closeButtonText: StringConstructor;
    deleteButtonText: StringConstructor;
    closeButtonLoading: BooleanConstructor;
    theme: {
        type: import("vue").PropType<import("./NumberKeyboard").NumberKeyboardTheme>;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    extraKey: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    transition: {
        type: BooleanConstructor;
        default: boolean;
    };
    blurOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    showDeleteKey: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideOnClickOutside: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "hide" | "show" | "blur" | "close" | "update:modelValue" | "delete")[], "input" | "hide" | "show" | "blur" | "close" | "update:modelValue" | "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    safeAreaInsetBottom: boolean;
    show: boolean;
    transition: boolean;
    maxlength: string | number;
    modelValue: string;
    theme: import("./NumberKeyboard").NumberKeyboardTheme;
    randomKeyOrder: boolean;
    closeButtonLoading: boolean;
    extraKey: string | string[];
    blurOnClose: boolean;
    showDeleteKey: boolean;
    hideOnClickOutside: boolean;
} & {
    title?: string | undefined;
    zIndex?: string | number | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    deleteButtonText?: string | undefined;
    closeButtonText?: string | undefined;
}>, {
    safeAreaInsetBottom: boolean;
    show: boolean;
    transition: boolean;
    maxlength: string | number;
    modelValue: string;
    theme: import("./NumberKeyboard").NumberKeyboardTheme;
    randomKeyOrder: boolean;
    closeButtonLoading: boolean;
    extraKey: string | string[];
    blurOnClose: boolean;
    showDeleteKey: boolean;
    hideOnClickOutside: boolean;
}>>;
export default NumberKeyboard;
export { NumberKeyboard };
