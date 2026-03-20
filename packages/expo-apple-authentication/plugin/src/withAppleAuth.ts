import { ConfigPlugin, createRunOncePlugin } from 'expo/config-plugins';

import { withAppleAuthIOS } from './withAppleAuthIOS';

const pkg = require('expo-apple-authentication/package.json');

const withAppleAuth: ConfigPlugin = (config) => {
  config = withAppleAuthIOS(config);
  return config;
};

export const plugin = createRunOncePlugin(withAppleAuth, pkg.name, pkg.version);

export default (): string => pkg.name;
