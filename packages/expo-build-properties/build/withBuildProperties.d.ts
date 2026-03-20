import { ConfigPlugin } from 'expo/config-plugins';
import { Props } from './pluginConfig';
/**
 * Config plugin allowing customizing native Android and iOS build properties for managed apps.
 * @param config Expo config for application.
 * @param props Configuration for the build properties plugin.
 */
export declare const withBuildProperties: ConfigPlugin<Props>;
export declare const plugin: ConfigPlugin<Props>;
declare const _default: (props: Props) => [string, Props];
export default _default;
