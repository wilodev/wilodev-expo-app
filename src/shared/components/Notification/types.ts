/**
 * @fileOverview Notification Types
 * @description This file defines the TypeScript types and interfaces used by the Notification component.
 *              It extends and customizes standard Notification properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { Swipeable } from 'react-native-gesture-handler';

import { ENotificationStatus } from 'src/core/types/INotifications';

/**
 * NotificationProps interface extends the properties of React Native 's NotificationProps.
 * It provides customization options for the Notification component.
 */
export interface NotificationProps {
	id: string;
	title: string;
	description: string;
	name: string;
	time: string;
	status: ENotificationStatus;
	isRead?: boolean;
}

export interface NotificationSwipeProps extends NotificationProps {
	onSwipeRead: (id: string) => void;
	onSwipeUnread: (id: string) => void;
	onSwipeArchived: (id: string) => void;
	onOpen: (ref: Swipeable | null) => void;
}

export interface NotificationPanGestureProps extends NotificationProps {
	onPanGestureRead: () => void;
	onPanGestureUnread: () => void;
	onPanGestureArchived: () => void;
}
