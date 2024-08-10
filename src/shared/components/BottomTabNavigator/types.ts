/**
 * @fileOverview BottomTabNavigator Types
 * @description This file defines the TypeScript types and interfaces used by the BottomTabNavigator component.
 *              It extends and customizes standard BottomTabNavigator properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';

/**
 * BottomTabNavigatorProps interface extends the properties of React Native 's BottomTabNavigatorProps.
 * It provides customization options for the BottomTabNavigator component.
 */
export interface BottomTabNavigatorProps extends BottomTabBarProps {
	showBorder?: boolean;
	totalNotifications: number;
}

export interface BottomTabNavigatorState {
	bottomTabNavigatorWidth: number;
	tabButtonWidth: number;
	translateAnimation: {
		transform: {
			translateX: number;
		}[];
	};
}

export interface RouteType
	extends RouteProp<ParamListBase, keyof ParamListBase> {}
