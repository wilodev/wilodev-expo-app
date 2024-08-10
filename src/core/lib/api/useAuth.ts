/**
 * @fileOverview Custom Hook for Authentication Mutations
 * @description This file contains a custom hook for managing authentication mutations
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
 */

import { useNetInfo } from '@react-native-community/netinfo';
import {
	MutationFunction,
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from '@tanstack/react-query';

import { NoInternetError } from '@/errors/NoInternetError';
import { addRequestToQueue } from '@/shared/utils/requestQueue';

import { apiClient } from './apiClient';

/**
 * Custom hook for handling authentication mutations.
 * @template TVariables - The type of the variables required for the authentication request.
 * @template TResponse - The type of the response returned by the authentication request.
 * @param {string} endpoint - The API endpoint for authentication.
 * @param {UseMutationOptions<TResponse, Error, TVariables>} [options] - Optional configuration for the mutation.
 * @returns {UseMutationResult<TResponse, Error, TVariables>} - The result of the mutation.
 */
export const useAuthMutation = <TVariables, TResponse>(
	endpoint: string,
	options?: UseMutationOptions<TResponse, Error, TVariables>
): UseMutationResult<TResponse, Error, TVariables> => {
	return useMutation<TResponse, Error, TVariables>({
		mutationFn: async (variables: TVariables) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const { isConnected, isInternetReachable } = useNetInfo();
			if (!isConnected || !isInternetReachable) {
				await addRequestToQueue(endpoint, 'POST', JSON.stringify(variables));
				throw new NoInternetError();
			}
			const response = await apiClient.authPost<TResponse, TVariables>(
				endpoint,
				variables
			);
			console.log('API response', response); // Debug log
			return response;
		},
		...options,
	});
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface UseAuthMutationOptions<TData, TVariables, _TError> {
	mutationFn: MutationFunction<TData, TVariables>;
}

export function useAppMutation<TData, TVariables, _TError = unknown>(
	options: UseAuthMutationOptions<TData, TVariables, _TError>
): UseMutationResult<TData, _TError, TVariables> {
	return useMutation(options);
}
