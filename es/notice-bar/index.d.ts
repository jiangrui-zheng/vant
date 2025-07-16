declare const NoticeBar: import("../utils").WithInstall<import("vue").DefineComponent<{
    text: StringConstructor;
    mode: import("vue").PropType<import("./NoticeBar").NoticeBarMode>;
    color: StringConstructor;
    leftIcon: StringConstructor;
    wrapable: BooleanConstructor;
    background: StringConstructor;
    scrollable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    delay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    speed: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "replay")[], "close" | "replay", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    text?: unknown;
    mode?: unknown;
    color?: unknown;
    leftIcon?: unknown;
    wrapable?: unknown;
    background?: unknown;
    scrollable?: unknown;
    delay?: unknown;
    speed?: unknown;
} & {
    scrollable: boolean | null;
    speed: string | number;
    wrapable: boolean;
    delay: string | number;
} & {
    text?: string | undefined;
    color?: string | undefined;
    leftIcon?: string | undefined;
    mode?: import("./NoticeBar").NoticeBarMode | undefined;
    background?: string | undefined;
}>, {
    scrollable: boolean | null;
    speed: string | number;
    wrapable: boolean;
    delay: string | number;
}>>;
export default NoticeBar;
export { NoticeBar };
export type { NoticeBarMode } from './NoticeBar';
