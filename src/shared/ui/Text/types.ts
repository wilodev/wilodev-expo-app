/**
 * @fileOverview Text Types
 * @description This file defines the TypeScript types and interfaces used by the Text component.
 *              It extends and customizes standard Text properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { Text } from '@gluestack-ui/themed';

type GTextProps = Omit<React.ComponentProps<typeof Text>, 'ref'>;
/**
 * TextProps interface extends the properties of React Native 's TextProps.
 * It provides customization options for the Text component.
 */
export interface TextProps extends GTextProps {
	action?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'warning'
		| 'info'
		| 'muted'
		| 'white'
		| 'black';
	isUppercase?: boolean;
	isLowercase?: boolean;
	isCapitalize?: boolean;
	isBold?: boolean;
}
