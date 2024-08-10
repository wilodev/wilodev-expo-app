import { FlatList } from 'react-native';

import { AnimatedRef, SharedValue } from 'react-native-reanimated';

import { ICarouselItemData } from '../../types';
/**
 * @fileOverview Footer Types
 * @description This file defines the TypeScript types and interfaces used by the Footer component.
 *              It extends and customizes standard Footer properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

/**
 * FooterProps interface extends the properties of React Native 's FooterProps.
 * It provides customization options for the Footer component.
 */
export interface FooterProps {
	flatListRef: AnimatedRef<FlatList<ICarouselItemData>>;
	x: SharedValue<number>;
	dataLength: number;
	flatListIndex: SharedValue<number>;
	text: string;
	onPress: () => void;
}
