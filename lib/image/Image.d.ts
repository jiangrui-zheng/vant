import { PropType } from 'vue';
export declare type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
declare const _default: import("vue").DefineComponent<{
    src: StringConstructor;
    alt: StringConstructor;
    fit: PropType<ImageFit>;
    round: BooleanConstructor;
    width: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    radius: (NumberConstructor | StringConstructor)[];
    lazyLoad: BooleanConstructor;
    iconPrefix: StringConstructor;
    showError: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    errorIcon: {
        type: StringConstructor;
        default: string;
    };
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "load")[], "error" | "load", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    round: boolean;
    lazyLoad: boolean;
    showError: boolean;
    showLoading: boolean;
    errorIcon: string;
    loadingIcon: string;
} & {
    iconPrefix?: string | undefined;
    width?: string | number | undefined;
    src?: string | undefined;
    alt?: string | undefined;
    fit?: ImageFit | undefined;
    height?: string | number | undefined;
    radius?: string | number | undefined;
}>, {
    round: boolean;
    lazyLoad: boolean;
    showError: boolean;
    showLoading: boolean;
    errorIcon: string;
    loadingIcon: string;
}>;
export default _default;
