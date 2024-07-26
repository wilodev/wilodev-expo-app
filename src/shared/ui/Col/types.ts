/**
 * @fileOverview Columns Types
 * @description This file defines the TypeScript types and interfaces used by the Columns component.
 *              It extends and customizes standard Columns properties for enhanced type safety and clarity.
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

import { ColumnNumber } from '@/shared/types/commons';

type GBoxProps = Omit<React.ComponentProps<typeof Box>, 'ref'> & {
	style?: StyleProp<ViewStyle>;
};

/**
 * ColumnsProps interface extends the properties of React Native 's ColumnsProps.
 * It provides customization options for the Columns component.
 */
export interface ColumnsProps extends GBoxProps {
	children: React.ReactNode | React.ReactElement[];
	columns?: ColumnNumber;
}

export interface ColProps extends GBoxProps {
	children: React.ReactNode | React.ReactElement[];
	size?: ColumnNumber;
}
