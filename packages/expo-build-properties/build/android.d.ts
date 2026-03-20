import { ConfigPlugin } from 'expo/config-plugins';
import { Props } from './pluginConfig';
export declare const withAndroidBuildProperties: ConfigPlugin<Props>;
/**
 * Appends `props.android.extraProguardRules` content into `android/app/proguard-rules.pro`
 */
export declare const withAndroidProguardRules: ConfigPlugin<Props>;
/**
 * Purge generated proguard contents from previous prebuild.
 * This plugin only runs once in the prebuilding phase and should execute before any `withAndroidProguardRules` calls.
 */
export declare const withAndroidPurgeProguardRulesOnce: ConfigPlugin;
/**
 * Update `newProguardRules` to original `proguard-rules.pro` contents if needed
 *
 * @param contents the original `proguard-rules.pro` contents
 * @param newProguardRules new proguard rules to add. If the value is null, the returned value will be original `contents`.
 * @returns return updated contents
 */
export declare function updateAndroidProguardRules(contents: string, newProguardRules: string | null, updateMode: 'append' | 'overwrite'): string;
export declare const withAndroidCleartextTraffic: ConfigPlugin<Props>;
export declare const withAndroidQueries: ConfigPlugin<Props>;
export declare const withAndroidDayNightTheme: ConfigPlugin<Props>;
export declare const withAndroidSettingsGradle: ConfigPlugin<Props>;
export declare function updateAndroidSettingsGradle({ contents, buildFromSource, }: {
    contents: string;
    buildFromSource?: boolean;
}): string;
