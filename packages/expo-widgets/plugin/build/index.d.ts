import { ConfigPlugin } from 'expo/config-plugins';
import { WidgetConfig } from './types/WidgetConfig.type';
type Props = {
    bundleIdentifier?: string;
    groupIdentifier?: string;
    enablePushNotifications?: boolean;
    frequentUpdates?: boolean;
    widgets?: WidgetConfig[];
};
export declare const plugin: ConfigPlugin<Props | undefined>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
