import { App } from 'vue';
import { ComponentInstance } from '../utils';
import { NotifyType } from './Notify';
export declare type NotifyMessage = string | number;
export declare type NotifyOptions = {
    type?: NotifyType;
    color?: string;
    message?: NotifyMessage;
    duration?: number;
    className?: unknown;
    background?: string;
    lockScroll?: boolean;
    onClick?: (event: MouseEvent) => void;
    onClose?: () => void;
    onOpened?: () => void;
};
declare function Notify(options: NotifyMessage | NotifyOptions): ComponentInstance | undefined;
declare namespace Notify {
    var clear: () => void;
    var currentOptions: NotifyOptions;
    var setDefaultOptions: (options: NotifyOptions) => void;
    var resetDefaultOptions: () => void;
    var install: (app: App<any>) => void;
    var Component: import("../utils").WithInstall<import("vue").DefineComponent<{
        show: BooleanConstructor;
        zIndex: (NumberConstructor | StringConstructor)[];
        overlay: {
            type: BooleanConstructor;
            default: true;
        };
        duration: (NumberConstructor | StringConstructor)[];
        teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
        lockScroll: {
            type: BooleanConstructor;
            default: true;
        };
        lazyRender: {
            type: BooleanConstructor;
            default: true;
        };
        overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
        overlayClass: import("vue").PropType<unknown>;
        transitionAppear: BooleanConstructor;
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: true;
        };
    } & {
        color: StringConstructor;
        message: (NumberConstructor | StringConstructor)[];
        className: import("vue").PropType<unknown>;
        background: StringConstructor;
        lockScroll: BooleanConstructor;
        type: {
            type: import("vue").PropType<NotifyType>;
            default: string;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
        show?: unknown;
        zIndex?: unknown;
        overlay?: unknown;
        duration?: unknown;
        teleport?: unknown;
        lockScroll?: unknown;
        lazyRender?: unknown;
        overlayStyle?: unknown;
        overlayClass?: unknown;
        transitionAppear?: unknown;
        closeOnClickOverlay?: unknown;
        color?: unknown;
        message?: unknown;
        className?: unknown;
        background?: unknown;
        type?: unknown;
    } & {
        type: NotifyType;
        overlay: boolean;
        show: boolean;
        lockScroll: boolean;
        lazyRender: boolean;
        transitionAppear: boolean;
        closeOnClickOverlay: boolean;
    } & {
        color?: string | undefined;
        zIndex?: string | number | undefined;
        duration?: string | number | undefined;
        teleport?: string | import("vue").RendererElement | null | undefined;
        overlayStyle?: import("vue").CSSProperties | undefined;
        overlayClass?: unknown;
        className?: unknown;
        message?: string | number | undefined;
        background?: string | undefined;
    }>, {
        type: NotifyType;
        overlay: boolean;
        show: boolean;
        lockScroll: boolean;
        lazyRender: boolean;
        transitionAppear: boolean;
        closeOnClickOverlay: boolean;
    }>>;
}
export { Notify };
