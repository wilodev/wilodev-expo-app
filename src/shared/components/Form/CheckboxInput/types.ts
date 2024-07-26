/**
 * @fileOverview CheckboxInput Types
 * @description This file defines the TypeScript types and interfaces used by the Checkbox component.
 *              It extends and customizes standard Checkbox properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { Checkbox } from '@gluestack-ui/themed';

type GCheckbox = Omit<React.ComponentProps<typeof Checkbox>, 'children'>;
/**
 * CheckboxInputProps interface extends the properties of React Native 's CheckboxInputProps.
 * It provides customization options for the Checkbox component.
 */
export interface CheckboxInputProps extends GCheckbox {
	children: React.ReactNode;
	label?: string;
	onChangeCheck: (value: string) => void;
	error?: string;
}
