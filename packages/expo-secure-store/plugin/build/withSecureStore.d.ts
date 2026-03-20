import { ConfigPlugin } from 'expo/config-plugins';
type Props = {
    faceIDPermission?: string | false;
    configureAndroidBackup?: boolean;
};
export declare const plugin: ConfigPlugin<void | Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
