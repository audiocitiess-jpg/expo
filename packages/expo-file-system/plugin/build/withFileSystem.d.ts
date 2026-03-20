import { ConfigPlugin } from 'expo/config-plugins';
type Props = {
    supportsOpeningDocumentsInPlace?: boolean;
    enableFileSharing?: boolean;
};
export declare const plugin: ConfigPlugin<Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
