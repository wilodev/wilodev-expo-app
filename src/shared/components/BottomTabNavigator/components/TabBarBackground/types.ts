/**
 * @fileOverview TabBarBackground Types
 * @description This file defines the TypeScript types and interfaces used by the TabBarBackground component.
 *              It extends and customizes standard TabBarBackground properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { EdgeInsets } from 'react-native-safe-area-context';

import { Box } from '@gluestack-ui/themed';

type GBox = React.ComponentProps<typeof Box>;

/**
 * TabBarBackgroundProps interface extends the properties of React Native 's TabBarBackgroundProps.
 * It provides customization options for the TabBarBackground component.
 */
export interface TabBarBackgroundProps extends GBox {
	children: React.ReactNode;
	showBorder?: boolean;
	insets?: EdgeInsets;
}
