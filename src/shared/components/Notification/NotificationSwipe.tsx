/**
 * @fileOverview  NotificationSwipe Component
 * @description This file includes the definition and functionality of the  NotificationSwipe component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @autor Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { useRef } from 'react';

import { Swipeable } from 'react-native-gesture-handler';

import { Column, UnreadIcon, ReadIcon, Text, ArchivedIcon } from '@/shared/ui';

import { ENotificationStatus } from 'src/core/types/INotifications';

import Notification from './Notification';
import { TouchArchived, TouchRead, TouchUnread } from './notificationStyles';
import { NotificationSwipeProps } from './types';
import { useNotificationSwipe } from './useNotificationSwipe';
import { BoxSwipe } from '../BoxSwipe';

/**
 *  NotificationSwipe component to encapsulate the functionality of app.
 * @param {NotificationSwipeProps} props - Props for the NotificationSwipe component.
 * @returns {JSX.Element} - The rendered NotificationSwipe element.
 */
const NotificationSwipe: React.FC<NotificationSwipeProps> = ({
	status,
	onSwipeRead,
	onSwipeUnread,
	onSwipeArchived,
	onOpen,
	...props
}): React.JSX.Element => {
	const swipeableRef = useRef<Swipeable | null>(null);

	const {
		actions: { handleSwipeRead, handleSwipeUnread, handleSwipeArchived, t },
	} = useNotificationSwipe({
		onSwipeRead,
		onSwipeUnread,
		onSwipeArchived,
		swipeableRef,
	});
	const renderLeftActions = () => {
		return (
			<Column>
				{status === ENotificationStatus.read ? (
					<>
						<TouchUnread onPress={() => handleSwipeRead(props.id)}>
							<UnreadIcon fill="$white" stroke="$white" mb={'$2'} />
							<Text action="white">{t('notifications.unread')}</Text>
						</TouchUnread>
						<TouchArchived onPress={() => handleSwipeArchived(props.id)}>
							<ArchivedIcon fill="$black" stroke="$black" mb={'$2'} />
							<Text action="black">{t('notifications.archived')}</Text>
						</TouchArchived>
					</>
				) : (
					<>
						<TouchRead onPress={() => handleSwipeUnread(props.id)}>
							<ReadIcon fill="$white" stroke="$white" mb={'$2'} />
							<Text action="white">{t('notifications.read')}</Text>
						</TouchRead>
					</>
				)}
			</Column>
		);
	};

	return (
		<BoxSwipe
			renderLeftActions={renderLeftActions}
			ref={swipeableRef}
			onOpen={() => onOpen(swipeableRef.current)}>
			<Notification
				status={status}
				isRead={status === ENotificationStatus.read ? true : false}
				{...props}
			/>
		</BoxSwipe>
	);
};

export default NotificationSwipe;
