import { PropType } from 'vue';
export declare const STEPS_KEY: unique symbol;
export declare type StepsDirection = 'horizontal' | 'vertical';
export declare type StepsProvide = {
    props: {
        active: number | string;
        direction: StepsDirection;
        activeIcon: string;
        finishIcon?: string;
        activeColor?: string;
        inactiveIcon?: string;
        inactiveColor?: string;
    };
    onClickStep: (index: number) => void;
};
declare const _default: import("vue").DefineComponent<{
    finishIcon: StringConstructor;
    activeColor: StringConstructor;
    inactiveIcon: StringConstructor;
    inactiveColor: StringConstructor;
    active: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: PropType<StepsDirection>;
        default: string;
    };
    activeIcon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-step"[], "click-step", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    active: string | number;
    direction: StepsDirection;
    activeIcon: string;
} & {
    activeColor?: string | undefined;
    inactiveColor?: string | undefined;
    finishIcon?: string | undefined;
    inactiveIcon?: string | undefined;
}>, {
    active: string | number;
    direction: StepsDirection;
    activeIcon: string;
}>;
export default _default;
