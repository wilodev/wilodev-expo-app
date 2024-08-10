/**
 * @fileOverview Styles for Text Component
 * @description This file provides style definitions for the Text component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Text component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { Text } from 'react-native';

import { styled } from '@gluestack-style/react';

import { HeadingStyleProps } from './types';
import { Row } from '../Row';

/**
 * Retrieves the default style for Box and variants.
 */
export const RowHeadingStyle = styled(Row, {
	h: '$full',
	px: 10,
	borderLeftWidth: 0.5,
	borderLeftColor: '$black',
	borderRightWidth: 0.5,
	borderRightColor: '$gray600',
	justifyContent: 'center',
	variants: {
		isUppercase: {},
		isLowercase: {},
		isCapitalize: {},
		isActive: {
			true: {
				backgroundColor: '$secondary',
			},
		},
	},
}) as unknown as React.ComponentType<HeadingStyleProps>;

export const RowTextStyle = styled(Text, {
	fontSize: 12,
	fontWeight: 400,
	color: '$white',
	fontFamily: '$body',
	variants: {
		isActive: {
			true: {
				color: '$black',
				fontWeight: 500,
			},
		},
	},
});
