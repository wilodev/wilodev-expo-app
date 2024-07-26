/**
 * @fileOverview Button Types
 * @description This file defines the TypeScript types and interfaces used by the Button component.
 *              It extends and customizes standard Button properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { ReactElement } from 'react';

import { Button, ButtonText } from '@gluestack-ui/themed';

import { ActionColors, ActionSize } from '@/shared/types/commons';
import { WeightText } from '@/shared/types/text';

import { IconProps } from '../Icons/types';

type GButton = Omit<React.ComponentProps<typeof Button>, 'action'>;
export interface ExtendedButtonProps {
	action?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
}

export type GButtonText = React.ComponentProps<typeof ButtonText> &
	ExtendedButtonProps & {
		variant?: 'solid' | 'outline' | 'link';
		isDisabled?: boolean;
	};

/**
 * ButtonProps interface extends the properties of React Native 's ButtonProps.
 * It provides customization options for the Button component.
 */
export interface ButtonProps extends GButton, ExtendedButtonProps {
	onPress: () => void;
	color?: ActionColors;
	className?: string;
	extraClassName?: string;
	text?: string;
	textColor?: ActionColors;
	textSize?: ActionSize;
	textWeight?: WeightText;
	isLoading?: boolean;
	startIconColor?: ActionColors;
	endIconColor?: ActionColors;
	startIconWidth?: number;
	startIconHeight?: number;
	endIconWidth?: number;
	endIconHeight?: number;
	startIconType?: 'filled' | 'outlined';
	endIconType?: 'filled' | 'outlined';
	startIcon?: ReactElement<IconProps>;
	endIcon?: ReactElement<IconProps>;
	active?: boolean;
}
