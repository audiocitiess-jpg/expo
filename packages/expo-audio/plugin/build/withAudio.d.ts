import { ConfigPlugin } from 'expo/config-plugins';
type Props = {
    microphonePermission?: string | false;
    recordAudioAndroid?: boolean;
    enableBackgroundRecording?: boolean;
    enableBackgroundPlayback?: boolean;
};
export declare const plugin: ConfigPlugin<void | Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
