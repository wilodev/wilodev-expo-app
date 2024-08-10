/**
 * @fileOverview Styles for BoxNumber Component
 * @description This file provides style definitions for the BoxNumber component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the BoxNumber component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { Text } from 'react-native';

import { styled } from '@gluestack-style/react';

import { Box } from '../Box';

/**
 * Retrieves the default style for Row and variants.
 */
export const ContainerStyle = styled(Box, {
	w: 48,
	h: 48,
	justifyContent: 'center',
	alignItems: 'center',
	borderTopWidth: 1,
	borderTopColor: '$gray400',
	borderBottomWidth: 1,
	borderBottomColor: '$black',
	bg: 'rgba(0,0,0,0.5)',
	variants: {
		hasBorderTop: {
			false: {
				borderTopWidth: 0,
				borderTopColor: 'transparent',
			},
		},
		isActive: {
			true: {
				bg: '$secondary',
				shadowColor: '$secondary',
				shadowRadius: 10,
				shadowOpacity: 0.5,
				shadowOffset: { width: 0, height: -2 },
			},
		},
	},
});

export const TextStyle = styled(Text, {
	fontFamily: '$body',
	color: '$white',
	letterSpacing: 1,
	variants: {
		isActive: {
			true: {
				// fontWeight: 'bold',
				color: '$black',
			},
		},
	},
});
