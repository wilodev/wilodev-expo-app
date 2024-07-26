/**
 * @fileOverview Card Types
 * @description This file defines the TypeScript types and interfaces used by the Card component.
 *              It extends and customizes standard Card properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { ImageSourcePropType } from 'react-native';

import { Box } from '@gluestack-ui/themed';

type GCardProps = Omit<React.ComponentProps<typeof Box>, 'ref'>;

/**
 * CardProps interface extends the properties of React Native 's CardProps.
 * It provides customization options for the Card component.
 */
export interface CardProps extends GCardProps {
	title: string;
	subtitle?: string;
	image: ImageSourcePropType | string;
	children: React.ReactNode;
}
