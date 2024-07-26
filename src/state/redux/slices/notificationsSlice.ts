/**
 * @fileOverview NotificationsSlice
 * @description Slice for managing Notifications related state within the Redux store.
 *              This includes states like loading indicators, which can be used
 *              across the application to show/hide loading spinners or progress bars.
 *              The setLoading action allows for easy toggling of this state.
 *              It's part of the global state management using Redux Toolkit.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '@/state/store';

import {
	INotification,
	ENotificationStatus,
} from 'src/core/types/INotifications';

interface NotificationsState {
	notifications: INotification[];
}

const initialState: NotificationsState = {
	notifications: [
		{
			id: '',
			status: ENotificationStatus.unread,
			title: '',
			description: '',
			name: '',
			time: '',
		},
	],
};

const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		// Add all notifications
		setNotifications: (state, action: PayloadAction<NotificationsState>) => {
			state.notifications = action.payload.notifications;
		},
		// Remove all notifications
		clearNotifications: (state) => {
			state.notifications = [];
		},
		// Add a new notification
		addNotification: (state, action: PayloadAction<INotification>) => {
			state.notifications.push(action.payload);
		},
		// Remove a notification
		removeNotification: (state, action: PayloadAction<string>) => {
			const index = state.notifications.findIndex(
				(notification) => notification.id === action.payload
			);
			if (index !== -1) {
				state.notifications.splice(index, 1);
			}
		},
		// Mark a notification as read
		markAsRead: (state, action: PayloadAction<string>) => {
			const notification = state.notifications.find(
				(notification) => notification.id === action.payload
			);
			if (notification) {
				notification.status = ENotificationStatus.read;
			}
		},
		// Mark a notification as unread
		markAsUnread: (state, action: PayloadAction<string>) => {
			const notification = state.notifications.find(
				(notification) => notification.id === action.payload
			);
			if (notification) {
				notification.status = ENotificationStatus.unread;
			}
		},
		// Archive a notification
		archiveNotification: (state, action: PayloadAction<string>) => {
			const notification = state.notifications.find(
				(notification) => notification.id === action.payload
			);
			if (notification) {
				notification.status = ENotificationStatus.archived;
			}
		},
	},
});

export const {
	setNotifications,
	clearNotifications,
	addNotification,
	removeNotification,
	markAsRead,
	markAsUnread,
	archiveNotification,
} = notificationsSlice.actions;
// Return selector for all notifications
export const selectAllNotifications = (state: AppState) =>
	state.notifications.notifications;

export default notificationsSlice.reducer;
