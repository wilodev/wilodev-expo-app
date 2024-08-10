/**
 * @fileOverview API Client Utility
 * @description This module provides a client for making HTTP requests to the backend APIs.
 *              It handles network connectivity checks, token management, and request headers.
 *              The client supports GET and POST methods, including authorization via bearer tokens and API tokens.
 * @module utils/apiClient
 * @category Utilities
 * @component Utility
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { NoInternetError } from '@/errors/NoInternetError';
import { translate } from '@/locales/globalTranslation';
import { NetworkProvider } from '@/providers/index';
import { setError } from '@/state/redux';
import { store } from '@/state/store';

import {
	API_TOKEN,
	OAUTH_BASE_URL,
	APP_BASE_URL,
	OAUTH_CLIENT_ID,
	OAUTH_CLIENT_SECRET,
} from 'src/core/config/env';

import SecureStorage from '../storage/SecureStorage';

const refreshTokenEndpoint = `${OAUTH_BASE_URL}/token`;

/**
 * Fetches data from the specified URL with the provided options.
 * It checks for network connectivity and uses appropriate authorization headers.
 * @async
 * @function fetchData
 * @template T
 * @param {string} url - The URL to fetch data from.
 * @param {RequestInit} [options={}] - The options for the fetch request.
 * @param {boolean} [useApiToken=false] - Whether to use the API token for authorization.
 * @returns {Promise<T>} - A promise that resolves to the fetched data.
 * @throws {NoInternetError} - If there is no internet connection.
 * @throws {Error} - If the response is not ok.
 */
const fetchData = async <T>(
	url: string,
	options: RequestInit = {},
	useApiToken: boolean = false
): Promise<T> => {
	// Cambiado de Promise<any> a Promise<T>
	console.log('🚀 ~ file: apiClient.ts:51 ~ url:', url);
	console.log('🚀 ~ file: apiClient.ts:51 ~ options:', options);
	const state = await NetworkProvider.fetch();
	if (!state.isConnected || !state.isInternetReachable) {
		throw new NoInternetError();
	}
	const token = await SecureStorage.getItem('authToken');
	let headers = {
		...options?.headers,
		'Content-Type': 'application/json',
		...(useApiToken
			? { 'x-api-token': API_TOKEN as string }
			: { Authorization: `Bearer ${token}` }),
	};
	try {
		const response = await fetch(url, {
			body: JSON.stringify(options.body),
			headers,
			method: options.method,
		});

		if (response.ok) {
			return (await response.json()) as T;
		} else if (response.status === 400) {
			const jsonR = await response.json();
			console.log('🚀 ~ file: apiClient.ts:75 ~ jsonR:', jsonR);
			store.dispatch(
				setError({
					title: translate('errors.title'),
					message: translate('errors.badRequest'),
				})
			);
		}
		if (response.status === 401) {
			const refreshToken = await SecureStorage.getItem('refresh_token');
			if (refreshToken) {
				const refreshResponse = await fetch(refreshTokenEndpoint, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						grant_type: 'refresh_token',
						refresh_token: refreshToken,
						client_id: OAUTH_CLIENT_ID,
						client_secret: OAUTH_CLIENT_SECRET,
					}),
				});

				if (refreshResponse.ok) {
					const refreshData = await refreshResponse.json();
					const newAccessToken = refreshData.access_token;
					const newRefreshToken = refreshData.refresh_token;

					await SecureStorage.setItem('access_token', newAccessToken);
					await SecureStorage.setItem('refresh_token', newRefreshToken);

					headers = {
						...headers,
						Authorization: `Bearer ${newAccessToken}`,
					};

					// Retry the original request with the new token
					const retryResponse = await fetch(url, {
						...options,
						headers,
					});

					if (retryResponse.ok) {
						return retryResponse.json() as T; // Asegurarse de que el resultado sea del tipo T
					}
				} else {
					// If refresh fails, clear stored credentials and tokens
					await SecureStorage.removeCredentials();
					await SecureStorage.removeItem('access_token');
					await SecureStorage.removeItem('refresh_token');
					throw new Error('Refresh token failed');
				}
			}
		}
	} catch (error) {
		console.log('🚀 ~ file: apiClient.ts:117 ~ error:', error);
		throw new Error(`Failed to fetch data: ${error?.toString()}`);
	}
	return {} as T;
};

/**
 * API client for making HTTP requests.
 * Provides methods for GET and POST requests, with optional API token authorization.
 * @type {object}
 * @property {function(string, boolean=): Promise} get - Makes a GET request to the specified endpoint.
 * @property {function(string, TVariables, boolean=): Promise} post - Makes a POST request to the specified endpoint with the given data.
 * @property {function(string, TVariables): Promise} authPost - Makes a POST request to the specified OAuth endpoint with the given data, using the API token for authorization.
 */
export const apiClient = {
	/**
	 * Makes a GET request to the specified endpoint.
	 * @template T
	 * @param {string} endpoint - The API endpoint to send the GET request to.
	 * @param {boolean} [useApiToken=false] - Whether to use the API token for authorization.
	 * @returns {Promise<T>} - A promise that resolves to the fetched data.
	 */
	get: <T>(endpoint: string, useApiToken: boolean = false): Promise<T> =>
		fetchData<T>(`${APP_BASE_URL}${endpoint}`, {}, useApiToken),

	/**
	 * Makes a POST request to the specified endpoint with the given data.
	 * @template T, TVariables
	 * @param {string} endpoint - The API endpoint to send the POST request to.
	 * @param {TVariables} data - The data to send in the POST request body.
	 * @param {boolean} [useApiToken=false] - Whether to use the API token for authorization.
	 * @returns {Promise<T>} - A promise that resolves to the fetched data.
	 */
	post: <T, TVariables>(
		endpoint: string,
		data: TVariables,
		useApiToken: boolean = false
	): Promise<T> =>
		fetchData<T>(
			`${APP_BASE_URL}${endpoint}`,
			{
				method: 'POST',
				body: JSON.stringify(data),
			},
			useApiToken
		),

	/**
	 * Makes a POST request to the specified OAuth endpoint with the given data, using the API token for authorization.
	 * @template T, TVariables
	 * @param {string} endpoint - The OAuth API endpoint to send the POST request to.
	 * @param {TVariables} data - The data to send in the POST request body.
	 * @returns {Promise<T>} - A promise that resolves to the fetched data.
	 */
	authPost: <T, TVariables>(endpoint: string, data: TVariables): Promise<T> =>
		fetchData<T>(
			`${OAUTH_BASE_URL}${endpoint}`,
			{
				method: 'POST',
				body: data as unknown as BodyInit,
			},
			true
		),
};
