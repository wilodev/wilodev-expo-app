/**
 * @fileOverview FlatList Types
 * @description This file defines the TypeScript types and interfaces used by the FlatList component.
 *              It extends and customizes standard FlatList properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { FlatListProps as RNFlatListProps } from 'react-native';

import { FlatList as GFlatList } from '@gluestack-ui/themed';

type GFlatListProps<ItemT> = Omit<RNFlatListProps<ItemT>, 'ref' | 'style'> &
	Omit<
		React.ComponentProps<typeof GFlatList>,
		| 'data'
		| 'renderItem'
		| 'keyExtractor'
		| 'valueExtractor'
		| 'style'
		| 'ref'
		| 'getItem'
		| 'getItemLayout'
	>;

/**
 * FlatListProps interface extends the properties of React Native 's FlatListProps.
 * It provides customization options for the FlatList component.
 */
export interface FlatListProps<ItemT> extends GFlatListProps<ItemT> {}
