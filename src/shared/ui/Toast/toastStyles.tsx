/**
 * @fileOverview Styles for Toast Component
 * @description This file provides style definitions for the Toast component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Toast component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { styled } from '@gluestack-style/react';

import { AnimateBox } from '../AnimateBox';
import { CrossSquareIcon } from '../Icons';
import { Text } from '../Text';
import { TouchableBox } from '../TouchableBox';

/**
 * Retrieves the default style for Toast.
 */
export const AnimateBoxStyle = styled(AnimateBox, {
	position: 'absolute',
	minHeight: 64,
	left: 0,
	right: 0,
	margin: 16,
	paddingHorizontal: 8,
	borderRadius: 8,
	flexDirection: 'row',
	justifyContent: 'flex-start',
	zIndex: 999,
	variants: {
		actions: {
			primary: {
				backgroundColor: '$primaryLight',
				_dark: {
					backgroundColor: '$primaryDark',
				},
			},
			secondary: {
				backgroundColor: '$secondaryLight',
				_dark: {
					backgroundColor: '$primaryDark',
				},
			},
			error: {
				backgroundColor: '$errorLight',
				_dark: {
					backgroundColor: '$errorDark',
				},
			},
		},
		placement: {
			top: {
				top: 20,
			},
			bottom: {
				bottom: 20,
			},
		},
	},
});

export const Message = styled(Text, {
	padding: 16,
	textAlignVertical: 'center',
	variants: {
		actions: {
			primary: {
				color: '$dark',
			},
			secondary: {
				color: '$white',
			},
			error: {
				color: '$white',
			},
		},
	},
});

export const Button = styled(TouchableBox, {
	position: 'absolute',
	justifyContent: 'center',
	alignItems: 'center',
	width: '$10',
	height: '$10',
	right: 0,
	top: 0,
	zIndex: 999,
});

export const CloseButtonIcon = styled(CrossSquareIcon, {
	width: 24,
	height: 24,
});
