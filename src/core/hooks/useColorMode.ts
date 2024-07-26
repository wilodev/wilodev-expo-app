/**
 * @fileOverview useColorMode Hook
 * @description This custom hook is designed to .
 *              It is part of the wilodev-app project and follows the standard hook structure,
 *              providing both state and actions for .
 *              This hook is designed to be reusable across various parts of the application.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { useColorScheme } from 'react-native';

export const useColorMode = () => {
	const colorMode = useColorScheme();
	const isDark = colorMode === 'dark';
	return { colorMode, isDark };
};
