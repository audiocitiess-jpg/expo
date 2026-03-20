import type { ExpoConfig } from 'expo/config';
import { createRunOncePlugin } from 'expo/config-plugins';
import {
  plugin as withDevLauncher,
  type Props as DevLauncherPluginConfig,
} from 'expo-dev-launcher/plugin';
import { plugin as withDevMenu } from 'expo-dev-menu/plugin';

import { withGeneratedAndroidScheme } from './withGeneratedAndroidScheme';
import { withGeneratedIosScheme } from './withGeneratedIosScheme';

const pkg = require('expo-dev-client/package.json');

type Props = DevLauncherPluginConfig & {
  addGeneratedScheme?: boolean;
};

function withDevClient(config: ExpoConfig, props: Props) {
  config = withDevMenu(config);
  config = withDevLauncher(config, props);

  const mySchemeProps = { addGeneratedScheme: true, ...props };

  if (mySchemeProps.addGeneratedScheme) {
    config = withGeneratedAndroidScheme(config);
    config = withGeneratedIosScheme(config);
  }
  return config;
}

export const plugin = createRunOncePlugin<Props>(withDevClient, pkg.name, pkg.version);

export default (props: Props = {}): [string, Props] => [pkg.name, props];
