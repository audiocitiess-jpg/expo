import { Picker, type PickerProps } from '@expo/ui/picker';
import React, { useState } from 'react';
import { Text } from 'react-native';

import { ScrollPage, Section } from '../../components/Page';

export default function CommunityPickerScreen() {
  return (
    <ScrollPage>
      <Section title="Standard">
        <GenericPicker />
      </Section>

      <Section title="Styled (backgroundColor, borderRadius)">
        <GenericPicker style={{ backgroundColor: '#e0e7ff', borderRadius: 12 }} />
      </Section>

      <Section title="Disabled">
        <GenericPicker enabled={false} />
      </Section>
    </ScrollPage>
  );
}

CommunityPickerScreen.navigationOptions = {
  title: 'Community Picker',
};

function GenericPicker(props: Partial<PickerProps>) {
  const [value, setValue] = useState<string>('java');

  return (
    <>
      <Picker {...props} selectedValue={value} onValueChange={(itemValue) => setValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Objective C" value="objc" />
        <Picker.Item label="Swift" value="swift" />
      </Picker>
      <Text>Selected: {value}</Text>
    </>
  );
}
