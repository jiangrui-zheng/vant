declare const NavBar: import("../utils").WithInstall<import("vue").DefineComponent<{
    title: StringConstructor;
    fixed: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    leftText: StringConstructor;
    rightText: StringConstructor;
    leftArrow: BooleanConstructor;
    placeholder: BooleanConstructor;
    safeAreaInsetTop: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click-left" | "click-right")[], "click-left" | "click-right", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    fixed: boolean;
    border: boolean;
    placeholder: boolean;
    leftArrow: boolean;
    safeAreaInsetTop: boolean;
} & {
    title?: string | undefined;
    zIndex?: string | number | undefined;
    leftText?: string | undefined;
    rightText?: string | undefined;
}>, {
    fixed: boolean;
    border: boolean;
    placeholder: boolean;
    leftArrow: boolean;
    safeAreaInsetTop: boolean;
}>>;
export default NavBar;
export { NavBar };
