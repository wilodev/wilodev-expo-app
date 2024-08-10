/**
 * @fileOverview TouchableBox Component
 * @description This file includes the definition and functionality of the TouchableBox component.
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

import { Pressable } from '@gluestack-ui/themed';

import { TouchableBoxProps } from './types';

/**
 * TouchableBox component to encapsulate the functionality of app.
 * @param {TouchableBoxProps} props - Props for the touchable box component.
 * @returns {JSX.Element} - The rendered touchable box element.
 */
const TouchableBox: React.FC<TouchableBoxProps> = ({
	children,
	onPress,
	...props
}): React.JSX.Element => {
	return (
		<Pressable onPress={onPress} {...props}>
			{children}
		</Pressable>
	);
};

export default TouchableBox;
