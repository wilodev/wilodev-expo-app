/**
 * @fileOverview useActivationCodeFormManager Hook
 * @description Custom hook for initializing and managing the ResetCode form state.
 *              This hook abstracts the form logic from the ActivationCodeForm component,
 *              providing a cleaner interface for form state management.
 *              It utilizes useFormManager with the specific validation schema for ResetCode.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useEffect } from 'react';

import { useAuthRoute } from '@/navigation/hooks';
import { openWhatsApp } from '@/shared/utils/whatsapp';
import { HookOutput } from '@/sharedTypes/hook';

import { useTranslationApp } from 'src/core/locales/useTranslationApp';
import { useFormManager } from 'src/core/providers/FormManager';

import { useACLNavigation } from './useACLNavigation';
import { AccountActivationFormFields } from '../types';
import {
	ActivationCodeFormActions,
	ActivationCodeFormState,
} from '../types/ActivationCodeFormStateAndActions';
import { accountActivationValidator } from '../utils';

export const useActivationCodeFormManager = (): HookOutput<
	ActivationCodeFormState,
	ActivationCodeFormActions
> => {
	const {
		actions: { t },
	} = useTranslationApp();
	const {
		actions: { navigation },
	} = useACLNavigation();
	const route = useAuthRoute<'ActivationCodeScreen'>();
	const {
		values,
		errors,
		fieldStates,
		handleChange,
		handleBlur,
		handleSubmit,
		handleFocus,
	} = useFormManager<AccountActivationFormFields>(
		{ activationCode: '' },
		accountActivationValidator
	);

	// Function send to the next screen with name 'resetCode'
	const handleNavigateWelcome = () => {
		navigation.navigate('WelcomeScreen');
	};
	// Function send to the form manager to handle the form submission
	const handleOnSubmit = async (valuesForm: AccountActivationFormFields) => {
		try {
			//const userData = await ResetCode(valuesForm);
			console.log(
				'🚀 ~ useActivationCodeFormManager ~ handleOnSubmit ~ userData ~ line 46:',
				valuesForm
			);
			handleNavigateWelcome();
			// Do something with the userData, like updating the user context or redirecting
		} catch (error) {
			// Handle errors, for example, showing error messages in the UI
		}
	};
	const { externalCode, phone } = route.params;

	useEffect(() => {
		// Create a deep link to the activation code screen for the WhatsApp message
		if (phone) {
			// Function send Message to WhatsApp
			const name = t('app.name');
			const code = '12345423';
			const message = t('aclMessages.accountActivation.message', { name });
			const verificationCode = `ACS-${code}`;
			openWhatsApp(phone, message, verificationCode);
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
	// Empaquetar el estado y las acciones en objetos separados
	const state: ActivationCodeFormState = { fieldStates, values, errors };
	const actions: ActivationCodeFormActions = {
		handleChange,
		handleBlur,
		handleFocus,
		handleSubmit,
		handleActivationCodeSubmit: handleSubmit(handleOnSubmit),
		t,
	};

	return { state, actions };
};
