declare const Uploader: import("../utils").WithInstall<import("vue").DefineComponent<{
    capture: StringConstructor;
    multiple: BooleanConstructor;
    disabled: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    uploadText: StringConstructor;
    afterRead: import("vue").PropType<import("./Uploader").UploaderAfterRead>;
    beforeRead: import("vue").PropType<import("./Uploader").UploaderBeforeRead>;
    beforeDelete: import("vue").PropType<import("../utils/interceptor").Interceptor>;
    previewSize: (NumberConstructor | StringConstructor)[];
    previewOptions: import("vue").PropType<import("../image-preview").ImagePreviewOptions>;
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<import("./utils").UploaderFileListItem[]>;
        default: () => never[];
    };
    maxSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    deletable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewImage: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewFullImage: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageFit: {
        type: import("vue").PropType<import("../image").ImageFit>;
        default: string;
    };
    resultType: {
        type: import("vue").PropType<import("./utils").UploaderResultType>;
        default: string;
    };
    uploadIcon: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "delete" | "oversize" | "close-preview" | "click-preview")[], "update:modelValue" | "delete" | "oversize" | "close-preview" | "click-preview", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    name: string | number;
    multiple: boolean;
    disabled: boolean;
    modelValue: import("./utils").UploaderFileListItem[];
    lazyLoad: boolean;
    imageFit: import("../image").ImageFit;
    deletable: boolean;
    accept: string;
    maxSize: string | number;
    maxCount: string | number;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    resultType: import("./utils").UploaderResultType;
    uploadIcon: string;
} & {
    beforeRead?: import("./Uploader").UploaderBeforeRead | undefined;
    afterRead?: import("./Uploader").UploaderAfterRead | undefined;
    previewSize?: string | number | undefined;
    beforeDelete?: import("../utils/interceptor").Interceptor | undefined;
    capture?: string | undefined;
    uploadText?: string | undefined;
    previewOptions?: import("../image-preview").ImagePreviewOptions | undefined;
}>, {
    name: string | number;
    multiple: boolean;
    disabled: boolean;
    modelValue: import("./utils").UploaderFileListItem[];
    lazyLoad: boolean;
    imageFit: import("../image").ImageFit;
    deletable: boolean;
    accept: string;
    maxSize: string | number;
    maxCount: string | number;
    showUpload: boolean;
    previewImage: boolean;
    previewFullImage: boolean;
    resultType: import("./utils").UploaderResultType;
    uploadIcon: string;
}>>;
export default Uploader;
export { Uploader };
export type { UploaderResultType, UploaderFileListItem } from './utils';
