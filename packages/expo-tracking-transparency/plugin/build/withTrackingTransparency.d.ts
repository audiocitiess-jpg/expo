import { ConfigPlugin } from 'expo/config-plugins';
type Props = {
    /**
     * Sets the iOS `NSUserTrackingUsageDescription` permission message in `Info.plist`. Omitting a
     * description will result in using the default permission message.
     * @default 'Allow this app to collect app-related data that can be used for tracking you or your
     * device.'
     */
    userTrackingPermission?: string | false;
};
export declare const plugin: ConfigPlugin<void | Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
