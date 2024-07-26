/**
 * @fileOverview useResetCodeFormManager Hook
 * @description Custom hook for initializing and managing the ResetCode form state.
 *              This hook abstracts the form logic from the ResetCodeForm component,
 *              providing a cleaner interface for form state management.
 *              It utilizes useFormManager with the specific validation schema for ResetCode.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { useEffect } from 'react';

import { openWhatsApp } from '@/shared/utils/whatsapp';
import { HookOutput } from '@/sharedTypes/hook';

import { useTranslationApp } from 'src/core/locales/useTranslationApp';
import { useFormManager } from 'src/core/providers/FormManager';

import { useAuthRoute } from './../../../navigation/hooks';
import { useACLNavigation } from './useACLNavigation';
import { ResetCodeFormFields } from '../types';
import {
	ResetCodeFormActions,
	ResetCodeFormState,
} from '../types/ResetCodeFormStateAndActions';
import { resetCodeValidator } from '../utils';

export const useResetCodeFormManager = (): HookOutput<
	ResetCodeFormState,
	ResetCodeFormActions
> => {
	const {
		actions: { t },
	} = useTranslationApp();
	const {
		actions: { navigation },
	} = useACLNavigation();
	const route = useAuthRoute<'ResetCodeScreen'>();
	const {
		values,
		errors,
		fieldStates,
		handleChange,
		handleBlur,
		handleSubmit,
		handleFocus,
	} = useFormManager<ResetCodeFormFields>({ code: '' }, resetCodeValidator);

	const { externalCode, phone } = route.params;
	// Function to open WhatsApp
	useEffect(() => {
		// Create a deep link to the reset code screen for the WhatsApp message
		if (phone) {
			console.log(
				'🚀 ~ file: useResetCodeFormManager.ts:54 ~ useEffect ~ phone:',
				phone
			);
			// Use service to get the  code
			// const code = await getCode();
			// Function send Message to WhatsApp
			const name = t('app.name');
			const code = '12345423';
			const message = t('aclMessages.resetCode.message', { name });
			const verificationCode = `RCS-${code}`;
			openWhatsApp(phone, message, verificationCode);
			console.log(
				'🚀 ~ file: useResetCodeFormManager.ts:62 ~ useEffect ~ phone:',
				phone
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [phone]);

	useEffect(() => {
		if (externalCode) {
			// Auto-fill the verification code field with the code from the deep link
			console.log(`Verification code: ${externalCode}`);
			// Aquí puedes usar el código para auto-rellenar el campo de verificación
		}
	}, [externalCode]);

	// Function send to the next screen with name 'resetCode'
	const handleNavigateResetPassword = (email: string) => {
		navigation.navigate('ResetPasswordScreen', { email });
	};
	// Function send to the form manager to handle the form submission
	const handleOnSubmit = async (valuesForm: ResetCodeFormFields) => {
		try {
			//const userData = await ResetCode(valuesForm);
			console.log(
				'🚀 ~ useResetCodeFormManager ~ handleOnSubmit ~ userData ~ line 46:',
				valuesForm
			);
			handleNavigateResetPassword(valuesForm.code);
			// Do something with the userData, like updating the user context or redirecting
		} catch (error) {
			// Handle errors, for example, showing error messages in the UI
		}
	};
	// Empaquetar el estado y las acciones en objetos separados
	const state: ResetCodeFormState = { fieldStates, values, errors };
	const actions: ResetCodeFormActions = {
		handleChange,
		handleBlur,
		handleFocus,
		handleSubmit,
		handleResetCodeSubmit: handleSubmit(handleOnSubmit),
		t,
	};

	return { state, actions };
};
