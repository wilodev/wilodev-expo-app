/**
 * @fileOverview  NotificationPanGesture Component
 * @description This file includes the definition and functionality of the  NotificationPanGesture component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { UnreadIcon, ReadIcon, ArchivedIcon } from '@/shared/ui';

import { ENotificationStatus } from 'src/core/types/INotifications';

import Notification from './Notification';
import {
	GestureArchived,
	GestureRead,
	GestureUnread,
} from './notificationStyles';
import { NotificationPanGestureProps } from './types';
import { BoxPanGesture } from '../BoxPanGesture';

/**
 *  NotificationPanGesture component to encapsulate the functionality of app.
 * @param {NotificationPanGestureProps} props - Props for the NotificationPanGesture component.
 * @returns {JSX.Element} - The rendered NotificationPanGesture element.
 */
const NotificationPanGesture: React.FC<NotificationPanGestureProps> = ({
	onPanGestureRead,
	onPanGestureUnread,
	onPanGestureArchived,
	...props
}): React.JSX.Element => {
	const leftIcon =
		props.status === ENotificationStatus.read ? (
			<GestureUnread>
				<UnreadIcon />
			</GestureUnread>
		) : (
			<GestureRead>
				<ReadIcon />
			</GestureRead>
		);
	const rightIcon = (
		<GestureArchived>
			<ArchivedIcon fill="$black" />
		</GestureArchived>
	);
	const onPanGestureLeft =
		props.status === ENotificationStatus.read
			? onPanGestureUnread
			: onPanGestureRead;
	const onPanGestureRight =
		props.status === ENotificationStatus.read
			? onPanGestureArchived
			: undefined;

	return (
		<BoxPanGesture
			onSwipeLeft={onPanGestureLeft}
			onSwipeRight={onPanGestureRight}
			leftComponent={leftIcon}
			rightComponent={rightIcon}>
			<Notification
				isRead={props.status === ENotificationStatus.read}
				{...props}
			/>
		</BoxPanGesture>
	);
};

export default NotificationPanGesture;
