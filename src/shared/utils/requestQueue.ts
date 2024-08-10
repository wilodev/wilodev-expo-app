/**
 * @fileOverview Add Request to Queue Utility
 * @description This module provides functions to handle offline request queueing and processing.
 *              It includes adding requests to a queue and processing them in batches.
 *              This ensures that requests are not lost when there is no internet connection.
 * @module utils/requestQueue
 * @category Utilities
 * @component Utility
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { NoInternetError } from '@/errors/NoInternetError';
import { apiClient } from '@/lib/api/apiClient';
import { PendingRequestRepository } from '@/repositories/PendingRequestRepository';

/**
 * Adds a request to the pending request queue.
 * @async
 * @function addRequestToQueue
 * @param {string} endpoint - The API endpoint for the request.
 * @param {string} method - The HTTP method (e.g., 'POST').
 * @param {string} data - The request payload as a string.
 * @returns {Promise<void>} - A promise that resolves when the request is added to the queue.
 */
export const addRequestToQueue = async (
	endpoint: string,
	method: string,
	data: string
): Promise<void> => {
	await PendingRequestRepository.addRequest(endpoint, method, data);
};

/**
 * Batches queued requests by their endpoint.
 * @async
 * @function batchDataByEndpoint
 * @returns {Promise<{ [key: string]: unknown[] }>} - An object where the keys are endpoints and the values are arrays of batched request data.
 */
const batchDataByEndpoint = async (): Promise<{ [key: string]: unknown[] }> => {
	const requests = await PendingRequestRepository.getAllRequests();
	const batchedRequests: { [key: string]: unknown[] } = {};

	requests.forEach((request) => {
		if (!batchedRequests[request.endpoint]) {
			batchedRequests[request.endpoint] = [];
		}
		batchedRequests[request.endpoint].push(JSON.parse(request.data));
	});

	return batchedRequests;
};

/**
 * Processes the queued requests by sending them to their respective endpoints in batches.
 * @async
 * @function processQueue
 * @returns {Promise<void>} - A promise that resolves when all queued requests have been processed.
 */
export const processQueue = async (): Promise<void> => {
	const batchedRequests = await batchDataByEndpoint();

	for (const endpoint in batchedRequests) {
		if (batchedRequests.hasOwnProperty(endpoint)) {
			try {
				await apiClient.post(endpoint, batchedRequests[endpoint]);
				await PendingRequestRepository.deleteRequestsByEndpoint(endpoint);
			} catch (error) {
				if (!(error instanceof NoInternetError)) {
					console.error(
						`Failed to process request queue for ${endpoint}`,
						error
					);
				}
			}
		}
	}
};
