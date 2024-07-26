/**
 * @fileOverview Styles for ScrollIndicator Component
 * @description This file provides style definitions for the ScrollIndicator component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the ScrollIndicator component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { styled } from '@gluestack-style/react';

import { Box } from '../Box';

/**
 * Retrieves the default style for Row and variants.
 */
export const ScrollContainerStyle = styled(Box, {
	width: 6,
	justifyContent: 'center',
	alignItems: 'center',
	left: 0,
	top: 0,
	bottom: 0,
	borderRadius: 16,
	overflow: 'hidden',
});

export const ScrollBackgroundStyle = styled(Box, {
	width: 6,
	bg: '$black',
	position: 'absolute',
	top: 0,
	right: 0,
	left: 0,
	bottom: 0,
	borderRadius: 16,
});

export const ScrollStyle = styled(Box, {
	width: 6,
	bg: '$secondary',
	position: 'absolute',
	right: 0,
	left: 0,
	borderRadius: 16,
	overflow: 'hidden',
});
