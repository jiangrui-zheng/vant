import { PropType } from 'vue';
export declare function kebabCase(word: string): string;
declare const _default: import("vue").DefineComponent<{
    themeVars: PropType<Record<string, string | number>>;
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
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
}>;
export default _default;
