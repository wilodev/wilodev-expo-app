export enum ENotificationStatus {
	read = 'read',
	unread = 'unread',
	archived = 'archived',
}
export interface INotification {
	id: string;
	status: ENotificationStatus;
	title: string;
	description: string;
	name: string;
	time: string;
}
