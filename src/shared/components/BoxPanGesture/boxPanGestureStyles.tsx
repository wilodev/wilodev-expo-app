/**
 * @fileOverview Styles for Notification Component
 * @description This file provides style definitions for the Notification component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Notification component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { styled } from '@gluestack-style/react';

import { Box, AnimateBox } from '@/shared/ui';

/**
 * Retrieves the default style for Notification.
 */
export const BoxContainer = styled(Box, {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	overflow: 'hidden',
	position: 'relative',
});

const BoxGesture = styled(AnimateBox, {
	position: 'absolute',
	top: 0,
	bottom: 0,
	justifyContent: 'center',
});

export const BoxLeft = styled(BoxGesture, {
	left: 0,
	zIndex: 2,
	alignItems: 'flex-start',
	width: '$full',
	bg: '$successLight',
	_dark: {
		bg: '$successDark',
	},
});

export const BoxRight = styled(BoxGesture, {
	right: 0,
	zIndex: 1,
	flex: 1,
	width: '$full',
	alignItems: 'flex-end',
	bg: '$warningLight',
	_dark: {
		bg: '$warningDark',
	},
	opacity: 1,
});
