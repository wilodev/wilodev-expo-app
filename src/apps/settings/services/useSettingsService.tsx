/**
 * @fileOverview AuthService Hook
 * @description Provides functions for handling authentication-related actions such as login, logout, and biometric authentication.
 *              Utilizes react-query for state management and ensures secure storage of credentials.
 * @module core/services
 * @category Core
 * @component Hook
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { SecureStorage } from '@/lib/storage';
import { useAppDispatch } from '@/state/hook';
import { clearAuth } from '@/state/redux';

/**
 * Custom hook to manage authentication services.
 * Provides functions for login, logout, and biometric authentication.
 * Utilizes react-query for state management and SecureStorage for storing credentials.
 * @returns {Object} - An object containing functions for login, logout, authenticateBiometric, and the loginMutation result.
 */
const useSettingsService = () => {
	const dispatch = useAppDispatch();
	/**
	 * Perform logout and clear stored credentials and tokens.
	 * @async
	 * @returns {Promise<void>} - A promise that resolves when logout is complete.
	 */
	const logout = async (): Promise<void> => {
		await SecureStorage.removeItem('access_token');
		await SecureStorage.removeItem('refresh_token');
		dispatch(clearAuth());
	};

	return {
		logout,
	};
};

export default useSettingsService;
