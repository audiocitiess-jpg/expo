import { type ConfigPlugin } from 'expo/config-plugins';
type Props = {
    supportsBackgroundPlayback?: boolean;
    supportsPictureInPicture?: boolean;
};
export declare const plugin: ConfigPlugin<Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
