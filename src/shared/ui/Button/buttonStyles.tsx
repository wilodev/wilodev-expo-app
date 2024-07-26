/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @fileOverview Styles for Button Component
 * @description This file provides style definitions for the Button component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Button component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { useColorScheme } from 'react-native';

import { styled, Tokens, useToken } from '@gluestack-style/react';
import { Button, ButtonText } from '@gluestack-ui/themed';

import { ButtonProps, GButtonText } from './types';

/**
 * Retrieves the default style for Box and variants.
 */
export const ButtonStyle = styled(Button, {
	borderRadius: '$md',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'center',
	height: 'auto',
	variants: {
		action: {
			primary: {
				bg: '$primaryLight',
				borderColor: '$primaryLight',
				_dark: {
					bg: '$primaryDark',
					borderColor: '$primaryDark',
				},
			},
			secondary: {
				bg: '$secondaryLight',
				borderColor: '$secondaryLight',
				_dark: {
					bg: '$secondaryDark',
					borderColor: '$secondaryDark',
				},
			},
			success: {
				bg: '$successLight',
				borderColor: '$successLight',
				_dark: {
					bg: '$successDark',
					borderColor: '$successDark',
				},
			},
			error: {
				bg: '$errorLight',
				borderColor: '$errorLight',
				_dark: {
					bg: '$errorDark',
					borderColor: '$errorDark',
				},
			},
			warning: {
				bg: '$warningLight',
				borderColor: '$warningLight',
				_dark: {
					bg: '$warningDark',
					borderColor: '$warningDark',
				},
			},
		},
		variant: {
			outline: {
				borderWidth: 1,
				borderStyle: 'solid',
				bg: 'transparent',
				_dark: {
					bg: 'transparent',
				},
			},
			link: {
				borderWidth: 0,
				bg: 'transparent',
				borderColor: 'transparent',
				_dark: {
					bg: 'transparent',
					borderColor: 'transparent',
				},
			},
		},
		isDisabled: {
			true: {
				opacity: 0.4,
				borderWidth: 2,
				bg: 'transparent',
			},
		},
		isLoading: {
			true: {
				opacity: 0.8,
			},
		},
		size: {
			sm: {
				py: 10,
				px: 12,
			},
			md: {
				py: 12,
				px: 20,
			},
			lg: {
				py: 16,
				px: 24,
			},
		},
	},
	defaultProps: {
		size: 'md',
		action: 'primary',
	},
}) as React.ComponentType<ButtonProps>;

export const ButtonTextStyle = styled(ButtonText, {
	textAlign: 'center',
	fontFamily: '$Heading',
	fontWeight: 'bold',
	letterSpacing: 0.5,
	backgroundColor: 'transparent',
	variants: {
		action: {
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
		},
		variant: {
			solid: {
				color: '$white',
				_dark: {
					color: '$white',
				},
			},
		},
		isDisabled: {
			true: {
				opacity: 0.4,
			},
		},
	},
	compoundVariants: [
		{
			action: 'primary',
			variant: 'solid',
			value: {
				color: '$textLight',
				_dark: {
					color: '$black',
				},
			},
		},
		{
			action: 'secondary',
			variant: 'solid',
			value: {
				color: '$white',
			},
		},
		{
			action: 'success',
			variant: 'solid',
			isDisabled: false,
			value: {
				color: '$white',
			},
		},
		{
			action: 'success',
			variant: 'solid',
			isDisabled: true,
			value: {
				color: '$textLight',
				_dark: {
					color: '$white',
				},
			},
		},
	],
}) as React.ComponentType<GButtonText>;

export const useButtonIconColor = (
	action: string = 'primary',
	variant: string = 'solid'
) => {
	const modeKey = useColorScheme() === 'dark' ? 'Dark' : 'Light';
	let defaultColor = '';
	if (variant === 'solid') {
		if (action === 'primary') {
			defaultColor = useToken<keyof Tokens>('colors', `icon${modeKey}`);
		} else if (action === 'success') {
			defaultColor = useToken<keyof Tokens>(
				'colors',
				`${action}Icon${modeKey}`
			);
		} else {
			defaultColor = useToken<keyof Tokens>('colors', `white`);
		}
	} else {
		defaultColor = useToken<keyof Tokens>('colors', `${action}${modeKey}`);
	}

	return defaultColor;
};
