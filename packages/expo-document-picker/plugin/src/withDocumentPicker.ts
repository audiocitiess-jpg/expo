import { createRunOncePlugin } from 'expo/config-plugins';

import { withDocumentPickerIOS } from './withDocumentPickerIOS';

const pkg = require('expo-document-picker/package.json');

export const plugin = createRunOncePlugin(withDocumentPickerIOS, pkg.name, pkg.version);

export default (): string => pkg.name;
