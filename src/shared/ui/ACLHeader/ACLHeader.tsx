/**
 * @fileOverview Styles for Box Component
 * @description This file provides style definitions for the Box component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Box component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { styled, createComponents } from '@gluestack-style/react';

import { Box } from '../Box';
import { Heading } from '../Heading';
import { Text } from '../Text';

/**
 * Retrieves the default style for Box and variants.
 */
export const BoxHeaderStyle = styled(Box, {
	'@xs': {
		mt: '$12',
		mb: '$8',
	},
	'@sm': {
		mt: '$6',
		mb: '$8',
	},
	defaultProps: {
		width: '100%',
	},
});
export const HeadingHeaderStyle = styled(Heading, {
	'@xs': {
		fontSize: '$xl',
	},
	'@sm': {
		fontSize: '$2xl',
	},
	defaultProps: {
		size: 'xl',
		textAlign: 'center',
	},
});
export const TextHeaderStyle = styled(Text, {
	defaultProps: {
		size: 'xs',
		textAlign: 'center',
		mt: '$6',
		px: '$4',
	},
});
export const ImageHeaderStyle = styled(Box, {
	justifyContent: 'center',
	alignItems: 'center',
	mt: '$8',
	mb: '$2',
});

export const ACLHeader = createComponents({
	Box: BoxHeaderStyle,
	Heading: HeadingHeaderStyle,
	Text: TextHeaderStyle,
	Image: ImageHeaderStyle,
});
