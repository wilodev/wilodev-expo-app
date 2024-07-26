/**
 * @fileOverview Color Utilities
 * @description Provides utility functions for manipulating and accessing color values defined in the system. These utilities help in dynamically adjusting colors based on themes, weights, and opacities, facilitating the use of consistent and reusable designs across the application.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { appConfig } from '../theme/config';
/**
 * Get a hexadecimal color code with specified opacity.
 *
 * @param {string} colorName - The name of the color group (e.g., 'primary500').
 * @param {number} opacity - The opacity percentage from 0 to 100. Defaults to 100 for full opacity.
 * @returns {string} The color in hexadecimal format with alpha channel.
 */
export function getColorWithOpacity(
	colorName: keyof typeof appConfig.tokens.colors,
	opacity: number = 100
): string {
	const baseColor = appConfig.tokens.colors[colorName];
	const alphaHex = Math.round((opacity / 100) * 255)
		.toString(16)
		.padStart(2, '0');
	return `${baseColor}${alphaHex}`;
}
