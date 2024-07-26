/**
 * @fileOverview Styles for Text Component
 * @description This file provides style definitions for the Text component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Text component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { Text } from 'react-native';

import { styled } from '@gluestack-style/react';

import { TextProps } from './types';

/**
 * Retrieves the default style for Box and variants.
 */
export const TextStyle = styled(Text, {
	fontFamily: '$body',
	variants: {
		size: {
			xs: {
				fontSize: '$xs',
			},
			sm: {
				fontSize: '$sm',
			},
			md: {
				fontSize: '$md',
			},
			lg: {
				fontSize: '$lg',
			},
			xl: {
				fontSize: '$xl',
			},
			'2xl': {
				fontSize: '$2xl',
			},
			'3xl': {
				fontSize: '$3xl',
			},
			'4xl': {
				fontSize: '$4xl',
			},
			'5xl': {
				fontSize: '$5xl',
			},
			'6xl': {
				fontSize: '$6xl',
			},
			'7xl': {
				fontSize: '$7xl',
			},
		},
		action: {
			default: {
				color: '$textLight',
				_dark: {
					color: '$textDark',
				},
			},
			primary: {
				color: '$primaryLight',
				_dark: {
					color: '$primaryDark',
				},
			},
			secondary: {
				color: '$secondaryLight',
				_dark: {
					color: '$secondaryDark',
				},
			},
			success: {
				color: '$successLight',
				_dark: {
					color: '$successDark',
				},
			},
			error: {
				color: '$errorLight',
				_dark: {
					color: '$errorDark',
				},
			},
			warning: {
				color: '$warningLight',
				_dark: {
					color: '$warningDark',
				},
			},
			info: {
				color: '$infoLight',
				_dark: {
					color: '$infoDark',
				},
			},
			muted: {
				color: '$textMutedLight',
				_dark: {
					color: '$textMutedDark',
				},
			},
			black: {
				color: '$black',
			},
			white: {
				color: '$white',
			},
		},
		isUppercase: {
			true: {
				textTransform: 'uppercase',
			},
		},
		isLowercase: {
			true: {
				textTransform: 'lowercase',
			},
		},
		isCapitalize: {
			true: {
				textTransform: 'capitalize',
			},
		},
		isBold: {
			true: {
				fontWeight: 600,
			},
			false: {
				fontWeight: 400,
			},
		},
	},
	defaultProps: {
		size: 'md',
		action: 'default',
	},
}) as React.ComponentType<TextProps>;
