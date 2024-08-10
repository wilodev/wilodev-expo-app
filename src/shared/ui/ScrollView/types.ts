/**
 * @fileOverview ScrollView Types
 * @description This file defines the TypeScript types and interfaces used by the ScrollView component.
 *              It extends and customizes standard ScrollView properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { ScrollView } from '@gluestack-ui/themed';

type GScrollView = React.ComponentProps<typeof ScrollView>;
/**
 * ScrollViewProps interface extends the properties of React Native 's ScrollViewProps.
 * It provides customization options for the ScrollView component.
 */
export interface ScrollViewProps extends GScrollView {}
