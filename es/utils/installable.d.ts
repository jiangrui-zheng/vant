import { App } from 'vue';
export declare function installable<T>(options: T): T & {
    install(app: App): void;
};
