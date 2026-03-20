import { type ConfigPlugin } from 'expo/config-plugins';
type Props = {
    cameraPermission?: string | false;
    microphonePermission?: string | false;
    recordAudioAndroid?: boolean;
    barcodeScannerEnabled?: boolean;
};
export declare const plugin: ConfigPlugin<void | Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
