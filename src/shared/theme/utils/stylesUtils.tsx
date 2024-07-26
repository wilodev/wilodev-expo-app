/**
 * @fileOverview Custom Component Styles
 * @description This file contains style definitions for various components used in the application
 *              which are not directly tied to Gluestack components. It includes styles for React Navigation elements,
 *              SafeAreaView, and other non-Gluestack components. These styles help maintain consistency
 *              and theme across the application.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { EdgeInsets } from 'react-native-safe-area-context';
/**
 * Generates styles for SafeAreaView based on the current theme.
 *
 * @returns {object} A StyleSheet object containing styles for SafeAreaView.
 *
 * @example
 * const safeAreaStyles = getSafeAreaViewStyles(isDark);
 * <SafeAreaView style={safeAreaStyles.safeArea} />
 */
export const getSafeAreaViewStyles = (
	isDark: boolean,
	insets: EdgeInsets
): StyleProp<ViewStyle> => {
	return {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: 'transparent',
		marginTop: -insets?.top,
		marginBottom: -insets?.bottom,
		marginLeft: -insets?.left,
		marginRight: -insets?.right,
		zIndex: 2,
	};
};

/**
 * Generates styles for SafeAreaProvider based on the current theme.
 *
 * @returns {object} A StyleSheet object containing styles for SafeAreaProvider.
 *
 * @example
 * const safeAreaStyles = getSafeAreaProviderStyles(isDark);
 * <SafeAreaProvider style={safeAreaStyles.safeArea} />
 */
export const getSafeAreaProviderStyles = (
	isDark: boolean
): StyleProp<ViewStyle> => {
	return {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: isDark ? 'black' : 'white',
	};
};

/**
 * Generates styles for the header title in React Navigation.
 *
 * @returns {TextStyle} A style object for the header title.
 *
 * @example
 * const headerTitleStyle = getHeaderTitleStyle(isDark);
 * <Stack.Screen options={{ headerTitleStyle }} />
 */
export const getHeaderTitleStyle = (
	isDark: boolean
): StyleProp<
	Pick<TextStyle, 'fontFamily' | 'fontSize' | 'fontWeight'> & {
		color?: string | undefined;
	}
> => {
	return {
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'Poppins',
		color: isDark ? 'current' : undefined,
	};
};
