import { ConfigPlugin } from 'expo/config-plugins';
interface Props {
    customBuildFlags?: string;
    enableFTS?: boolean;
    useSQLCipher?: boolean;
    useLibSQL?: boolean;
    withSQLiteVecExtension?: boolean;
    android?: {
        customBuildFlags?: string;
        enableFTS?: boolean;
        useSQLCipher?: boolean;
        useLibSQL?: boolean;
        useSQLiteVec?: boolean;
        withSQLiteVecExtension?: boolean;
    };
    ios?: {
        customBuildFlags?: string;
        enableFTS?: boolean;
        useSQLCipher?: boolean;
        useLibSQL?: boolean;
        withSQLiteVecExtension?: boolean;
    };
}
export declare const plugin: ConfigPlugin<Props>;
declare const _default: (props?: Props) => [string, Props];
export default _default;
