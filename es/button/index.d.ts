declare const Button: import("../utils").WithInstall<import("vue").DefineComponent<{
    text: StringConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    block: BooleanConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    square: BooleanConstructor;
    loading: BooleanConstructor;
    hairline: BooleanConstructor;
    disabled: BooleanConstructor;
    iconPrefix: StringConstructor;
    loadingText: StringConstructor;
    loadingType: import("vue").PropType<import("../loading").LoadingType>;
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("./Button").ButtonType>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./Button").ButtonSize>;
        default: string;
    };
    nativeType: {
        type: import("vue").PropType<"button" | "reset" | "submit" | undefined>;
        default: string;
    };
    loadingSize: {
        type: StringConstructor;
        default: string;
    };
    iconPosition: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    replace: boolean;
    tag: keyof HTMLElementTagNameMap;
    round: boolean;
    size: import("./Button").ButtonSize;
    loading: boolean;
    type: import("./Button").ButtonType;
    block: boolean;
    disabled: boolean;
    square: boolean;
    plain: boolean;
    hairline: boolean;
    nativeType: "button" | "reset" | "submit" | undefined;
    loadingSize: string;
    iconPosition: "left" | "right";
} & {
    text?: string | undefined;
    to?: import("vue-router").RouteLocationRaw | (import("vue-router").RouteLocationRaw & object) | undefined;
    url?: string | undefined;
    color?: string | undefined;
    icon?: string | undefined;
    iconPrefix?: string | undefined;
    loadingText?: string | undefined;
    loadingType?: import("../loading").LoadingType | undefined;
}>, {
    replace: boolean;
    tag: keyof HTMLElementTagNameMap;
    round: boolean;
    size: import("./Button").ButtonSize;
    loading: boolean;
    type: import("./Button").ButtonType;
    block: boolean;
    disabled: boolean;
    square: boolean;
    plain: boolean;
    hairline: boolean;
    nativeType: "button" | "reset" | "submit" | undefined;
    loadingSize: string;
    iconPosition: "left" | "right";
}>>;
export default Button;
export { Button };
export type { ButtonType, ButtonSize } from './Button';
