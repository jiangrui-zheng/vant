import { PropType, CSSProperties } from 'vue';
import { Interceptor } from '../utils/interceptor';
import { PopupCloseIconPosition } from '../popup';
export declare type ScaleEventParams = {
    scale: number;
    index: number;
};
declare const _default: import("vue").DefineComponent<{
    show: BooleanConstructor;
    closeable: BooleanConstructor;
    transition: StringConstructor;
    className: PropType<unknown>;
    beforeClose: PropType<Interceptor>;
    overlayStyle: PropType<CSSProperties>;
    showIndicators: BooleanConstructor;
    images: {
        type: PropType<string[]>;
        default: () => never[];
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    minZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    startPosition: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: PropType<PopupCloseIconPosition>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "closed" | "update:show" | "scale")[], "change" | "close" | "closed" | "update:show" | "scale", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    overlay: boolean;
    show: boolean;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIcon: string;
    closeIconPosition: PopupCloseIconPosition;
    swipeDuration: string | number;
    loop: boolean;
    showIndicators: boolean;
    minZoom: string | number;
    maxZoom: string | number;
    images: string[];
    showIndex: boolean;
    startPosition: string | number;
} & {
    overlayStyle?: CSSProperties | undefined;
    className?: unknown;
    transition?: string | undefined;
    beforeClose?: Interceptor | undefined;
}>, {
    overlay: boolean;
    show: boolean;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIcon: string;
    closeIconPosition: PopupCloseIconPosition;
    swipeDuration: string | number;
    loop: boolean;
    showIndicators: boolean;
    minZoom: string | number;
    maxZoom: string | number;
    images: string[];
    showIndex: boolean;
    startPosition: string | number;
}>;
export default _default;
