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

import { Box, Column, TouchableBox } from '@/shared/ui';

/**
 * Retrieves the default style for Notification.
 */
export const NotificationColumn = styled(Column, {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
	maxWidth: '100%',
	h: 146,
	maxHeight: 146,
	overflow: 'hidden',
	position: 'relative',
	borderBottomWidth: 1,
	flexBasis: 'auto',
	flexShrink: 0,
	p: '$4',
	borderColor: '$borderLight',
	bg: '$grayActiveLight',
	_dark: {
		borderColor: '$borderDark',
		bg: '$grayActiveDark',
	},
	variants: {
		isRead: {
			true: {
				bg: '$backgroundLight',
				_dark: {
					bg: '$backgroundDark',
				},
			},
		},
	},
});

const NotificationBoxTouch = styled(TouchableBox, {
	height: '100%',
	justifyContent: 'center',
	alignItems: 'center',
	px: '$2',
	borderRightWidth: 1,
	borderRightColor: '$borderLight',
	_dark: {
		borderRightColor: '$borderDark',
	},
	minWidth: '$20',
});

export const TouchUnread = styled(NotificationBoxTouch, {
	bg: '$infoLight',
	_dark: {
		bg: '$infoDark',
	},
});

export const TouchRead = styled(NotificationBoxTouch, {
	bg: '$successLight',
	_dark: {
		bg: '$successDark',
	},
});

export const TouchArchived = styled(NotificationBoxTouch, {
	bg: '$warningLight',
	_dark: {
		bg: '$warningDark',
	},
});

export const NotificationBoxGesture = styled(Box, {
	px: '$10',
	w: '$full',
	h: '$full',
	justifyContent: 'center',
});

export const GestureUnread = styled(NotificationBoxGesture, {
	bg: '$infoLight',
	_dark: {
		bg: '$infoDark',
	},
});

export const GestureRead = styled(NotificationBoxGesture, {
	bg: '$successLight',
	_dark: {
		bg: '$successDark',
	},
});

export const GestureArchived = styled(NotificationBoxGesture, {
	bg: '$warningLight',
	zIndex: 2,
	alignItems: 'flex-end',
	_dark: {
		bg: '$warningDark',
	},
});
