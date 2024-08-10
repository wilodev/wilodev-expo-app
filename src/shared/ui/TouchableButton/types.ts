/**
 * @fileOverview TouchableButton Types
 * @description This file defines the TypeScript types and interfaces used by the TouchableButton component.
 *              It extends and customizes standard TouchableButton properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { BoxProps } from '../Box/types';

/**
 * TouchableButtonProps interface extends the properties of React Native 's TouchableButtonProps.
 * It provides customization options for the TouchableButton component.
 */
export interface TouchableButtonProps extends BoxProps {
	children: React.ReactNode;
	onPress: () => void;
}
