/**
 * @fileOverview useForgotPasswordWhatsAppFormManager Hook
 * @description Custom hook for initializing and managing the ForgotPassword form state.
 *              This hook abstracts the form logic from the ForgotPasswordWhatsAppForm component,
 *              providing a cleaner interface for form state management.
 *              It utilizes useFormManager with the specific validation schema for ForgotPassword.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useEffect, useState } from 'react';

import { flagsData } from '@/components/Form';
import { useAuthRoute } from '@/navigation/hooks';
import { HookOutput } from '@/sharedTypes/hook';

import { useTranslationApp } from 'src/core/locales/useTranslationApp';
import { useFormManager } from 'src/core/providers/FormManager';

import { useACLNavigation } from './useACLNavigation';
import { ForgotPasswordWhatsAppFormFields } from '../types';
import {
	ForgotPasswordWhatsAppFormActions,
	ForgotPasswordWhatsAppFormState,
} from '../types/ForgotPasswordWhatsAppFormStateAndActions';
import { forgotPasswordWhatsAppValidator } from '../utils/validation/forgotPasswordWhatsAppValidation';

export const useForgotPasswordWhatsAppFormManager = (): HookOutput<
	ForgotPasswordWhatsAppFormState,
	ForgotPasswordWhatsAppFormActions
> => {
	const [currentPrefix, setCurrentPrefix] = useState<string>('EC');
	const {
		actions: { t },
	} = useTranslationApp();

	const {
		actions: { navigation, handlePhone },
	} = useACLNavigation();
	const route = useAuthRoute<'ForgotPasswordWhatsAppScreen'>();
	const {
		values,
		errors,
		fieldStates,
		handleChange,
		handleBlur,
		handleSubmit,
		handleFocus,
	} = useFormManager<ForgotPasswordWhatsAppFormFields>(
		{ phone: '' },
		forgotPasswordWhatsAppValidator
	);
	// Function send to the next screen with name 'resetCode'
	const handleNavigateResetCode = (phone: string) => {
		navigation.navigate('ResetCodeScreen', { phone });
	};
	// Function send to the form manager to handle the form submission
	const handleOnSubmit = async (
		valuesForm: ForgotPasswordWhatsAppFormFields
	) => {
		try {
			console.log(
				'🚀 ~ file: useForgotPasswordWhatsAppFormManager.ts:63 ~ currentPrefix:',
				currentPrefix
			);
			const prefix = flagsData.find((field) => field.code === currentPrefix);
			//const userData = await ForgotPassword(valuesForm);
			handleNavigateResetCode(`+${prefix?.calling_code}${valuesForm.phone}`);
			// Do something with the userData, like updating the user context or redirecting
		} catch (error) {
			// Handle errors, for example, showing error messages in the UI
		}
	};
	useEffect(() => {
		if (route.params?.selectedPrefix) {
			setCurrentPrefix(route.params?.selectedPrefix);
		} else {
			const locale = Intl.DateTimeFormat().resolvedOptions().locale;
			const country = locale.split('-')[1] || 'EC';
			setCurrentPrefix(country);
		}
	}, [route.params]);

	// Empaquetar el estado y las acciones en objetos separados
	const state: ForgotPasswordWhatsAppFormState = {
		fieldStates,
		values,
		errors,
		currentPrefix,
	};
	const actions: ForgotPasswordWhatsAppFormActions = {
		handleChange,
		handleBlur,
		handleFocus,
		handleSubmit,
		handleForgotPasswordWhatsAppSubmit: handleSubmit(handleOnSubmit),
		t,
		handlePhone,
	};

	return { state, actions };
};
