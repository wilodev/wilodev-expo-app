/**
 * @fileOverview Styles for SafeArea Component
 * @description This file provides style definitions for the SafeArea component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the SafeArea component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { styled } from '@gluestack-style/react';
import { StatusBar as RNStatusBar } from 'expo-status-bar';

/**
 * Retrieves the default style for SafeArea and variants.
 */
export const StatusBar = styled(RNStatusBar, {
	_dark: {
		props: {
			backgroundColor: '$black',
			style: 'light',
		},
	},
	_light: {
		props: {
			backgroundColor: '$white',
			style: 'dark',
		},
	},
});
