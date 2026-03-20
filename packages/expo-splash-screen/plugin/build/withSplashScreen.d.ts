import { AndroidSplashConfig } from '@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/getAndroidSplashConfig';
import { IOSSplashConfig } from '@expo/prebuild-config/build/plugins/unversioned/expo-splash-screen/getIosSplashConfig';
import { ConfigPlugin } from 'expo/config-plugins';
type Props = {
    backgroundColor?: string;
    imageWidth?: number;
    enableFullScreenImage_legacy?: boolean;
    image?: string;
    resizeMode?: 'contain' | 'cover' | 'native';
    dark?: {
        image?: string;
        backgroundColor?: string;
    };
    android?: AndroidSplashConfig;
    ios?: IOSSplashConfig;
};
export declare const plugin: ConfigPlugin<Props | null>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
