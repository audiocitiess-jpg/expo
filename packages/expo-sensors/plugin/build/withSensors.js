"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const config_plugins_1 = require("expo/config-plugins");
const pkg = require('expo-sensors/package.json');
const MOTION_USAGE = 'Allow $(PRODUCT_NAME) to access your device motion';
const withSensors = (config, { motionPermission } = {}) => {
    if (motionPermission === false) {
        config = (0, config_plugins_1.withPodfileProperties)(config, (config) => {
            config.modResults.MOTION_PERMISSION = 'false';
            return config;
        });
    }
    return config_plugins_1.IOSConfig.Permissions.createPermissionsPlugin({
        NSMotionUsageDescription: MOTION_USAGE,
    })(config, {
        NSMotionUsageDescription: motionPermission,
    });
};
exports.plugin = (0, config_plugins_1.createRunOncePlugin)(withSensors, pkg.name, pkg.version);
exports.default = (props = {}) => [pkg.name, props];
