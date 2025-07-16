declare type Message = Record<string, any>;
declare const _default: {
    messages(): Message;
    use(newLang: string, newMessages?: Message | undefined): void;
    add(newMessages?: Message): void;
};
export default _default;
