'use client';
import { Host, Row } from '@expo/ui/jetpack-compose';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { ReactNode } from 'react';

import { ToolbarPlacementContext, type ToolbarPlacement } from './context';
import { NativeMenuContext } from '../../../link/NativeMenuContext';

/**
 * On Android, renders toolbar children as native Compose components inside `headerLeft`/`headerRight`.
 * This bridges the gap since Android's react-native-screens doesn't support
 * `unstable_headerLeftItems`/`unstable_headerRightItems`.
 */
export function processHeaderItemsForPlatform(
  children: ReactNode,
  placement: ToolbarPlacement
): NativeStackNavigationOptions | null {
  if (placement !== 'left' && placement !== 'right') {
    return null;
  }

  const headerContent = () => (
    <ToolbarPlacementContext.Provider value={placement}>
      <NativeMenuContext value>
        <Host matchContents>
          <Row>{children}</Row>
        </Host>
      </NativeMenuContext>
    </ToolbarPlacementContext.Provider>
  );

  if (placement === 'left') {
    return {
      headerShown: true,
      headerLeft: headerContent,
    };
  }

  return {
    headerShown: true,
    headerRight: headerContent,
  };
}
