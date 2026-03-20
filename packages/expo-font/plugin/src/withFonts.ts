import { type ConfigPlugin, createRunOncePlugin } from 'expo/config-plugins';

import { withFontsAndroid } from './withFontsAndroid';
import { withFontsIos } from './withFontsIos';

const pkg = require('expo-font/package.json');

export type FontObject = {
  fontFamily: string;
  fontDefinitions: {
    path: string;
    weight: number;
    style?: 'normal' | 'italic' | undefined;
  }[];
};

export type Font = string | FontObject;

export type Props = {
  fonts?: string[];
  android?: {
    fonts?: Font[];
  };
  ios?: {
    fonts?: string[];
  };
};

const withFonts: ConfigPlugin<Props> = (config, props) => {
  if (!props) {
    return config;
  }

  const iosFonts = [...(props.fonts ?? []), ...(props.ios?.fonts ?? [])];

  if (iosFonts.length > 0) {
    config = withFontsIos(config, iosFonts);
  }

  const androidFonts = [...(props.fonts ?? []), ...(props.android?.fonts ?? [])];

  if (androidFonts.length > 0) {
    config = withFontsAndroid(config, androidFonts);
  }

  return config;
};

export const plugin = createRunOncePlugin(withFonts, pkg.name, pkg.version);

export default (props: Props = {}): [string, Props] => [pkg.name, props];
