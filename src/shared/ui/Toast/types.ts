/**
 * @fileOverview Toast Types
 * @description This file defines the TypeScript types and interfaces used by the Toast component.
 *              It extends and customizes standard Toast properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

/**
 * ToastProps interface extends the properties of React Native 's ToastProps.
 * It provides customization options for the Toast component.
 */
export interface ToastProps {
	id: string;
	message: string;
	placement?: 'top' | 'bottom';
	isVisible: boolean;
	onClose: () => void;
	actions: 'primary' | 'secondary' | 'error';
	duration?: number;
}
