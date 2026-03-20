import { type ConfigPlugin } from 'expo/config-plugins';
export type Props = {
    assets?: string[];
};
export declare const plugin: ConfigPlugin<Props | null>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
