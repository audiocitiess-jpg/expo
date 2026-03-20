"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const config_plugins_1 = require("expo/config-plugins");
const pkg = require('expo-dev-menu/package.json');
// no-op after SDK 44
exports.plugin = (0, config_plugins_1.createRunOncePlugin)((config) => config, pkg.name, pkg.version);
exports.default = () => pkg.name;
