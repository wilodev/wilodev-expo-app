/**
 * @fileOverview BoxSwipe Types
 * @description This file defines the TypeScript types and interfaces used by the BoxSwipe component.
 *              It extends and customizes standard BoxSwipe properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { Swipeable } from 'react-native-gesture-handler';

/**
 * BoxSwipeProps interface extends the properties of React Native 's BoxSwipeProps.
 * It provides customization options for the BoxSwipe component.
 */
export interface BoxSwipeProps {
	children: React.ReactNode;
	renderRightActions?: (progress: unknown, dragX: unknown) => React.ReactNode;
	renderLeftActions?: (progress: unknown, dragX: unknown) => React.ReactNode;
	onOpen?: (ref: Swipeable | null) => void;
}
