/**
 * @fileOverview TouchableButton Component
 * @description This file includes the definition and functionality of the TouchableButton component.
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

import { Pressable } from 'react-native';

import { Box } from '@/ui/Box';

import { TouchableButtonProps } from './types';

/**
 * TouchableButton component to encapsulate the functionality of app.
 * @param {TouchableButtonProps} props - Props for the touchable button component.
 * @returns {JSX.Element} - The rendered touchable button element.
 */
const TouchableButton: React.FC<TouchableButtonProps> = ({
	children,
	onPress,
	...props
}): React.JSX.Element => {
	return (
		<Pressable onPress={onPress}>
			<Box {...props}>{children}</Box>
		</Pressable>
	);
};

export default TouchableButton;
