/**
 * @fileOverview Styles for Horizontal Component
 * @description This file provides style definitions for the Horizontal component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Horizontal component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { styled } from '@gluestack-style/react';
import { Box } from '@gluestack-ui/themed';

import { Heading } from '../../Heading';
import { Image } from '../../Image';

/**
 * Retrieves the default style for Horizontal.
 */
export const HorizontalContainerStyle = styled(Box, {
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	alignItems: 'center',
	minWidth: 327,
	width: '$full',
	maxWidth: 396,
	height: 'auto',
	minHeight: '$32',
	padding: 8,
	margin: 0,
	overflow: 'hidden',
	borderRadius: 20,
	backgroundColor: '$cardBackgroundLight',
	_dark: {
		backgroundColor: '$cardBackgroundDark',
	},
});

export const CardImage = styled(Image, {
	width: '$32',
	height: 'auto',
	minHeight: '$32',
	borderRadius: 10,
});

export const CardContent = styled(Box, {
	position: 'relative',
	marginStart: 12,
	width: '100%',
	height: '100%',
	flex: 1,
});

export const CardTitle = styled(Heading, {
	fontSize: '$md',
	fontWeight: '$bold',
	verticalAlign: 'middle',
	color: '$black',
	_dark: {
		color: '$white',
	},
});

export const CardDescription = styled(Box, {
	width: '100%',
	flex: 1,
	marginTop: 12,
	marginBottom: 8,
});
