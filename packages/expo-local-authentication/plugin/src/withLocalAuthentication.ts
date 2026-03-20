import { AndroidConfig, ConfigPlugin, IOSConfig, createRunOncePlugin } from 'expo/config-plugins';

const pkg = require('expo-local-authentication/package.json');
const FACE_ID_USAGE = 'Allow $(PRODUCT_NAME) to use Face ID';

type Props = {
  faceIDPermission?: string | false;
};

const withLocalAuthentication: ConfigPlugin<Props | void> = (config, { faceIDPermission } = {}) => {
  IOSConfig.Permissions.createPermissionsPlugin({
    NSFaceIDUsageDescription: FACE_ID_USAGE,
  })(config, {
    NSFaceIDUsageDescription: faceIDPermission,
  });

  return AndroidConfig.Permissions.withPermissions(config, [
    'android.permission.USE_BIOMETRIC',
    'android.permission.USE_FINGERPRINT',
  ]);
};

export const plugin = createRunOncePlugin(withLocalAuthentication, pkg.name, pkg.version);

export default (props: Props = {}): [string, Props] => [pkg.name, props];
