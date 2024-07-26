/**
 * @fileOverview Link Component
 * @description This file includes the definition and functionality of the Link component.
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

import { TouchableWithoutFeedback } from 'react-native';

import { LinkStyle } from './linkStyles';
import { LinkProps } from './types';
import { Box } from '../Box';

/**
 * Link component to encapsulate the functionality of app.
 * @param {LinkProps} props - Props for the Link component.
 * @returns {JSX.Element} - The rendered Link element.
 */
const Link: React.FC<LinkProps> = ({
	children,
	onPress,
	...props
}): React.JSX.Element => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<Box h={'auto'}>
				<LinkStyle {...props}>{children}</LinkStyle>
				<Box
					w={'auto'}
					h={'$0.5'}
					bg="$infoLight"
					$dark-bg="$infoDark"
					mt={'$0'}
					mr={2}
					ml={1}
				/>
			</Box>
		</TouchableWithoutFeedback>
	);
};

export default Link;
