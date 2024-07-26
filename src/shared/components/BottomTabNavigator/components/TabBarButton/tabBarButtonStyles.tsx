/**
 * @fileOverview Styles for TabBarButton Component
 * @description This file provides style definitions for the TabBarButton component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the TabBarButton component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { styled } from '@gluestack-style/react';
import { Box } from '@gluestack-ui/themed';

import { Heading } from '@/shared/ui';

import { TabBarTextProps } from './types';

/**
 * Retrieves the default style for TabBarButton.
 */
export const TabBarBoxStyle = styled(Box, {
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	height: '100%',
	width: 90,
	pt: '$1',
});

export const TabBarLabelStyle = styled(Heading, {
	marginTop: '$1',
	marginLeft: '$1',
	fontSize: 10,
	color: '$textDark',
	variants: {
		isFocused: {
			true: {
				color: '$primaryDark',
			},
		},
	},
	defaultProps: {
		size: 'xs',
	},
}) as React.ComponentType<TabBarTextProps>;
