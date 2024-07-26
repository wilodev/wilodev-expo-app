/**
 * @fileOverview PhoneInputProps Types
 * @description This file defines the TypeScript types and interfaces used by the PhoneInputProps component.
 *              It extends and customizes standard PhoneInputProps properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { BaseInputProps } from '../BaseInput/types';

/**
 * PhoneInputProps interface extends the properties of React Native 's PhoneInputProps.
 * It provides customization options for the BaseInput component.
 */
export interface PhoneInputProps
	extends Omit<
		BaseInputProps,
		| 'type'
		| 'autoCapitalize'
		| 'keyboardType'
		| 'autoComplete'
		| 'inputMode'
		| 'textContentType'
	> {
	onPressPrefix?: () => void;
	currentPrefix?: string;
}

export interface PhoneData {
	code: string;
	name: string;
	calling_code: number;
	flag_class: string;
	flag: string;
}
