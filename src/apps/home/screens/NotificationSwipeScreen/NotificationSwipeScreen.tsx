/**
 * @fileOverview NotificationSwipeScreen Component
 * @description This screen component is responsible for displaying the NotificationSwipeScreen user interface.
 *              It serves as a container for specific components related to the NotificationSwipeScreen functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React, { useState } from 'react';

import { FlatList } from 'react-native';

import { Swipeable } from 'react-native-gesture-handler';

import { NotificationSwipe } from '@/components/Notification';
import { Box } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/state/hook';
import {
	archiveNotification,
	markAsRead,
	markAsUnread,
	selectAllNotifications,
} from '@/state/redux';

import { INotification } from 'src/core/types/INotifications';

const NotificationSwipeScreen: React.FC = () => {
	const [openSwipeable, setOpenSwipeable] = useState<Swipeable | null>(null);
	const dispatch = useAppDispatch();
	const notifications = useAppSelector(
		selectAllNotifications
	) as INotification[];
	const handleOpen = (ref: Swipeable | null) => {
		if (openSwipeable && openSwipeable !== ref) {
			openSwipeable.close();
		}
		setOpenSwipeable(ref);
	};

	const handleSwipeRead = (id: string) => {
		dispatch(markAsRead(id));
	};

	const handleSwipeUnread = (id: string) => {
		dispatch(markAsUnread(id));
	};

	const handleSwipeArchived = (id: string) => {
		dispatch(archiveNotification(id));
	};

	return (
		<Box>
			{notifications.length > 0 && (
				<FlatList<INotification>
					data={notifications}
					renderItem={({ item }) => {
						return (
							<NotificationSwipe
								key={item.id}
								onSwipeRead={() => handleSwipeRead(item.id)}
								onSwipeUnread={() => handleSwipeUnread(item.id)}
								onSwipeArchived={() => handleSwipeArchived(item.id)}
								onOpen={handleOpen}
								{...item}
							/>
						);
					}}
					keyExtractor={(item) => item.id}
					initialNumToRender={10}
					maxToRenderPerBatch={10}
					windowSize={5}
				/>
			)}
		</Box>
	);
};
export default NotificationSwipeScreen;
