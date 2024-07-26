/**
 * @fileOverview Styles for HeaderTopBarBackground Component
 * @description This file provides style definitions for the HeaderTopBarBackground component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the HeaderTopBarBackground component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { styled } from '@gluestack-style/react';
import { Box } from '@gluestack-ui/themed';

import { HeaderTopBarBackgroundProps } from './types';

/**
 * Retrieves the default style for HeaderTopBarBackground.
 */
export const HeaderTopBarBackgroundContainerStyle = styled(Box, {
	w: '$full',
	justifyContent: 'center',
	alignItems: 'center',
	alignSelf: 'center',
	bg: '$white',
	_dark: {
		bg: '$background900',
	},
	'@xs': {},
	'@sm': {},
	'@md': {},
	variants: {
		showBorder: {
			true: {
				borderBottomColor: '$borderLight',
				borderBottomWidth: 0.5,
				_dark: {
					borderBottomColor: '$borderDark',
				},
			},
		},
	},
}) as React.ComponentType<HeaderTopBarBackgroundProps>;

export const HeaderTopBarBackgroundStyle = styled(Box, {
	mt: 48,
	h: '$12',
	w: '$full',
	px: '$4',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	'@xs': {
		top: 0,
	},
	'@sm': {
		top: 0,
	},
	'@md': {},
	variants: {
		showBorder: {
			true: {
				borderBottomColor: '$borderLight',
				borderBottomWidth: 0.5,
				_dark: {
					borderBottomColor: '$borderDark',
					borderBottomWidth: 0.5,
				},
			},
		},
	},
}) as React.ComponentType<HeaderTopBarBackgroundProps>;
