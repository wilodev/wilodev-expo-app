/**
 * @fileOverview useSafeAreaDimensions Hook
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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useSafeAreaDimensions() {
	const { top, bottom, left, right } = useSafeAreaInsets();
	return { top, bottom, left, right };
}
