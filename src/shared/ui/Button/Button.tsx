/**
 * @fileOverview Button Component
 * @description This file includes the definition and functionality of the Button component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { ButtonSpinner } from '@gluestack-ui/themed';

import {
	ButtonStyle,
	ButtonTextStyle,
	useButtonIconColor,
} from './buttonStyles';
import { ButtonProps } from './types';

/**
 * Button component to encapsulate the functionality of app.
 * @param {ButtonProps} props - Props for the button component.
 * @returns {JSX.Element} - The rendered button element.
 */
const Button: React.FC<ButtonProps> = ({
	isLoading,
	startIconColor,
	endIconColor,
	startIconWidth,
	startIconHeight,
	endIconWidth,
	endIconHeight,
	startIcon,
	endIcon,
	text,
	variant = 'solid',
	onPress,
	action = 'primary',
	isDisabled = false,
	size = 'md',
	...props
}): React.JSX.Element => {
	const defaultColorIcon = useButtonIconColor(action, variant);
	return (
		<ButtonStyle
			onPress={isLoading || isDisabled ? () => {} : onPress}
			{...props}
			size={size}
			action={action}
			variant={variant}
			isLoading={isLoading}
			isDisabled={isDisabled}>
			{isLoading && <ButtonSpinner mr={8} color={'black'} />}
			{startIcon &&
				!isLoading &&
				React.cloneElement(startIcon, {
					fill: startIconColor ?? defaultColorIcon,
					stroke: startIconColor ?? defaultColorIcon,
					width: startIconWidth ?? 24,
					height: startIconHeight ?? 24,
					mr: 8,
				})}
			{text && (
				<ButtonTextStyle
					variant={variant}
					action={action}
					isDisabled={isDisabled}>
					{text}
				</ButtonTextStyle>
			)}
			{props?.children && (props.children as React.ReactNode)}
			{endIcon &&
				React.cloneElement(endIcon, {
					fill: endIconColor ?? defaultColorIcon,
					stroke: endIconColor ?? defaultColorIcon,
					width: endIconWidth ?? 24,
					height: endIconHeight ?? 24,
					ml: 8,
				})}
		</ButtonStyle>
	);
};

export default Button;
