import { AndroidConfig, ConfigPlugin, IOSConfig, createRunOncePlugin } from 'expo/config-plugins';

const pkg = require('expo-contacts/package.json');

const CONTACTS_USAGE = 'Allow $(PRODUCT_NAME) to access your contacts';

type Props = {
  contactsPermission?: string;
};

const withContacts: ConfigPlugin<Props | void> = (config, { contactsPermission } = {}) => {
  IOSConfig.Permissions.createPermissionsPlugin({
    NSContactsUsageDescription: CONTACTS_USAGE,
  })(config, {
    NSContactsUsageDescription: contactsPermission,
  });

  return AndroidConfig.Permissions.withPermissions(config, [
    'android.permission.READ_CONTACTS',
    'android.permission.WRITE_CONTACTS',
  ]);
};

export const plugin = createRunOncePlugin(withContacts, pkg.name, pkg.version);

export default (props: Props = {}): [string, Props] => [pkg.name, props];
