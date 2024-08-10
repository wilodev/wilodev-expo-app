/**
 * @fileOverview Styles for BaseInput Component
 * @description This file provides style definitions for the BaseInput component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the BaseInput component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useColorScheme } from 'react-native';

import Animated from 'react-native-reanimated';

import { styled, Tokens, useToken } from '@gluestack-style/react';
import { Input, InputField, InputSlot } from '@gluestack-ui/themed';

import { LinearGradient, TouchableBox } from '@/shared/ui';

import { AllowedActions } from './types';

/**
 * Retrieves the default style for BaseInput.
 */
export const InputStyle = styled(Input, {
	// Base style for the Input component
	borderWidth: 1,
	borderRadius: '$md',
	px: 16,
	h: 56,
	bg: '$primaryLight',
	variants: {
		action: {
			default: {
				borderColor: '$inputBorderLight',
				bg: '$inputBackgroundLight',
				_dark: {
					borderColor: '$inputBorderDark',
					bg: '$inputBackgroundDark',
				},
			},
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
		isDisabled: {
			true: {
				opacity: 0.4,
			},
		},
		isInvalid: {
			true: {
				borderColor: '$errorLight',
				borderWidth: 2,
				_dark: {
					borderColor: '$errorDark',
				},
			},
		},
		isFocused: {
			true: { borderWidth: 2 },
		},
	},
	compoundVariants: [
		{
			action: 'default',
			isFocused: true,
			value: {
				borderColor: '$inputActiveBorderLight',
				_dark: {
					borderColor: '$inputActiveBorderDark',
					borderWidth: 2,
				},
			},
		},
		{
			action: 'primary',
			isFocused: true,
			value: {
				borderColor: '$primaryActiveLight',
				_dark: {
					borderColor: '$primaryActiveDark',
					borderWidth: 2,
				},
			},
		},
		{
			action: 'secondary',
			isFocused: true,
			value: {
				borderColor: '$secondaryActiveLight',
				_dark: {
					borderColor: '$secondaryActiveDark',
					borderWidth: 2,
				},
			},
		},
		{
			action: 'error',
			isFocused: true,
			value: {
				borderColor: '$errorActiveLight',
				_dark: {
					borderColor: '$errorActiveDark',
					borderWidth: 2,
				},
			},
		},
		{
			action: 'warning',
			isFocused: true,
			value: {
				borderColor: '$warningActiveLight',
				_dark: {
					borderColor: '$warningActiveDark',
					borderWidth: 2,
				},
			},
		},
	],
	defaultProps: {
		variant: 'outline',
		size: 'md',
	},
});

/**
 * Retrieves the style for the InputSlot component.
 */
export const InputSlotStyle = styled(InputSlot, {});

export const BoxLabel = styled(TouchableBox, {
	position: 'absolute',
	zIndex: 2,
});

export const BoxGradientLabel = styled(Animated.View, {});

export const GradientLabel = styled(LinearGradient, {
	flex: 1,
	height: 10,
	marginLeft: 16,
	marginTop: 0,
	_dark: {
		marginTop: 0,
	},
});

export const AnimatedLabel = styled(Animated.Text, {
	position: 'absolute',
	left: 14,
	paddingHorizontal: 12,
	zIndex: 2,
});

export const InputFieldStyles = styled(InputField, {
	// Base style for the Input Field component
	borderRadius: '$lg',
	px: '$2',
	variants: {
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
		},
	},
	defaultProps: {
		action: 'default',
		size: 'md',
	},
});

/**
 * Retrieves the style for the InputSlot component.
 * @param action Primary, secondary, success, error, warning, info, gray
 * @param active  rue if the input is focused
 * @returns
 */
export const useBaseInputColors = (
	action: AllowedActions = 'primary',
	active?: boolean
) => {
	const modeKey = useColorScheme() === 'dark' ? 'Dark' : 'Light';
	const activeKey = active ? 'Active' : '';

	const getToken = (
		base: string,
		action: AllowedActions,
		activeKey: string,
		modeKey: string
	) => {
		return action === 'default'
			? // eslint-disable-next-line react-hooks/rules-of-hooks
				useToken<keyof Tokens>('colors', `${base}${modeKey}`)
			: // eslint-disable-next-line react-hooks/rules-of-hooks
				useToken<keyof Tokens>('colors', `${action}${activeKey}${modeKey}`);
	};

	return {
		background: getToken('inputBackground', action, activeKey, modeKey),
		placeholderTextColor: getToken(
			'inputPlaceholder',
			action,
			activeKey,
			modeKey
		),
		iconColor: getToken('text', action, activeKey, modeKey),
	};
};
