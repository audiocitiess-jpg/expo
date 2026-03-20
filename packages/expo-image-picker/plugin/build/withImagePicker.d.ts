import { type ConfigPlugin } from 'expo/config-plugins';
type ImagePickerColors = {
    cropToolbarColor?: string;
    cropToolbarIconColor?: string;
    cropToolbarActionTextColor?: string;
    cropBackButtonIconColor?: string;
    cropBackgroundColor?: string;
};
type Props = {
    photosPermission?: string | false;
    cameraPermission?: string | false;
    microphonePermission?: string | false;
    colors?: ImagePickerColors;
    dark?: {
        colors?: ImagePickerColors;
    };
};
export declare const withAndroidImagePickerPermissions: ConfigPlugin<Props | void>;
export declare const plugin: ConfigPlugin<void | Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
