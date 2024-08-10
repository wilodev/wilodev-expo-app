/**
 * @fileOverview LinearGradient Types
 * @description This file defines the TypeScript types and interfaces used by the LinearGradient component.
 *              It extends and customizes standard LinearGradient properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { LinearGradient } from '@gluestack-ui/themed';
import {
	LinearGradientPoint,
	LinearGradientProps as RNLinearGradientProps,
} from 'expo-linear-gradient';

type GLinearGradientProps = Omit<
	React.ComponentProps<typeof LinearGradient>,
	'ref' | 'start' | 'end'
> &
	Omit<RNLinearGradientProps, 'start' | 'end'>;

/**
 * LinearGradientProps interface extends the properties of React Native 's LinearGradientProps.
 * It provides customization options for the Box component.
 */
export interface LinearGradientProps extends GLinearGradientProps {
	children?: React.ReactNode;
	start: LinearGradientPoint | null;
	end: LinearGradientPoint | null;
}
