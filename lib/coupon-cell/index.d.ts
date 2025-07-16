declare const CouponCell: import("../utils").WithInstall<import("vue").DefineComponent<{
    title: StringConstructor;
    coupons: {
        type: import("vue").PropType<import("../coupon").CouponInfo[]>;
        default: () => never[];
    };
    currency: {
        type: StringConstructor;
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    chosenCoupon: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    border: boolean;
    currency: string;
    editable: boolean;
    coupons: import("../coupon").CouponInfo[];
    chosenCoupon: string | number;
} & {
    title?: string | undefined;
}>, {
    border: boolean;
    currency: string;
    editable: boolean;
    coupons: import("../coupon").CouponInfo[];
    chosenCoupon: string | number;
}>>;
export default CouponCell;
export { CouponCell };
