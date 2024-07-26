/**
 * @fileOverview Styles for TextRotate Component
 * @description This file provides style definitions for the TextRotate component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the TextRotate component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { styled } from '@gluestack-style/react';

import { Box } from '../Box';
import { Text } from '../Text/';

/**
 * Retrieves the default style for Row and variants.
 */
export const ContainerStyle = styled(Box, {
	py: 10,
	w: 26,
	height: '$full',
	justifyContent: 'center',
	alignItems: 'center',
	bg: 'rgba(101,102,104,0.5)',
});

export const TextStyle = styled(Text, {
	fontSize: 14,
	color: '$white',
	fontFamily: '$body',
	transform: [{ rotate: '-90deg' }],
	width: 200,
	textAlign: 'center',
	lineHeight: 20,
	letterSpacing: 1,
	height: 22,
});
