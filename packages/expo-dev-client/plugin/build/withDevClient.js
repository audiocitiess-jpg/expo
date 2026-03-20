"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const config_plugins_1 = require("expo/config-plugins");
const plugin_1 = require("expo-dev-launcher/plugin");
const plugin_2 = require("expo-dev-menu/plugin");
const withGeneratedAndroidScheme_1 = require("./withGeneratedAndroidScheme");
const withGeneratedIosScheme_1 = require("./withGeneratedIosScheme");
const pkg = require('expo-dev-client/package.json');
function withDevClient(config, props) {
    config = (0, plugin_2.plugin)(config);
    config = (0, plugin_1.plugin)(config, props);
    const mySchemeProps = { addGeneratedScheme: true, ...props };
    if (mySchemeProps.addGeneratedScheme) {
        config = (0, withGeneratedAndroidScheme_1.withGeneratedAndroidScheme)(config);
        config = (0, withGeneratedIosScheme_1.withGeneratedIosScheme)(config);
    }
    return config;
}
exports.plugin = (0, config_plugins_1.createRunOncePlugin)(withDevClient, pkg.name, pkg.version);
exports.default = (props = {}) => [pkg.name, props];
