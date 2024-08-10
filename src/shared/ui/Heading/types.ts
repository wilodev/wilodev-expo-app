/**
 * @fileOverview Heading Types
 * @description This file defines the TypeScript types and interfaces used by the Heading component.
 *              It extends and customizes standard Heading properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { Heading } from '@gluestack-ui/themed';

type GHeadingProps = Omit<React.ComponentProps<typeof Heading>, 'ref'>;
/**
 * HeadingProps interface extends the properties of React Native 's HeadingProps.
 * It provides customization options for the Heading component.
 */
export interface HeadingProps extends GHeadingProps {
	children: React.ReactNode;
	action?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'info'
		| 'white'
		| 'black';
	isUppercase?: boolean;
	isLowercase?: boolean;
	isCapitalize?: boolean;
	isBold?: boolean;
}
