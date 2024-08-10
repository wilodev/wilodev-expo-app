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

import {
	OAUTH_CLIENT_ID,
	OAUTH_CLIENT_SECRET,
	OAUTH_GRANT_TYPE,
	OAUTH_SCOPE,
} from '@/config/env';
import { apiClient } from '@/lib/api/apiClient';
import { ReactNativeBiometricAuth } from '@/lib/biometric';
import { SecureStorage } from '@/lib/storage';
import { useAppDispatch } from '@/state/hook';
import { setAuth } from '@/state/redux';

import { LoginFormFields, LoginResponse } from '../types';
import { LoginVariables } from '../types/LoginFormStateAndActions';

/**
 * Custom hook to manage authentication services.
 * Provides functions for login, logout, and biometric authentication.
 * Utilizes react-query for state management and SecureStorage for storing credentials.
 * @returns {Object} - An object containing functions for login, logout, authenticateBiometric, and the loginMutation result.
 */
const useAuthService = () => {
	const dispatch = useAppDispatch();
	/**
	 * Perform login with provided credentials.
	 * @async
	 * @param {LoginFormFields} loginData - The login form data containing email and password.
	 * @throws Will throw an error if login fails.
	 * @returns {Promise<void>} - A promise that resolves when login is successful.
	 */
	const login = async (loginData: LoginFormFields): Promise<void> => {
		try {
			const response = await apiClient.authPost<LoginResponse, LoginVariables>(
				'/auth',
				{
					client_id: OAUTH_CLIENT_ID,
					client_secret: OAUTH_CLIENT_SECRET,
					scope: OAUTH_SCOPE,
					grant_type: OAUTH_GRANT_TYPE,
					username: loginData.email,
					password: loginData.password,
				}
			);
			if (response) {
				const { access_token, refresh_token } = response;
				console.log(
					'🚀 ~ file: useAuthService.tsx:59 ~ login ~ response:',
					response
				);
				if (access_token && refresh_token) {
					console.log(
						'🚀 ~ file: useAuthService.tsx:64 ~ login ~ access_token:',
						access_token
					);
					await SecureStorage.setCredentials(
						loginData.email,
						loginData.password
					);
					await SecureStorage.setItem('access_token', access_token);
					await SecureStorage.setItem('refresh_token', refresh_token);
					dispatch(setAuth());
					dispatch(setAuth());
				}
			}
		} catch (error) {
			throw new Error(
				error ? error.toString() : 'Login failed useAuthService.ts:87'
			) as Error;
		}
	};

	/**
	 * Perform biometric authentication.
	 * @async
	 * @returns {Promise<boolean>} - A promise that resolves to true if authentication is successful, false otherwise.
	 */
	const authenticateBiometric = async (): Promise<boolean> => {
		const biometricAuth = new ReactNativeBiometricAuth();
		const supported = await biometricAuth.isSupported();
		if (supported) {
			await biometricAuth.authenticate('Authenticate to access secure storage');
			const credentials = await SecureStorage.getCredentials();
			if (credentials) {
				await login({
					email: credentials.username,
					password: credentials.password,
				});
				return true;
			}
		}
		return false;
	};

	return {
		login,
		authenticateBiometric,
	};
};

export default useAuthService;
