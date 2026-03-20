import { ConfigPlugin, createRunOncePlugin } from 'expo/config-plugins';

import { withWebBrowserAndroid, Props } from './withWebBrowserAndroid';

const pkg = require('expo-web-browser/package.json');

const withWebBrowser: ConfigPlugin<Props | null> = (config, props) => {
  if (!props) {
    return config;
  }

  if (!props.experimentalLauncherActivity) {
    return config;
  }

  return withWebBrowserAndroid(config);
};

export const plugin = createRunOncePlugin(withWebBrowser, pkg.name, pkg.version);

export default (props: Props = {}): [string, Props] => [pkg.name, props];
