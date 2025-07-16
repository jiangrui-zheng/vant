import { PropType } from 'vue';
import type { FieldTextAlign, FieldValidateTrigger } from '../field/types';
declare const _default: import("vue").DefineComponent<{
    colon: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    showError: BooleanConstructor;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelAlign: PropType<FieldTextAlign>;
    inputAlign: PropType<FieldTextAlign>;
    scrollToError: BooleanConstructor;
    validateFirst: BooleanConstructor;
    errorMessageAlign: PropType<FieldTextAlign>;
    submitOnEnter: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateTrigger: {
        type: PropType<FieldValidateTrigger>;
        default: string;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "failed")[], "submit" | "failed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    disabled: boolean;
    readonly: boolean;
    colon: boolean;
    showError: boolean;
    scrollToError: boolean;
    validateFirst: boolean;
    submitOnEnter: boolean;
    validateTrigger: FieldValidateTrigger;
    showErrorMessage: boolean;
} & {
    labelWidth?: string | number | undefined;
    labelAlign?: FieldTextAlign | undefined;
    inputAlign?: FieldTextAlign | undefined;
    errorMessageAlign?: FieldTextAlign | undefined;
}>, {
    disabled: boolean;
    readonly: boolean;
    colon: boolean;
    showError: boolean;
    scrollToError: boolean;
    validateFirst: boolean;
    submitOnEnter: boolean;
    validateTrigger: FieldValidateTrigger;
    showErrorMessage: boolean;
}>;
export default _default;
