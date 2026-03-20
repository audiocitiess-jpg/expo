import { ConfigPlugin } from 'expo/config-plugins';
type Props = {
    contactsPermission?: string;
};
export declare const plugin: ConfigPlugin<void | Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
