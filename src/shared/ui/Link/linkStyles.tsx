/**
 * @fileOverview Styles for Link Component
 * @description This file provides style definitions for the Link component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Link component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { styled } from '@gluestack-style/react';

import { Text } from '../Text';

/**
 * Retrieves the default style for Box and variants.
 */
export const LinkStyle = styled(Text, {
	variants: {
		action: {
			info: {
				color: '$infoLight',
				_dark: {
					color: '$infoDark',
				},
			},
		},
	},
	defaultProps: {
		size: 'sm',
		action: 'info',
	},
});
