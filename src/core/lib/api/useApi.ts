/**
 * @fileOverview Custom Hooks for API Queries and Mutations
 * @description This file contains custom hooks for managing API queries and mutations
 *              using @tanstack/react-query and @react-native-community/netinfo. It handles
 *              offline scenarios by queuing requests when there is no internet connection.
 * @module core/apiHooks
 * @category Core
 * @component Hooks
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useNetInfo } from '@react-native-community/netinfo';
import {
	useQuery,
	useMutation,
	UseQueryOptions,
	UseMutationOptions,
	QueryKey,
} from '@tanstack/react-query';

import { NoInternetError } from '@/errors/NoInternetError';
import { addRequestToQueue } from '@/shared/utils/requestQueue';

import { apiClient } from './apiClient';

/**
 * Custom hook for API queries.
 * @param {QueryKey} queryKey - Unique key for the query.
 * @param {string} endpoint - API endpoint to fetch data from.
 * @param {UseQueryOptions<TQueryFnData, TError>} [options] - Optional configuration for the query.
 * @returns {UseQueryResult<TQueryFnData, TError>} - The result of the query.
 */
export const useApiQuery = <TQueryFnData, TError>(
	queryKey: QueryKey,
	endpoint: string,
	options?: UseQueryOptions<TQueryFnData, TError>
) => {
	return useQuery<TQueryFnData, TError>({
		queryKey: [queryKey],
		queryFn: async () => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const { isConnected, isInternetReachable } = useNetInfo();
			if (!isConnected || !isInternetReachable) {
				throw new NoInternetError();
			}
			return apiClient.get<TQueryFnData>(endpoint);
		},
		...options,
	});
};

/**
 * Custom hook for API mutations.
 * @param {string} endpoint - API endpoint to post data to.
 * @param {UseMutationOptions<TData, TError, TVariables>} [options] - Optional configuration for the mutation.
 * @returns {UseMutationResult<TData, TError, TVariables>} - The result of the mutation.
 */
export const useApiMutation = <TData, TError, TVariables>(
	endpoint: string,
	options?: UseMutationOptions<TData, TError, TVariables>
) => {
	return useMutation<TData, TError, TVariables>({
		mutationFn: async (variables: TVariables) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const { isConnected, isInternetReachable } = useNetInfo();
			if (!isConnected || !isInternetReachable) {
				await addRequestToQueue(endpoint, 'POST', JSON.stringify(variables));
				throw new NoInternetError();
			}
			return apiClient.post<TData, TVariables>(endpoint, variables);
		},
		...options,
	});
};
