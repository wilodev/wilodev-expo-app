/**
 * @fileOverview useDimensions Hook
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
import { useWindowDimensions } from 'react-native';

/**
 * Dimensions component to encapsulate use case  dimensions.
 * @param {DimensionsProps} props - Props for the dimensions component.
 * @returns {JSX.Element} - The rendered dimensions element.
 */
export const useDimensions = () => {
	const { width, height } = useWindowDimensions();
	return { width, height };
};
