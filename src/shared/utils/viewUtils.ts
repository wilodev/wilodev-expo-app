/**
 * @fileOverview Utility for calculating child width in a grid layout
 * @description This file contains a utility function for calculating the width of a child component
 *              based on the number of columns in a grid layout. The width is returned as a percentage string.
 * @module core/utils
 * @category Core
 * @component Utility
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { DimensionValue } from 'react-native';

/**
 * Calculates the width of a child component based on the number of columns in a grid layout.
 * @param {number} columns - The number of columns in the grid layout.
 * @returns {DimensionValue} - The calculated width as a percentage string.
 */
export const calculateChildWidth = (columns: number): DimensionValue =>
	`${100 / columns}%`;
