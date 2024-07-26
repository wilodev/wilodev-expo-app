/**
 * @fileOverview Styles for AbsoluteBox Component
 * @description This file provides style definitions for the AbsoluteBox component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the AbsoluteBox component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { styled } from '@gluestack-style/react';
import { Box } from '@gluestack-ui/themed';

/**
 * Retrieves the default style for AbsoluteBox and variants.
 */
export const AbsoluteBoxStyle = styled(Box, {
	position: 'absolute',
	justifyContent: 'center',
	alignItems: 'center',
	zIndex: 1,
	variants: {
		isTop: {
			true: {
				top: 0,
			},
		},
		isBottom: {
			true: {
				bottom: 0,
			},
		},
		isLeft: {
			true: {
				left: 0,
			},
		},
		isRight: {
			true: {
				right: 0,
			},
		},
	},
});
