import { type ConfigPlugin } from 'expo/config-plugins';
export type FontObject = {
    fontFamily: string;
    fontDefinitions: {
        path: string;
        weight: number;
        style?: 'normal' | 'italic' | undefined;
    }[];
};
export type Font = string | FontObject;
export type Props = {
    fonts?: string[];
    android?: {
        fonts?: Font[];
    };
    ios?: {
        fonts?: string[];
    };
};
export declare const plugin: ConfigPlugin<Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
