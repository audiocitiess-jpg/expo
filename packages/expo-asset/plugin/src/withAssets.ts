import { type ConfigPlugin, createRunOncePlugin } from 'expo/config-plugins';

import { withAssetsAndroid } from './withAssetsAndroid';
import { withAssetsIos } from './withAssetsIos';

const pkg = require('expo-asset/package.json');

export type Props = {
  assets?: string[];
};

const withAssets: ConfigPlugin<Props | null> = (config, props) => {
  if (!props) {
    return config;
  }

  if (props.assets && props.assets.length === 0) {
    return config;
  }

  config = withAssetsIos(config, props.assets ?? []);
  config = withAssetsAndroid(config, props.assets ?? []);

  return config;
};

export const plugin = createRunOncePlugin(withAssets, pkg.name, pkg.version);

export default (props: Props = {}): [string, Props] => [pkg.name, props];
