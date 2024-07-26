/**
 * @fileOverview Theme Helpers
 * @description This file contains various helper functions for theme management in the application.
 *              It includes functions for accessing theme colors, getting safe area styles, and other
 *              theme-related utilities. These helpers facilitate consistent theme and styling
 *              across the application.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useColorScheme } from 'react-native';

import { Tokens, useToken } from '@gluestack-style/react';

import { ThemeConfig } from '../theme';
import { IColorTheme } from '../types';

/**
 * Custom hook to access theme colors based on the current color scheme (light/dark).
 * It returns a set of color properties like background, primary, secondary, etc.
 * The hook also supports custom weight for colors in both light and dark modes.
 *
 * @param {ColorConfig} [config={}] - Optional configuration for custom color variants.
 * @returns {IColorTheme} Object containing color properties.
 */
export const useThemeColors = (): IColorTheme => {
	const isDark = useColorScheme() === 'dark';
	const getToken = (color: keyof ThemeConfig['tokens']['colors']) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		return useToken<keyof Tokens>('colors', color);
	};
	return {
		backgroundColor: getToken(isDark ? 'backgroundDark' : 'backgroundLight'),
		primaryColor: getToken(isDark ? 'primaryDark' : 'primaryLight'),
		secondaryColor: getToken(isDark ? 'secondaryDark' : 'secondaryLight'),
		successColor: getToken('successLight'),
		errorColor: getToken('errorLight'),
		warningColor: getToken('warningLight'),
		infoColor: getToken('infoLight'),
		isDark,
	};
};
