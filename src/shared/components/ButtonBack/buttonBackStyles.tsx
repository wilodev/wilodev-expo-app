/**
 * @fileOverview Styles for ButtonBack Component
 * @description This file provides style definitions for the ButtonBack component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the ButtonBack component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { styled } from '@gluestack-style/react';
import { Box } from '@gluestack-ui/themed';

import { ArrowLeftIcon } from '@/shared/ui';

/**
 * Retrieves the default style for ButtonBack and variants.
 */
export const ButtonBackStyle = styled(Box, {
	zIndex: 999,
	position: 'absolute',
	top: '-$3',
	left: '$2',
	backgroundColor: '$backgroundLight',
	borderRadius: '$full',
	borderWidth: '$1',
	borderStyle: 'solid',
	borderColor: '$borderLight',
	justifyContent: 'center',
	alignItems: 'center',
	_dark: {
		backgroundColor: '$backgroundDark',
		borderColor: '$borderDark',
	},
	'@xs': {
		mt: '$10',
		width: '$10',
		height: '$10',
	},
	'@sm': {
		mt: '$8',
		width: '$10',
		height: '$10',
	},
});

export const ButtonBackIconStyle = styled(ArrowLeftIcon, {
	'@xs': {},
	'@sm': {
		width: '$6',
		height: '$6',
	},
	_dark: {
		fill: '$white',
	},
});
