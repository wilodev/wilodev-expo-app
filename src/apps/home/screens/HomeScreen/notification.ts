import {
	ENotificationStatus,
	INotification,
} from 'src/core/types/INotifications';

export const notifications: INotification[] = [
	{
		status: ENotificationStatus.unread,
		title: 'New Message',
		description:
			'You have received a new message from John. . lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
		name: 'John Doe',
		time: '2024-06-02T13:15:00Z',
		id: '6caaf98f-2e1e-4a9f-8940-ad3cfc137bf5',
	},
	{
		status: ENotificationStatus.read,
		title: 'Project Update',
		description:
			'The project has been updated. lorem ipsum dolor sit amet. . Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
		name: 'Alice Smith',
		time: '2024-06-02T13:00:00Z',
		id: '43602192-2fbf-49c7-a726-f50fee305d4f',
	},
	{
		status: ENotificationStatus.unread,
		title: 'Meeting Reminder',
		description:
			"Don't forget about the meeting at 10 AM. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
		name: 'Bob Johnson',
		time: '2024-06-02T08:00:00Z',
		id: 'a46dbcde-3c3e-43fe-adc4-c4db2708b543',
	},
	{
		status: ENotificationStatus.read,
		title: 'New Comment',
		description: 'Someone commented on your post.',
		name: 'Chris Lee',
		time: '2024-06-01T07:45:00Z',
		id: '1dfb0d51-f087-4e45-8a1a-e258851cdc4c',
	},
	{
		status: ENotificationStatus.unread,
		title: 'Follow Request',
		description: 'You have a new follower request.',
		name: 'David Brown',
		time: '2024-06-01T07:30:00Z',
		id: 'd2ef30fb-e51a-4a5b-8bb4-766463370014',
	},
	{
		status: ENotificationStatus.read,
		title: 'System Alert',
		description: 'System maintenance scheduled for tonight.',
		name: 'System',
		time: '2024-06-01T07:00:00Z',
		id: '2383339f-5edf-43d5-b052-bd0e6701f0fc',
	},
	{
		status: ENotificationStatus.unread,
		title: 'Weekly Report',
		description: 'Your weekly report is ready.',
		name: 'Admin',
		time: '2024-06-01T06:30:00Z',
		id: '542a93e5-9104-4f7b-b84c-91220911f4a9',
	},
	{
		status: ENotificationStatus.read,
		title: 'Password Change',
		description: 'Your password was changed successfully.',
		name: 'Security',
		time: '2024-06-01T06:00:00Z',
		id: 'c510e5fa-597b-4bd2-98df-641946644a46',
	},
	{
		status: ENotificationStatus.unread,
		title: 'New Event',
		description: 'You have been invited to a new event.',
		name: 'Event Organizer',
		time: '2024-06-01T05:45:00Z',
		id: '93134bb2-9844-4985-9d0e-384208070dd5',
	},
	{
		status: ENotificationStatus.read,
		title: 'Task Assigned',
		description: 'You have been assigned a new task.',
		name: 'Project Manager',
		time: '2024-06-01T05:30:00Z',
		id: '892a1364-f5f2-4ef3-b008-06d38961f930',
	},
	{
		status: ENotificationStatus.unread,
		title: 'System Update',
		description: 'A new system update is available.',
		name: 'System',
		time: '2024-06-01T05:00:00Z',
		id: '4868a3bd-17d5-479f-a83a-35f96f162392',
	},
	{
		status: ENotificationStatus.read,
		title: 'Reminder',
		description: 'Reminder: Team meeting at 3 PM.',
		name: 'Team Lead',
		time: '2024-06-01T04:30:00Z',
		id: '793f5f59-d2fe-4544-a258-0b935926002f',
	},
	{
		status: ENotificationStatus.unread,
		title: 'Invoice Paid',
		description: 'Your invoice has been paid.',
		name: 'Billing',
		time: '2024-06-01T04:00:00Z',
		id: 'a9cbc8cc-c7f3-49be-8f59-687fbf5b569c',
	},
	{
		status: ENotificationStatus.read,
		title: 'New Friend',
		description: 'You have a new friend request.',
		name: 'Michael Green',
		time: '2024-06-01T03:30:00Z',
		id: '1ce7418a-3bd6-4bc0-a0b0-469168b2b5c2',
	},
	{
		status: ENotificationStatus.unread,
		title: 'File Uploaded',
		description: 'Your file has been uploaded successfully.',
		name: 'Uploader',
		time: '2024-06-01T03:00:00Z',
		id: '55930940-7681-4820-bc32-ce9228dda102',
	},
	{
		status: ENotificationStatus.read,
		title: 'Welcome',
		description: 'Welcome to our platform!',
		name: 'Support Team',
		time: '2024-06-01T02:30:00Z',
		id: 'e3129c27-bc30-4c98-a866-7c537249c95c',
	},
	{
		status: ENotificationStatus.unread,
		title: 'Subscription Renewed',
		description: 'Your subscription has been renewed.',
		name: 'Billing',
		time: '2024-06-01T02:00:00Z',
		id: '496d7d97-e379-4cd5-842e-f47d144a704a',
	},
	{
		status: ENotificationStatus.read,
		title: 'Update Available',
		description: 'A new update is available for download.',
		name: 'Updater',
		time: '2024-06-01T01:30:00Z',
		id: '0d97abed-fdc4-4347-877f-57caa970a840',
	},
	{
		status: ENotificationStatus.unread,
		title: 'Message Sent',
		description: 'Your message has been sent.',
		name: 'Messaging',
		time: '2024-06-01T01:00:00Z',
		id: '4c2025d0-5678-41a5-91aa-afd33ce13e32',
	},
	{
		status: ENotificationStatus.read,
		title: 'System Restart',
		description: 'The system will restart in 10 minutes.',
		name: 'System',
		time: '2024-06-01T00:30:00Z',
		id: 'd9bf21de-d21e-4127-9939-ad7b10f8c371',
	},
];
