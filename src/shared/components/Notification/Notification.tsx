/**
 * @fileOverview Notification Component
 * @description This file includes the definition and functionality of the Notification component.
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

import { Avatar, Heading, Row, Text } from '@/shared/ui';
import { formatNotificationDate } from '@/shared/utils/dateFormatter';
import { Box } from '@/ui/Box';

import { NotificationColumn } from './notificationStyles';
import { NotificationProps } from './types';

/**
 * Notification component to encapsulate the functionality of app.
 * @param {NotificationProps} props - Props for the notification component.
 * @returns {JSX.Element} - The rendered notification element.
 */
const Notification: React.FC<NotificationProps> = ({
	isRead,
	title,
	description,
	name,
	time,
}): React.JSX.Element => {
	return (
		<NotificationColumn isRead={isRead}>
			<Box w={'$10'} mr={'$4'} justifyContent="center" alignItems="center">
				<Avatar w={'$10'} h={'$10'} alt={name} text={name} />
			</Box>
			<Row flex={1}>
				<Box w={'$full'} mb={'$2'}>
					<Heading size="xl" isBold={!isRead}>
						{title}
					</Heading>
				</Box>
				<Box w={'$full'} overflow="hidden">
					<Text size="sm" isTruncated numberOfLines={3} isBold={!isRead}>
						{description}
					</Text>
				</Box>
			</Row>
			<Box w={56} ml={'$2'}>
				<Text size="xs" isBold={!isRead}>
					{formatNotificationDate(time)}
				</Text>
			</Box>
		</NotificationColumn>
	);
};

export default Notification;
