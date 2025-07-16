import { PropType } from 'vue';
export declare type CheckerShape = 'square' | 'round';
export declare type CheckerDirection = 'horizontal' | 'vertical';
export declare type CheckerLabelPosition = 'left' | 'right';
export declare type CheckerParent = {
    props: {
        disabled?: boolean;
        iconSize?: number | string;
        direction?: CheckerDirection;
        checkedColor?: string;
    };
};
export declare const checkerProps: {
    name: PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: PropType<CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
    shape: {
        type: PropType<CheckerShape>;
        default: string;
    };
};
declare const _default: import("vue").DefineComponent<{
    role: StringConstructor;
    parent: PropType<CheckerParent | null>;
    checked: BooleanConstructor;
    bindGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
    bem: {
        type: FunctionConstructor;
        required: true;
    };
    name: PropType<unknown>;
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: PropType<CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
    shape: {
        type: PropType<CheckerShape>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "toggle")[], "click" | "toggle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    bem: Function;
    disabled: boolean;
    checked: boolean;
    bindGroup: boolean;
    labelDisabled: boolean;
    shape: CheckerShape;
} & {
    name?: unknown;
    role?: string | undefined;
    parent?: CheckerParent | null | undefined;
    modelValue?: unknown;
    iconSize?: string | number | undefined;
    checkedColor?: string | undefined;
    labelPosition?: CheckerLabelPosition | undefined;
}>, {
    disabled: boolean;
    checked: boolean;
    bindGroup: boolean;
    labelDisabled: boolean;
    shape: CheckerShape;
}>;
export default _default;
