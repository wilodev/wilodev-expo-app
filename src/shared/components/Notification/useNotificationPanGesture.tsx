/**
 * @fileOverview useNotificationPanGesture Hook
 * @description This custom hook is designed to .
 *              It is part of the wilodev-app project and follows the standard hook structure,
 *              providing both state and actions for .
 *              This hook is designed to be reusable across various parts of the application.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { Swipeable } from 'react-native-gesture-handler';

import { useTranslationApp } from '@/locales/useTranslationApp';

/**
 * NotificationPanGesture component to encapsulate use case  notification swipe.
 * @param {NotificationPanGestureProps} props - Props for the notification swipe component.
 * @returns {JSX.Element} - The rendered notification swipe element.
 */
export const useNotificationPanGesture = ({
	onSwipeRead,
	onSwipeUnread,
	onSwipeArchived,
	swipeableRef,
}: {
	onSwipeRead: () => void;
	onSwipeUnread: () => void;
	onSwipeArchived: () => void;
	swipeableRef: React.MutableRefObject<Swipeable | null>;
}) => {
	const {
		actions: { t },
	} = useTranslationApp();
	const handleSwipeRead = () => {
		onSwipeRead();
		swipeableRef.current?.close();
	};
	const handleSwipeUnread = () => {
		onSwipeUnread();
		swipeableRef.current?.close();
	};
	const handleSwipeArchived = () => {
		onSwipeArchived();
		swipeableRef.current?.close();
	};
	return {
		state: {
			swipeableRef,
		},
		actions: {
			handleSwipeRead,
			handleSwipeUnread,
			handleSwipeArchived,
			t,
		},
	};
};
