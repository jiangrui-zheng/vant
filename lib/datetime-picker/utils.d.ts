import { PropType } from 'vue';
export declare type ColumnType = 'year' | 'month' | 'day' | 'hour' | 'minute';
export declare type DatetimePickerType = 'date' | 'time' | 'datetime' | 'datehour' | 'month-day' | 'year-month';
export declare const sharedProps: {
    filter: PropType<(type: string, values: string[]) => string[]>;
    columnsOrder: PropType<ColumnType[]>;
    formatter: {
        type: PropType<(type: string, value: string) => string>;
        default: (type: string, value: string) => string;
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
};
export declare const pickerKeys: ("title" | "loading" | "readonly" | "allowHtml" | "itemHeight" | "swipeDuration" | "visibleItemCount" | "cancelButtonText" | "confirmButtonText" | "showToolbar")[];
export declare function times<T>(n: number, iteratee: (index: number) => T): T[];
export declare function getTrueValue(value: string | undefined): number;
export declare function getMonthEndDay(year: number, month: number): number;
