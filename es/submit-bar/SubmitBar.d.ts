import { PropType } from 'vue';
import { ButtonType } from '../button';
declare const _default: import("vue").DefineComponent<{
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    textAlign: PropType<import("csstype").TextAlignProperty | undefined>;
    buttonText: StringConstructor;
    buttonColor: StringConstructor;
    suffixLabel: StringConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    decimalLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    currency: {
        type: StringConstructor;
        default: string;
    };
    buttonType: {
        type: PropType<ButtonType>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    tip?: unknown;
    label?: unknown;
    price?: unknown;
    tipIcon?: unknown;
    loading?: unknown;
    disabled?: unknown;
    textAlign?: unknown;
    buttonText?: unknown;
    buttonColor?: unknown;
    suffixLabel?: unknown;
    safeAreaInsetBottom?: unknown;
    decimalLength?: unknown;
    currency?: unknown;
    buttonType?: unknown;
} & {
    safeAreaInsetBottom: boolean;
    loading: boolean;
    disabled: boolean;
    currency: string;
    decimalLength: string | number;
    buttonType: ButtonType;
} & {
    label?: string | undefined;
    price?: number | undefined;
    textAlign?: import("csstype").TextAlignProperty | undefined;
    tip?: string | undefined;
    tipIcon?: string | undefined;
    buttonText?: string | undefined;
    buttonColor?: string | undefined;
    suffixLabel?: string | undefined;
}>, {
    safeAreaInsetBottom: boolean;
    loading: boolean;
    disabled: boolean;
    currency: string;
    decimalLength: string | number;
    buttonType: ButtonType;
}>;
export default _default;
