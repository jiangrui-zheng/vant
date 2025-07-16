import { PropType } from 'vue';
import { Interceptor } from '../utils/interceptor';
export declare const TABBAR_KEY: unique symbol;
export declare type TabbarProvide = {
    props: {
        route?: boolean;
        modelValue: number | string;
        activeColor?: string;
        inactiveColor?: string;
    };
    setActive: (active: number | string) => void;
};
declare const _default: import("vue").DefineComponent<{
    route: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    placeholder: BooleanConstructor;
    activeColor: StringConstructor;
    beforeChange: PropType<Interceptor>;
    inactiveColor: StringConstructor;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: PropType<boolean | null>;
        default: null;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    fixed: boolean;
    safeAreaInsetBottom: boolean | null;
    border: boolean;
    placeholder: boolean;
    modelValue: string | number;
    route: boolean;
} & {
    zIndex?: string | number | undefined;
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    beforeChange?: Interceptor | undefined;
}>, {
    fixed: boolean;
    safeAreaInsetBottom: boolean | null;
    border: boolean;
    placeholder: boolean;
    modelValue: string | number;
    route: boolean;
}>;
export default _default;
