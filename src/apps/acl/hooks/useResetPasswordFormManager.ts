/**
 * @fileOverview useResetPasswordFormManager Hook
 * @description Custom hook for initializing and managing the ResetPassword form state.
 *              This hook abstracts the form logic from the ResetPasswordForm component,
 *              providing a cleaner interface for form state management.
 *              It utilizes useFormManager with the specific validation schema for ResetPassword.
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
import { ResetPasswordFormFields } from '../types';
import {
	ResetPasswordFormActions,
	ResetPasswordFormState,
} from '../types/ResetPasswordFormStateAndActions';
import { resetPasswordValidator } from '../utils';

export const useResetPasswordFormManager = (): HookOutput<
	ResetPasswordFormState,
	ResetPasswordFormActions
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
	} = useFormManager<ResetPasswordFormFields>(
		{ newPassword: '', confirmNewPassword: '' },
		resetPasswordValidator
	);
	// Function send to the next screen with name 'resetCode'
	const handleNavigateResetCode = (email: string) => {
		navigation.navigate('PasswordResetSuccessfulScreen', { email });
	};
	// Function send to the form manager to handle the form submission
	const handleOnSubmit = async (valuesForm: ResetPasswordFormFields) => {
		try {
			//const userData = await ResetPassword(valuesForm);
			handleNavigateResetCode(valuesForm.newPassword);
			// Do something with the userData, like updating the user context or redirecting
		} catch (error) {
			// Handle errors, for example, showing error messages in the UI
		}
	};

	// Empaquetar el estado y las acciones en objetos separados
	const state: ResetPasswordFormState = { fieldStates, values, errors };
	const actions: ResetPasswordFormActions = {
		handleChange,
		handleBlur,
		handleFocus,
		handleSubmit,
		handleResetPasswordSubmit: handleSubmit(handleOnSubmit),
		t,
	};

	return { state, actions };
};
