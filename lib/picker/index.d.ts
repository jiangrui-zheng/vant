declare const Picker: import("../utils").WithInstall<import("vue").DefineComponent<{
    columnsFieldNames: import("vue").PropType<import("./Picker").PickerFieldNames>;
    columns: {
        type: import("vue").PropType<import("./PickerColumn").PickerOption[] | import("./PickerColumn").PickerColumn[]>;
        default: () => never[];
    };
    defaultIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    toolbarPosition: {
        type: import("vue").PropType<import("./Picker").PickerToolbarPosition>;
        default: string;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
    itemHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibleItemCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "change" | "confirm")[], "cancel" | "change" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    loading: boolean;
    readonly: boolean;
    allowHtml: boolean;
    itemHeight: string | number;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    defaultIndex: string | number;
    columns: import("./PickerColumn").PickerOption[] | import("./PickerColumn").PickerColumn[];
    toolbarPosition: import("./Picker").PickerToolbarPosition;
    valueKey: string;
    showToolbar: boolean;
} & {
    title?: string | undefined;
    columnsFieldNames?: import("./Picker").PickerFieldNames | undefined;
    cancelButtonText?: string | undefined;
    confirmButtonText?: string | undefined;
}>, {
    loading: boolean;
    readonly: boolean;
    allowHtml: boolean;
    itemHeight: string | number;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    defaultIndex: string | number;
    columns: import("./PickerColumn").PickerOption[] | import("./PickerColumn").PickerColumn[];
    toolbarPosition: import("./Picker").PickerToolbarPosition;
    valueKey: string;
    showToolbar: boolean;
}>>;
export default Picker;
export { Picker };
export type { PickerColumn, PickerOption, PickerObjectColumn, PickerObjectOption, PickerToolbarPosition, } from './Picker';
