declare const Calendar: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    title: StringConstructor;
    color: StringConstructor;
    readonly: BooleanConstructor;
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    formatter: import("vue").PropType<(item: import("./CalendarDay").CalendarDayItem) => import("./CalendarDay").CalendarDayItem>;
    rowHeight: (NumberConstructor | StringConstructor)[];
    confirmText: StringConstructor;
    rangePrompt: StringConstructor;
    defaultDate: any;
    allowSameDay: BooleanConstructor;
    confirmDisabledText: StringConstructor;
    type: {
        type: import("vue").PropType<import("./CalendarMonth").CalendarType>;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: import("vue").PropType<import("../popup").PopupPosition>;
        default: string;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxRange: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMark: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showConfirm: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSubtitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    minDate: {
        type: DateConstructor;
        validator: typeof import("../utils/validate/date").isDate;
        default: () => Date;
    };
    maxDate: {
        type: DateConstructor;
        validator: typeof import("../utils/validate/date").isDate;
        default: () => Date;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:show" | "confirm" | "unselect" | "month-show")[], "select" | "update:show" | "confirm" | "unselect" | "month-show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    safeAreaInsetBottom: boolean;
    round: boolean;
    type: import("./CalendarMonth").CalendarType;
    show: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    position: import("../popup").PopupPosition;
    readonly: boolean;
    showMark: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    firstDayOfWeek: string | number;
    minDate: Date;
    maxDate: Date;
    showTitle: boolean;
    defaultDate: any;
    poppable: boolean;
    maxRange: string | number;
    showConfirm: boolean;
} & {
    title?: string | undefined;
    color?: string | undefined;
    teleport?: string | import("vue").RendererElement | null | undefined;
    formatter?: ((item: import("./CalendarDay").CalendarDayItem) => import("./CalendarDay").CalendarDayItem) | undefined;
    rowHeight?: string | number | undefined;
    confirmText?: string | undefined;
    rangePrompt?: string | undefined;
    confirmDisabledText?: string | undefined;
}>, {
    safeAreaInsetBottom: boolean;
    round: boolean;
    type: import("./CalendarMonth").CalendarType;
    show: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    position: import("../popup").PopupPosition;
    readonly: boolean;
    showMark: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    firstDayOfWeek: string | number;
    minDate: Date;
    maxDate: Date;
    showTitle: boolean;
    defaultDate: any;
    poppable: boolean;
    maxRange: string | number;
    showConfirm: boolean;
}>>;
export default Calendar;
export { Calendar };
export type { CalendarType } from './CalendarMonth';
export type { CalendarDayItem, CalendarDayType } from './CalendarDay';
