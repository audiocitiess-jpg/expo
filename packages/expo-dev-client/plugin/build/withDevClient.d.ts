import { type Props as DevLauncherPluginConfig } from 'expo-dev-launcher/plugin';
type Props = DevLauncherPluginConfig & {
    addGeneratedScheme?: boolean;
};
export declare const plugin: import("expo/config-plugins").ConfigPlugin<Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
