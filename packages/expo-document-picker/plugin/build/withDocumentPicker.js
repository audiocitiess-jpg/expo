"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const config_plugins_1 = require("expo/config-plugins");
const withDocumentPickerIOS_1 = require("./withDocumentPickerIOS");
const pkg = require('expo-document-picker/package.json');
exports.plugin = (0, config_plugins_1.createRunOncePlugin)(withDocumentPickerIOS_1.withDocumentPickerIOS, pkg.name, pkg.version);
exports.default = () => pkg.name;
