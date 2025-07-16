import { PropType } from 'vue';
import { PickerColumn, PickerOption, PickerObjectColumn, PickerObjectOption } from './PickerColumn';
export declare type PickerToolbarPosition = 'top' | 'bottom';
export declare type PickerFieldNames = {
    text?: string;
    values?: string;
    children?: string;
};
export type { PickerColumn, PickerOption, PickerObjectColumn, PickerObjectOption, };
export declare const pickerProps: {
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
};
declare const _default: import("vue").DefineComponent<{
    columnsFieldNames: PropType<PickerFieldNames>;
    columns: {
        type: PropType<PickerOption[] | PickerColumn[]>;
        default: () => never[];
    };
    defaultIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    toolbarPosition: {
        type: PropType<PickerToolbarPosition>;
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
    columns: PickerOption[] | PickerColumn[];
    toolbarPosition: PickerToolbarPosition;
    valueKey: string;
    showToolbar: boolean;
} & {
    title?: string | undefined;
    columnsFieldNames?: PickerFieldNames | undefined;
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
    columns: PickerOption[] | PickerColumn[];
    toolbarPosition: PickerToolbarPosition;
    valueKey: string;
    showToolbar: boolean;
}>;
export default _default;
