import { Ref, PropType } from 'vue';
export declare const DROPDOWN_KEY: unique symbol;
export declare type DropdownMenuDirection = 'up' | 'down';
export declare type DropdownMenuProvide = {
    props: {
        zIndex?: number | string;
        overlay: boolean;
        duration: number | string;
        direction: DropdownMenuDirection;
        activeColor?: string;
        closeOnClickOverlay: boolean;
    };
    offset: Ref<number>;
};
declare const _default: import("vue").DefineComponent<{
    zIndex: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: PropType<DropdownMenuDirection>;
        default: string;
    };
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    overlay: boolean;
    duration: string | number;
    closeOnClickOverlay: boolean;
    direction: DropdownMenuDirection;
    closeOnClickOutside: boolean;
} & {
    zIndex?: string | number | undefined;
    activeColor?: string | undefined;
}>, {
    overlay: boolean;
    duration: string | number;
    closeOnClickOverlay: boolean;
    direction: DropdownMenuDirection;
    closeOnClickOutside: boolean;
}>;
export default _default;
