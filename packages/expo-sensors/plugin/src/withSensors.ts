import {
  ConfigPlugin,
  createRunOncePlugin,
  IOSConfig,
  withPodfileProperties,
} from 'expo/config-plugins';

const pkg = require('expo-sensors/package.json');
const MOTION_USAGE = 'Allow $(PRODUCT_NAME) to access your device motion';

type Props = {
  motionPermission?: string | false;
};

const withSensors: ConfigPlugin<Props | void> = (config, { motionPermission } = {}) => {
  if (motionPermission === false) {
    config = withPodfileProperties(config, (config) => {
      config.modResults.MOTION_PERMISSION = 'false';
      return config;
    });
  }

  return IOSConfig.Permissions.createPermissionsPlugin({
    NSMotionUsageDescription: MOTION_USAGE,
  })(config, {
    NSMotionUsageDescription: motionPermission,
  });
};

export const plugin = createRunOncePlugin(withSensors, pkg.name, pkg.version);

export default (props: Props = {}): [string, Props] => [pkg.name, props];
