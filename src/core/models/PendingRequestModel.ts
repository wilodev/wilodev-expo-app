/**
 * @fileOverview Pending Request Schema
 * @description This file defines the schema for the PendingRequest object, which represents a queued API request
 *              in the application's local database using Realm. This schema is used to store and manage pending
 *              requests when there is no internet connection, ensuring they can be processed once connectivity is restored.
 * @module core/models
 * @category Core
 * @component Schema
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import Realm from 'realm';

/**
 * Schema definition for the PendingRequest object.
 */
export const PendingRequestSchema: Realm.ObjectSchema = {
	name: 'PendingRequest',
	properties: {
		id: 'string', // Unique identifier for the request
		endpoint: 'string', // API endpoint of the request
		method: 'string', // HTTP method of the request (GET, POST, PUT, DELETE, etc.)
		data: 'string', // JSON string of the request data
		createdAt: 'date', // Timestamp of when the request was created
	},
	primaryKey: 'id', // Primary key for the schema
};
