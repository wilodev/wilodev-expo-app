/**
 * @fileOverview Link Types
 * @description This file defines the TypeScript types and interfaces used by the Link component.
 *              It extends and customizes standard Link properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { Text } from '@gluestack-ui/themed';

type GLinkProps = Omit<React.ComponentProps<typeof Text>, 'ref'>;
/**
 * LinkProps interface extends the properties of React Native 's LinkProps.
 * It provides customization options for the Link component.
 */
export interface LinkProps extends GLinkProps {}
