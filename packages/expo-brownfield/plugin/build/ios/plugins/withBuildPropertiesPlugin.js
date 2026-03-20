"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expo_build_properties_1 = require("expo-build-properties");
const withBuildPropertiesPlugin = (config, pluginConfig) => {
    return (0, expo_build_properties_1.plugin)(config, {
        ios: { buildReactNativeFromSource: pluginConfig.buildReactNativeFromSource },
    });
};
exports.default = withBuildPropertiesPlugin;
