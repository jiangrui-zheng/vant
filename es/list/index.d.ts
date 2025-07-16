declare const List: import("../utils").WithInstall<import("vue").DefineComponent<{
    error: BooleanConstructor;
    loading: BooleanConstructor;
    finished: BooleanConstructor;
    errorText: StringConstructor;
    loadingText: StringConstructor;
    finishedText: StringConstructor;
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<"up" | "down">;
        default: string;
    };
    immediateCheck: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("load" | "update:error" | "update:loading")[], "load" | "update:error" | "update:loading", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    offset: string | number;
    loading: boolean;
    error: boolean;
    direction: "up" | "down";
    finished: boolean;
    immediateCheck: boolean;
} & {
    loadingText?: string | undefined;
    errorText?: string | undefined;
    finishedText?: string | undefined;
}>, {
    offset: string | number;
    loading: boolean;
    error: boolean;
    direction: "up" | "down";
    finished: boolean;
    immediateCheck: boolean;
}>>;
export default List;
export { List };
