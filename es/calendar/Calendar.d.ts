import { PropType } from 'vue';
import { isDate } from '../utils/validate/date';
import { PopupPosition } from '../popup';
import { CalendarType } from './CalendarMonth';
import type { CalendarDayItem } from './CalendarDay';
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    title: StringConstructor;
    color: StringConstructor;
    readonly: BooleanConstructor;
    teleport: PropType<string | import("vue").RendererElement | null | undefined>;
    formatter: PropType<(item: CalendarDayItem) => CalendarDayItem>;
    rowHeight: (NumberConstructor | StringConstructor)[];
    confirmText: StringConstructor;
    rangePrompt: StringConstructor;
    defaultDate: any;
    allowSameDay: BooleanConstructor;
    confirmDisabledText: StringConstructor;
    type: {
        type: PropType<CalendarType>;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<PopupPosition>;
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
        validator: typeof isDate;
        default: () => Date;
    };
    maxDate: {
        type: DateConstructor;
        validator: typeof isDate;
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
    type: CalendarType;
    show: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    position: PopupPosition;
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
    formatter?: ((item: CalendarDayItem) => CalendarDayItem) | undefined;
    rowHeight?: string | number | undefined;
    confirmText?: string | undefined;
    rangePrompt?: string | undefined;
    confirmDisabledText?: string | undefined;
}>, {
    safeAreaInsetBottom: boolean;
    round: boolean;
    type: CalendarType;
    show: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    position: PopupPosition;
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
}>;
export default _default;
