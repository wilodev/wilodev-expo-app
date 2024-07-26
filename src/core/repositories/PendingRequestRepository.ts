/**
 * @fileOverview Pending Request Repository
 * @description This file contains the PendingRequestRepository class, which provides methods to add, retrieve,
 *              and delete queued requests in the application's local database. It uses Realm for data storage
 *              and management, ensuring that requests can be stored and processed when there is no internet connection.
 * @module core/repositories
 * @category Core
 * @component Repository
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { ulid } from 'ulidx';

import DatabaseService from '@/database/databaseService';

/**
 * Interface representing a queued request.
 */
export interface QueuedRequest {
	id: string;
	endpoint: string;
	method: string;
	data: string;
	createdAt: Date;
}

/**
 * Class representing the repository for managing pending requests.
 */
export class PendingRequestRepository {
	/**
	 * Adds a request to the queue in the local database.
	 * @param {string} endpoint - The API endpoint of the request.
	 * @param {string} method - The HTTP method of the request.
	 * @param {unknown} data - The data to be sent with the request.
	 * @returns {Promise<void>} - A promise that resolves when the request is added.
	 */
	static async addRequest(
		endpoint: string,
		method: string,
		data: unknown
	): Promise<void> {
		const request: QueuedRequest = {
			id: ulid(),
			endpoint,
			method,
			data: JSON.stringify(data),
			createdAt: new Date(),
		};

		await DatabaseService.write((realm) => {
			realm.create('PendingRequest', request);
		});
	}

	/**
	 * Retrieves all pending requests from the local database.
	 * @returns {Promise<QueuedRequest[]>} - A promise that resolves with an array of all queued requests.
	 */
	static async getAllRequests(): Promise<QueuedRequest[]> {
		return DatabaseService.read((realm) => {
			const results = realm.objects<Realm.Object & QueuedRequest>(
				'PendingRequest'
			);
			return Array.from(results);
		});
	}

	/**
	 * Deletes all requests associated with a specific endpoint from the local database.
	 * @param {string} endpoint - The API endpoint of the requests to delete.
	 * @returns {Promise<void>} - A promise that resolves when the requests are deleted.
	 */
	static async deleteRequestsByEndpoint(endpoint: string): Promise<void> {
		await DatabaseService.write((realm) => {
			const requests = realm
				.objects('PendingRequest')
				.filtered(`endpoint = "${endpoint}"`);
			realm.delete(requests);
		});
	}
}
