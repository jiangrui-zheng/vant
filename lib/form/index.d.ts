declare const Form: import("../utils").WithInstall<import("vue").DefineComponent<{
    colon: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    showError: BooleanConstructor;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelAlign: import("vue").PropType<import("../field").FieldTextAlign>;
    inputAlign: import("vue").PropType<import("../field").FieldTextAlign>;
    scrollToError: BooleanConstructor;
    validateFirst: BooleanConstructor;
    errorMessageAlign: import("vue").PropType<import("../field").FieldTextAlign>;
    submitOnEnter: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateTrigger: {
        type: import("vue").PropType<import("../field").FieldValidateTrigger>;
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
    validateTrigger: import("../field").FieldValidateTrigger;
    showErrorMessage: boolean;
} & {
    labelWidth?: string | number | undefined;
    labelAlign?: import("../field").FieldTextAlign | undefined;
    inputAlign?: import("../field").FieldTextAlign | undefined;
    errorMessageAlign?: import("../field").FieldTextAlign | undefined;
}>, {
    disabled: boolean;
    readonly: boolean;
    colon: boolean;
    showError: boolean;
    scrollToError: boolean;
    validateFirst: boolean;
    submitOnEnter: boolean;
    validateTrigger: import("../field").FieldValidateTrigger;
    showErrorMessage: boolean;
}>>;
export default Form;
export { Form };
