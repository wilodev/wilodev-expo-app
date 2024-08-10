/**
 * @fileOverview Query Client Configuration
 * @description Configures the QueryClient for @tanstack/react-query with optimal performance settings.
 *              This includes retry logic, cache times, and stale times for queries and mutations.
 * @module core/queryClient
 * @category Core
 * @component Configuration
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 3, // Number of retry attempts in case of error
			refetchOnWindowFocus: false, // Do not refetch data when the window regains focus
			gcTime: 1000 * 60 * 10, // Cache data for 10 minutes
			staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
			refetchOnReconnect: 'always', // Always refetch data on reconnect
			refetchOnMount: true, // Refetch data when a component mounts
			placeholderData: true, // Keep previous data while fetching new data
		},
		mutations: {
			retry: 1, // Number of retry attempts in case of error in mutations
			throwOnError: false, // Do not use error boundary for mutations
		},
	},
});
