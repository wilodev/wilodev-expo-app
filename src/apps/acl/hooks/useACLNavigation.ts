/**
 * @fileOverview useACLNavigation Hook
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

import { useAuthNavigation } from '@/navigation/hooks';
import { HookOutput } from '@/sharedTypes/hook';

import { useTranslationApp } from 'src/core/locales/useTranslationApp';

import { ACLNavigationActions } from '../types/ACLNavigation';

export const useACLNavigation = (
	resetOnBack: boolean = false
): HookOutput<object, ACLNavigationActions> => {
	const navigation = useAuthNavigation();
	const {
		actions: { t },
	} = useTranslationApp();
	const state = {};
	const actions = {
		handleForgotPassword: () => {
			navigation.navigate('ForgotPasswordScreen');
		},
		handleForgotPasswordOptions: () => {
			navigation.navigate('ForgotPasswordOptionsScreen');
		},
		handleForgotPasswordWhatsApp: () => {
			navigation.navigate('ForgotPasswordWhatsAppScreen', {});
		},
		handleRegister: () => {
			navigation.navigate('RegisterScreen', {});
		},
		handleLogin: () => {
			navigation.navigate('LoginScreen');
		},
		handlePhone: (value: string, origin: string) => {
			navigation.navigate('CountryPhonePrefixScreen', {
				currentPrefix: value,
				originScreen: origin,
			});
		},
		handleTermsAndConditions: () => {
			navigation.navigate('TermsAndConditionsScreen');
		},
		handleBack: () => {
			if (resetOnBack) {
				navigation.reset({
					index: 0,
					routes: [{ name: 'LoginScreen' }],
				});
			} else {
				navigation.goBack();
			}
		},
		t,
		navigation,
	};

	return { state, actions };
};
