import { ConfigPlugin, AndroidConfig } from 'expo/config-plugins';
type GranularPermission = 'photo' | 'video' | 'audio';
export declare function modifyAndroidManifest(manifest: AndroidConfig.Manifest.AndroidManifest): AndroidConfig.Manifest.AndroidManifest;
type Props = {
    photosPermission?: string | false;
    savePhotosPermission?: string | false;
    isAccessMediaLocationEnabled?: boolean;
    preventAutomaticLimitedAccessAlert?: boolean;
    granularPermissions?: GranularPermission[];
};
export declare const plugin: ConfigPlugin<void | Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
