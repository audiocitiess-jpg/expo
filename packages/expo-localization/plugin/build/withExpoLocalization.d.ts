import { ConfigPlugin } from 'expo/config-plugins';
type Props = {
    supportsRTL?: boolean;
    forcesRTL?: boolean;
    allowDynamicLocaleChangesAndroid?: boolean;
    supportedLocales?: string[] | {
        ios?: string[];
        android?: string[];
    };
};
export declare function convertBcp47ToResourceQualifier(locale: string): string;
export declare const plugin: ConfigPlugin<Props | undefined>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
