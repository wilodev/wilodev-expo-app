/**
 * @fileOverview Styles for Heading Component
 * @description This file provides style definitions for the Heading component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Heading component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { Text } from 'react-native';

import { styled } from '@gluestack-style/react';

import { HeadingProps } from './types';

/**
 * Retrieves the default style for Box and variants.
 */
export const HeadingStyle = styled(Text, {
	fontFamily: '$heading',
	fontWeight: 700,
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
				color: '$black',
				_dark: {
					color: '$white',
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
				color: '$success',
			},
			error: {
				color: '$error',
			},
			warning: {
				color: '$warning',
			},
			info: {
				color: '$info',
			},
			white: {
				color: '$white',
			},
			black: {
				color: '$black',
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
				fontWeight: 800,
			},
			false: {
				fontWeight: 100,
			},
		},
	},
	defaultProps: {
		action: 'default',
		isBold: 'true',
	},
}) as React.ComponentType<HeadingProps>;
