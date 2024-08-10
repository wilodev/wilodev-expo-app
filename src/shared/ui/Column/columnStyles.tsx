/**
 * @fileOverview Styles for Column Component
 * @description This file provides style definitions for the Column component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Column component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { styled } from '@gluestack-style/react';
import { Box } from '@gluestack-ui/themed';

import { ColumnProps } from './types';

/**
 */
export const ColumnStyle = styled(Box, {
	flexDirection: 'row',
}) as React.ComponentType<React.PropsWithChildren<ColumnProps>>;
