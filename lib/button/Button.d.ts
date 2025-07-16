import { PropType } from 'vue';
import { LoadingType } from '../loading';
export declare type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export declare type ButtonSize = 'large' | 'normal' | 'small' | 'mini';
declare const _default: import("vue").DefineComponent<{
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
    loadingType: PropType<LoadingType>;
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    nativeType: {
        type: PropType<"button" | "reset" | "submit" | undefined>;
        default: string;
    };
    loadingSize: {
        type: StringConstructor;
        default: string;
    };
    iconPosition: {
        type: PropType<"left" | "right">;
        default: string;
    };
    to: PropType<import("vue-router").RouteLocationRaw>;
    url: StringConstructor;
    replace: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    replace: boolean;
    tag: keyof HTMLElementTagNameMap;
    round: boolean;
    size: ButtonSize;
    loading: boolean;
    type: ButtonType;
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
    loadingType?: LoadingType | undefined;
}>, {
    replace: boolean;
    tag: keyof HTMLElementTagNameMap;
    round: boolean;
    size: ButtonSize;
    loading: boolean;
    type: ButtonType;
    block: boolean;
    disabled: boolean;
    square: boolean;
    plain: boolean;
    hairline: boolean;
    nativeType: "button" | "reset" | "submit" | undefined;
    loadingSize: string;
    iconPosition: "left" | "right";
}>;
export default _default;
