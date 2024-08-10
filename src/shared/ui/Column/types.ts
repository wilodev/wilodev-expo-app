/**
 * @fileOverview Column Types
 * @description This file defines the TypeScript types and interfaces used by the Column component.
 *              It extends and customizes standard Column properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { StyleProp, ViewStyle } from 'react-native';

import { Box } from '@gluestack-ui/themed';

type GBoxProps = Omit<React.ComponentProps<typeof Box>, 'ref'> & {
	style?: StyleProp<ViewStyle>;
};

/**
 * ColumnProps interface extends the properties of React Native 's ColumnProps.
 * It provides customization options for the Column component.
 */
export interface ColumnProps extends GBoxProps {
	children: React.ReactNode | React.ReactElement[];
}
