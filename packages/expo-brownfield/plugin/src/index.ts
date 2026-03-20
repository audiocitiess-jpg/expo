import type { ConfigPlugin } from 'expo/config-plugins';

import withAndroidPlugin from './android';
import { withDevLauncherWarning } from './common';
import withIosPlugin from './ios';
import type { Props } from './types';

const pkg = require('expo-brownfield/package.json');

export const plugin: ConfigPlugin<Props | undefined> = (config, props) => {
  // Warn the user that `expo-dev-launcher` is not supported with `expo-brownfield` yet
  withDevLauncherWarning(config);
  config = withAndroidPlugin(config, props?.android);
  return withIosPlugin(config, props?.ios);
};

export default (props: Props = {}): [string, Props] => [pkg.name, props];
