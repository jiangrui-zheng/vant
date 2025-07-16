declare const AddressList: import("../utils").WithInstall<import("vue").DefineComponent<{
    modelValue: (NumberConstructor | StringConstructor)[];
    disabledText: StringConstructor;
    addButtonText: StringConstructor;
    defaultTagText: StringConstructor;
    list: {
        type: import("vue").PropType<import("./AddressListItem").AddressListAddress[]>;
        default: () => never[];
    };
    disabledList: {
        type: import("vue").PropType<import("./AddressListItem").AddressListAddress[]>;
        default: () => never[];
    };
    switchable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "add" | "update:modelValue" | "edit" | "click-item" | "edit-disabled" | "select-disabled")[], "select" | "add" | "update:modelValue" | "edit" | "click-item" | "edit-disabled" | "select-disabled", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    switchable: boolean;
    list: import("./AddressListItem").AddressListAddress[];
    disabledList: import("./AddressListItem").AddressListAddress[];
} & {
    modelValue?: string | number | undefined;
    defaultTagText?: string | undefined;
    disabledText?: string | undefined;
    addButtonText?: string | undefined;
}>, {
    switchable: boolean;
    list: import("./AddressListItem").AddressListAddress[];
    disabledList: import("./AddressListItem").AddressListAddress[];
}>>;
export default AddressList;
export { AddressList };
