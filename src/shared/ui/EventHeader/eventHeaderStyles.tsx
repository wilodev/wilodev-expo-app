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
import { styled } from '@gluestack-style/react';

import { Column } from '../Column';
import { Row } from '../Row';
/**
 * Retrieves the default style for Box and variants.
 */
export const ColumnEventHeaderStyle = styled(Column, {});

export const RowEventHeaderStyle = styled(Row, {
	h: 40,
	w: 40,
	my: 2,
	rounded: '$full',
	bg: '$white',
	justifyContent: 'center',
	alignItems: 'center',
});
