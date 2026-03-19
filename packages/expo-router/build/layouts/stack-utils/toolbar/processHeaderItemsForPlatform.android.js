"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.processHeaderItemsForPlatform = processHeaderItemsForPlatform;
const jetpack_compose_1 = require("@expo/ui/jetpack-compose");
const react_1 = require("react");
const context_1 = require("./context");
const NativeMenuContext_1 = require("../../../link/NativeMenuContext");
const EMPTY_COLORS = {};
function ToolbarHeader({ children, placement, colors, }) {
    const stableColors = (0, react_1.useMemo)(() => colors ?? EMPTY_COLORS, [colors?.backgroundColor, colors?.tintColor]);
    return (<context_1.ToolbarPlacementContext.Provider value={placement}>
      <context_1.ToolbarColorContext.Provider value={stableColors}>
        <NativeMenuContext_1.NativeMenuContext value>
          <jetpack_compose_1.Host matchContents>
            <jetpack_compose_1.Row>{children}</jetpack_compose_1.Row>
          </jetpack_compose_1.Host>
        </NativeMenuContext_1.NativeMenuContext>
      </context_1.ToolbarColorContext.Provider>
    </context_1.ToolbarPlacementContext.Provider>);
}
/**
 * On Android, renders toolbar children as native Compose components inside `headerLeft`/`headerRight`.
 * This bridges the gap since Android's react-native-screens doesn't support
 * `unstable_headerLeftItems`/`unstable_headerRightItems`.
 */
function processHeaderItemsForPlatform(children, placement, colors) {
    if (placement !== 'left' && placement !== 'right') {
        return null;
    }
    const headerContent = () => (<ToolbarHeader placement={placement} colors={colors}>
      {children}
    </ToolbarHeader>);
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
//# sourceMappingURL=processHeaderItemsForPlatform.android.js.map