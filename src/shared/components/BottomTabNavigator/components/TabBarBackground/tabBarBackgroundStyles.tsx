/**
 * @fileOverview Styles for TabBarBackground Component
 * @description This file provides style definitions for the TabBarBackground component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the TabBarBackground component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { styled } from '@gluestack-style/react';
import { Box } from '@gluestack-ui/themed';

import { TabBarBackgroundProps } from './types';

/**
 * Retrieves the default style for TabBarBackground.
 */
export const TabBarBackgroundContainerStyle = styled(Box, {
	w: '$full',
	justifyContent: 'center',
	alignItems: 'center',
	alignSelf: 'center',
	bg: '$backgroundDark',
	_dark: {
		bg: '$backgroundDark',
	},
	variants: {
		showBorder: {
			true: {
				borderTopColor: '$borderLight',
				borderTopWidth: 1,
				_dark: {
					borderTopColor: '$borderDark',
					borderTopWidth: 1,
				},
			},
		},
	},
}) as React.ComponentType<TabBarBackgroundProps>;

export const TabBarBackgroundStyle = styled(Box, {
	h: 56,
	w: '$full',
	flexDirection: 'row',
	justifyContent: 'space-around',
	alignItems: 'center',
	mt: 0,
	'@xs': {
		top: 6,
	},
	'@sm': {
		top: 4,
	},
	'@md': {},
	variants: {
		showBorder: {
			true: {},
		},
	},
	defaultProps: {
		showBorder: 'true',
	},
}) as React.ComponentType<TabBarBackgroundProps>;
