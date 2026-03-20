import { ExpoConfig } from 'expo/config';
import { ConfigPlugin, InfoPlist } from 'expo/config-plugins';
export declare const INITIAL_ORIENTATION_KEY = "EXDefaultScreenOrientationMask";
declare const OrientationLock: {
    DEFAULT: string;
    ALL: string;
    PORTRAIT: string;
    PORTRAIT_UP: string;
    PORTRAIT_DOWN: string;
    LANDSCAPE: string;
    LANDSCAPE_LEFT: string;
    LANDSCAPE_RIGHT: string;
};
type OrientationMasks = keyof typeof OrientationLock;
interface ExpoConfigWithInitialOrientation extends ExpoConfig {
    initialOrientation?: OrientationMasks;
}
type Props = {
    initialOrientation?: keyof typeof OrientationLock;
};
export declare function setInitialOrientation(config: Pick<ExpoConfigWithInitialOrientation, 'initialOrientation'>, infoPlist: InfoPlist): InfoPlist;
export declare const plugin: ConfigPlugin<void | Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
