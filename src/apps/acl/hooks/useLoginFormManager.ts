/**
 * @fileOverview useLoginFormManager Hook
 * @description Custom hook for initializing and managing the login form state.
 *              This hook abstracts the form logic from the LoginForm component,
 *              providing a cleaner interface for form state management.
 *              It utilizes useFormManager with the specific validation schema for login.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useEffect, useState } from 'react';

import { Alert } from 'react-native';

import { useColorMode } from '@/hooks/useColorMode';
import { SecureStorage } from '@/lib/storage';
import { HookOutput } from '@/sharedTypes/hook';

import { useTranslationApp } from 'src/core/locales/useTranslationApp';
import { useFormManager } from 'src/core/providers/FormManager';

import { useACLNavigation } from './useACLNavigation';
import { useAuthService } from '../services';
import { LoginFormFields } from '../types';
import {
	LoginFormActions,
	LoginFormState,
} from '../types/LoginFormStateAndActions';
import { loginValidator } from '../utils';

export const useLoginFormManager = (): HookOutput<
	LoginFormState,
	LoginFormActions
> => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		actions: { handleForgotPasswordOptions, handleRegister },
	} = useACLNavigation();
	const {
		actions: { t },
	} = useTranslationApp();
	const {
		values,
		errors,
		fieldStates,
		handleChange,
		handleBlur,
		handleSubmit,
		handleFocus,
	} = useFormManager<LoginFormFields>(
		{ email: '', password: '' },
		loginValidator
	);
	const [biometricEnabled, setBiometricEnabled] = useState<boolean>(false);
	const { isDark } = useColorMode();
	const { login, authenticateBiometric } = useAuthService();
	const faceIconFill = isDark ? '$white' : '$black';
	useEffect(() => {
		const checkCredentials = async () => {
			const credentials = await SecureStorage.getCredentials();
			if (credentials) {
				setBiometricEnabled(true);
			}
		};
		checkCredentials();
	}, []);
	// Function send to the form manager to handle the form submission
	const handleOnSubmit = async (valuesForm: LoginFormFields) => {
		setIsLoading(true);
		try {
			const response = await login(valuesForm);
			console.log(
				'🚀 ~ file: useLoginFormManager.ts:98 ~ handleOnSubmit ~ response:',
				response
			);
			// Do something with the userData, like updating the user context or redirecting
		} catch (error) {
			console.log(
				'🚀 ~ file: useLoginFormManager.ts:81 ~ handleOnSubmit ~ error:',
				error
			);
			// Handle errors, for example, showing error messages in the UI
			console.error('Login error', error); // Debug log
		} finally {
			setIsLoading(false);
		}
	};

	const handleBiometricLogin = async () => {
		const authenticated = await authenticateBiometric();
		if (authenticated) {
			// Navegar a la pantalla principal o hacer algo más después del login exitoso
		} else {
			// Mostrar mensaje de error o hacer algo más después del login fallido
			Alert.alert('Biometric authentication failed');
		}
	};

	// Empaquetar el estado y las acciones en objetos separados
	const state: LoginFormState = {
		fieldStates,
		values,
		errors,
		biometricEnabled,
		isLoading,
		faceIconFill,
	};
	const actions: LoginFormActions = {
		handleChange,
		handleBlur,
		handleFocus,
		handleSubmit,
		handleLoginSubmit: handleSubmit(handleOnSubmit),
		handleForgotPasswordOptions,
		t,
		handleRegister,
		handleBiometricLogin,
	};

	return { state, actions };
};
