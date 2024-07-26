/**
 * @fileOverview NotificationPanGestureScreen Component
 * @description This screen component is responsible for displaying the NotificationPanGestureScreen user interface.
 *              It serves as a container for specific components related to the NotificationPanGestureScreen functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { FlatList } from 'react-native';

import { NotificationPanGesture } from '@/components/Notification';
import { Box, Column, Text } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/state/hook';
import {
	archiveNotification,
	markAsRead,
	markAsUnread,
	selectAllNotifications,
} from '@/state/redux';

import { INotification } from 'src/core/types/INotifications';

const NotificationPanGestureScreen: React.FC = () => {
	const dispatch = useAppDispatch();
	const notifications = useAppSelector(
		selectAllNotifications
	) as INotification[];
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
			<Column bg="red" p={'$4'} gap={'$4'}>
				<Box>
					<Text>Todos</Text>
				</Box>
				<Box>
					<Text>No leído</Text>
				</Box>
				<Box>
					<Text>Archivados</Text>
				</Box>
			</Column>
			<FlatList<INotification>
				data={notifications}
				renderItem={({ item }) => {
					return (
						<NotificationPanGesture
							key={item.id}
							onPanGestureRead={() => handleSwipeRead(item.id)}
							onPanGestureUnread={() => handleSwipeUnread(item.id)}
							onPanGestureArchived={() => handleSwipeArchived(item.id)}
							{...item}
						/>
					);
				}}
				keyExtractor={(item) => item.id}
				initialNumToRender={10}
				maxToRenderPerBatch={10}
				windowSize={5}
			/>
		</Box>
	);
};
export default NotificationPanGestureScreen;
