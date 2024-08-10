/**
 * @fileOverview useForgotPasswordFormManager Hook
 * @description Custom hook for initializing and managing the ForgotPassword form state.
 *              This hook abstracts the form logic from the ForgotPasswordForm component,
 *              providing a cleaner interface for form state management.
 *              It utilizes useFormManager with the specific validation schema for ForgotPassword.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { HookOutput } from '@/sharedTypes/hook';

import { useTranslationApp } from 'src/core/locales/useTranslationApp';
import { useFormManager } from 'src/core/providers/FormManager';

import { useACLNavigation } from './useACLNavigation';
import { ForgotPasswordFormFields } from '../types';
import {
	ForgotPasswordFormActions,
	ForgotPasswordFormState,
} from '../types/ForgotPasswordFormStateAndActions';
import { forgotPasswordValidator } from '../utils';

export const useForgotPasswordFormManager = (): HookOutput<
	ForgotPasswordFormState,
	ForgotPasswordFormActions
> => {
	const {
		actions: { t },
	} = useTranslationApp();

	const {
		actions: { navigation },
	} = useACLNavigation();

	const {
		values,
		errors,
		fieldStates,
		handleChange,
		handleBlur,
		handleSubmit,
		handleFocus,
	} = useFormManager<ForgotPasswordFormFields>(
		{ email: '' },
		forgotPasswordValidator
	);
	// Function send to the next screen with name 'resetCode'
	const handleNavigateResetCode = (email: string) => {
		navigation.navigate('ResetCodeScreen', { email });
	};
	// Function send to the form manager to handle the form submission
	const handleOnSubmit = async (valuesForm: ForgotPasswordFormFields) => {
		try {
			//const userData = await ForgotPassword(valuesForm);
			handleNavigateResetCode(valuesForm.email);
			// Do something with the userData, like updating the user context or redirecting
		} catch (error) {
			// Handle errors, for example, showing error messages in the UI
		}
	};

	// Empaquetar el estado y las acciones en objetos separados
	const state: ForgotPasswordFormState = { fieldStates, values, errors };
	const actions: ForgotPasswordFormActions = {
		handleChange,
		handleBlur,
		handleFocus,
		handleSubmit,
		handleForgotPasswordSubmit: handleSubmit(handleOnSubmit),
		t,
	};

	return { state, actions };
};
