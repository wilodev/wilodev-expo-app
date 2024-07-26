/**
 * @fileOverview Styles for Card Component
 * @description This file provides style definitions for the Card component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Card component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { styled } from '@gluestack-style/react';

import { Box } from '../../Box';
import { Heading } from '../../Heading';
import { ImageBackground } from '../../ImageBackground';
import { Row } from '../../Row';
import { Text } from '../../Text';

/**
 * Retrieves the default style for Card and variants.
 */
export const VerticalContainerStyle = styled(Row, {
	width: '$full',
	height: 326,
	borderBottomWidth: '$4',
	borderBottomColor: '$successLight',
	backgroundColor: '$cardBackgroundLight',
	_dark: {
		borderBottomColor: '$successDark',
		backgroundColor: '$cardBackgroundDark',
	},
});

export const VerticalHeaderStyle = styled(Box, {
	width: '$full',
	height: 226,
	position: 'relative',
});

export const VerticalHeaderImageStyle = styled(ImageBackground, {
	width: '$full',
	height: '$full',
});

export const VerticalHeaderOverlayStyle = styled(Box, {
	width: '$full',
	height: '$full',
	backgroundColor: '$black',
	opacity: 0.6,
	position: 'absolute',
	top: 0,
	left: 0,
});

export const VerticalHeaderContentStyle = styled(Row, {
	width: '$full',
	position: 'absolute',
	bottom: '$3',
	px: '$4',
});

export const VerticalHeaderHeadingStyle = styled(Heading, {
	fontSize: '$2xl',
	color: 'white',
});

export const VerticalHeaderTextStyle = styled(Text, {
	fontSize: '$sm',
	color: 'white',
});

export const VerticalContentStyle = styled(Row, {
	width: '$full',
	p: '$4',
	flex: 1,
	backgroundColor: '$cardBackgroundLight',
	_dark: {
		backgroundColor: '$cardBackgroundDark',
	},
});
