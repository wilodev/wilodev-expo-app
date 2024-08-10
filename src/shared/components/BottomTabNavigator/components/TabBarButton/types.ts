/**
 * @fileOverview TabBarButton Types
 * @description This file defines the TypeScript types and interfaces used by the TabBarButton component.
 *              It extends and customizes standard TabBarButton properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

import { MainTabParamList } from '@/navigation/Authenticated/MainTabNavigator/MainTabNavigator';
import { Text } from '@/shared/ui';

type RNBottomTabBarButtonProps = Omit<BottomTabBarButtonProps, 'children'>;
type GText = React.ComponentProps<typeof Text>;

/**
 * TabBarButtonProps interface extends the properties of React Native 's TabBarButtonProps.
 * It provides customization options for the TabBarButton component.
 */
export interface TabBarButtonProps extends RNBottomTabBarButtonProps {
	route: RouteProp<MainTabParamList, keyof MainTabParamList>;
	label: string;
	totalNotifications: number;
}

export interface TabBarTextProps extends GText {
	isFocused: boolean;
}
