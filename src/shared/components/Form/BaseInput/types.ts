/**
 * @fileOverview BaseInput Types
 * @description This file defines the TypeScript types and interfaces used by the BaseInput component.
 *              It extends and customizes standard BaseInput properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { ReactElement } from 'react';

import { TextInput } from 'react-native';

import { Input, InputField } from '@gluestack-ui/themed';

import { IconProps } from '../../../ui/Icons/types';

type GInputFieldProps = Omit<React.ComponentProps<typeof InputField>, 'ref'>;

export type AllowedActions =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warning';

export type GInputProps = Omit<React.ComponentProps<typeof Input>, 'ref'>;
/**
 * BaseInputProps interface extends the properties of React Native 's BaseInputProps.
 * It provides customization options for the BaseInput component.
 */
export interface BaseInputProps extends GInputFieldProps {
	placeholder?: string;
	isDisabled?: boolean;
	isInvalid?: boolean;
	isReadOnly?: boolean;
	action?: AllowedActions;
	type?: 'text' | 'password';
	active?: boolean;
	disabled?: boolean;
	isLoading?: boolean;
	startIconColor?: AllowedActions;
	endIconColor?: AllowedActions;
	startIconWidth?: number;
	startIconHeight?: number;
	endIconWidth?: number;
	endIconHeight?: number;
	showStartIcon?: boolean;
	showEndIcon?: boolean;
	startIconType?: 'filled' | 'outlined';
	endIconType?: 'filled' | 'outlined';
	startIcon?: ReactElement<IconProps>;
	endIcon?: ReactElement<IconProps>;
	startIconHandler?: () => void;
	endIconHandler?: () => void;
	refCallback?: (ref: TextInput | null) => void;
	label?: string;
	error?: string;
	helperText?: string;
	isDirty?: boolean;
	isTouched?: boolean;
	isFloating?: boolean;
}
