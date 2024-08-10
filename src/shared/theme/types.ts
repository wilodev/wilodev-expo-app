/**
 * @fileOverview Theme Types
 * @description Defines various type definitions used in theme configuration.
 *              Includes definitions for color names, color weights, size variants, and text variants.
 *              These types are essential for maintaining a consistent styling and theming approach throughout the app.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export interface IColorTheme {
	backgroundColor: string;
	primaryColor: string;
	secondaryColor: string;
	errorColor: string;
	warningColor: string;
	infoColor: string;
	successColor: string;
	isDark: boolean;
}
