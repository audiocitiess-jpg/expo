import { ConfigPlugin } from 'expo/config-plugins';
type Props = {
    /** Disable linking the included libdav1d decoder. Useful when another dependency already provides it. */
    disableLibdav1d?: boolean;
};
export declare const plugin: ConfigPlugin<void | Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
