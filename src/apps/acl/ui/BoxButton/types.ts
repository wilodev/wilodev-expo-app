/**
 * @fileOverview BoxBaseLayout Types
 * @description This file defines the TypeScript types and interfaces used by the BoxBaseLayout component.
 *              It extends and customizes standard BoxBaseLayout properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

/**
 * BoxBaseLayoutProps interface extends the properties of React Native's BoxBaseLayoutProps.
 * It provides customization options for the BoxBaseLayout component.
 */
export interface BoxBaseLayoutProps {
	children: React.ReactNode;
}
