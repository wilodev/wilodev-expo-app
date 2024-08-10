/**
 * @fileOverview useRegisterFormManager Hook
 * @description Custom hook for initializing and managing the login form state.
 *              This hook abstracts the form logic from the RegisterForm component,
 *              providing a cleaner interface for form state management.
 *              It utilizes useFormManager with the specific validation schema for login.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useEffect, useState } from 'react';

import { useWindowDimensions } from 'react-native';

import { useAuthRoute } from '@/navigation/hooks';
import { HookOutput } from '@/sharedTypes/hook';

import { useTranslationApp } from 'src/core/locales/useTranslationApp';
import { useFormManager } from 'src/core/providers/FormManager';

import { useACLNavigation } from './useACLNavigation';
import { RegisterFormFields } from '../types';
import {
	RegisterFormActions,
	RegisterFormState,
} from '../types/RegisterFormStateAndActions';
import { registerValidator } from '../utils';

export const useRegisterFormManager = (): HookOutput<
	RegisterFormState,
	RegisterFormActions
> => {
	const [currentPrefix, setCurrentPrefix] = useState<string>('EC');
	const [formHeight, setFormHeight] = useState<number>(380);

	const {
		actions: { handleLogin, navigation, handlePhone, handleTermsAndConditions },
	} = useACLNavigation();
	const route = useAuthRoute<'RegisterScreen'>();
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
	} = useFormManager<RegisterFormFields>(
		{
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			password: '',
			confirmPassword: '',
			terms: '',
		},
		registerValidator
	);

	const { height } = useWindowDimensions();
	useEffect(() => {
		if (height > 0 && height < 500) {
			setFormHeight(220);
		} else if (height > 500 && height < 800) {
			setFormHeight(380);
		} else if (height > 800 && height < 990) {
			if (420 !== formHeight) {
				setFormHeight(420);
			}
		} else {
			setFormHeight(640);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [height]);

	// Function send to the form manager to handle the form submission
	const handleOnSubmit = async (valuesForm: RegisterFormFields) => {
		try {
			//const userData = await login(valuesForm);
			console.log(
				'🚀 ~ useRegisterFormManager ~ handleOnSubmit ~ userData ~ line 46:',
				valuesForm
			);
			navigation.navigate('ActivationCodeScreen', { email: valuesForm.email });
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
	const state: RegisterFormState = {
		fieldStates,
		values,
		errors,
		currentPrefix,
		formHeight,
	};
	const actions: RegisterFormActions = {
		handleChange,
		handleBlur,
		handleFocus,
		handleSubmit,
		handleRegisterSubmit: handleSubmit(handleOnSubmit),
		handleLogin,
		handlePhone,
		handleTermsAndConditions,
		t,
	};

	return { state, actions };
};
