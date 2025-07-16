import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    title: BooleanConstructor;
    round: BooleanConstructor;
    avatar: BooleanConstructor;
    avatarSize: (NumberConstructor | StringConstructor)[];
    titleWidth: (NumberConstructor | StringConstructor)[];
    row: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    animate: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatarShape: {
        type: PropType<"round" | "square">;
        default: string;
    };
    rowWidth: {
        type: PropType<string | number | (string | number)[]>;
        default: string;
    };
}, () => JSX.Element | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    title: boolean;
    animate: boolean;
    round: boolean;
    loading: boolean;
    row: string | number;
    avatar: boolean;
    avatarShape: "round" | "square";
    rowWidth: string | number | (string | number)[];
} & {
    avatarSize?: string | number | undefined;
    titleWidth?: string | number | undefined;
}>, {
    title: boolean;
    animate: boolean;
    round: boolean;
    loading: boolean;
    row: string | number;
    avatar: boolean;
    avatarShape: "round" | "square";
    rowWidth: string | number | (string | number)[];
}>;
export default _default;
