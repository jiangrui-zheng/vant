declare const ConfigProvider: import("../utils").WithInstall<import("vue").DefineComponent<{
    themeVars: import("vue").PropType<Record<string, string | number>>;
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    themeVars?: unknown;
    tag?: unknown;
} & {
    tag: keyof HTMLElementTagNameMap;
} & {
    themeVars?: Record<string, string | number> | undefined;
}>, {
    tag: keyof HTMLElementTagNameMap;
}>>;
export default ConfigProvider;
export { ConfigProvider };
