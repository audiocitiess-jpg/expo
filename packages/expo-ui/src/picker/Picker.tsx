import * as React from 'react';

import { extractPickerItems, PickerItem, type PickerItemValue, type PickerProps } from './types';
import { Host } from '../swift-ui/Host';
import { Picker as SwiftUIPicker } from '../swift-ui/Picker';
import { Text } from '../swift-ui/Text';
import { disabled as disabledModifier, fixedSize } from '../swift-ui/modifiers';
import { pickerStyle } from '../swift-ui/modifiers/pickerStyle';
import { tag } from '../swift-ui/modifiers/tag';

/**
 * A drop-in replacement for `@react-native-picker/picker` on iOS.
 * Renders a SwiftUI wheel picker wrapped in a Host.
 */
function PickerComponent<T extends PickerItemValue>(props: PickerProps<T>) {
  const { selectedValue, onValueChange, enabled, style, children } = props;
  const items = extractPickerItems(children);
  const modifiers = [
    pickerStyle('wheel'),
    fixedSize(),
    ...(enabled === false ? [disabledModifier(true)] : []),
  ];

  return (
    <Host matchContents={{ vertical: true }} style={style}>
      <SwiftUIPicker
        modifiers={modifiers}
        selection={selectedValue}
        onSelectionChange={(newValue) => {
          if (onValueChange) {
            const index = items.findIndex((item) => item.value === newValue);
            onValueChange(newValue as T, index);
          }
        }}>
        {items.map((item, index) => (
          <Text key={String(item.value ?? index)} modifiers={[tag(String(item.value))]}>
            {item.label}
          </Text>
        ))}
      </SwiftUIPicker>
    </Host>
  );
}

export const Picker = Object.assign(PickerComponent, { Item: PickerItem });
