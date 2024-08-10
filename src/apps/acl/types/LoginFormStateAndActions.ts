/**
 * @fileOverview LoginFormState and LoginFormActions
 * @description This file contains type definitions for the state and actions of the LoginForm.
 *              It is designed to support form management with strong typing, enhancing the
 *              development experience and ensuring robustness. The LoginFormState interface
 *              describes the structure of the form's state, including field values and validation errors.
 *              LoginFormActions interface outlines methods for handling form interactions such as
 *              field changes, submissions, and navigation.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { FieldState } from 'src/core/types/IFormManager';

import { LoginFormFields } from './formTypes';

/**
 * LoginFormState interface defines the structure of the state used in the LoginForm.
 * It includes form field states, field states, and validation errors.
 */
export interface LoginFormState {
	fieldStates: FieldState<LoginFormFields>;
	values: LoginFormFields;
	errors: Partial<Record<keyof LoginFormFields, string>>;
	biometricEnabled: boolean;
	isLoading: boolean;
	faceIconFill: string;
}

/**
 * LoginFormActions interface provides a set of methods for managing form interactions.
 * It includes functions for handling field changes, form submission, and navigation within the application.
 */
export interface LoginFormActions {
	handleChange: <K extends keyof LoginFormFields>(
		field: K
	) => (value: LoginFormFields[K]) => void;
	handleBlur: <K extends keyof LoginFormFields>(field: K) => () => void;
	handleFocus: <K extends keyof LoginFormFields>(field: K) => () => void;
	handleSubmit: (callback: (values: LoginFormFields) => void) => void;
	handleLoginSubmit: () => void;
	handleForgotPasswordOptions: () => void;
	t: (value: string) => string;
	handleRegister: () => void;
	handleBiometricLogin: () => void;
}

/***
 * LoginVariables interface defines the structure of the variables required for the login mutation.
 */
export interface LoginVariables {
	client_id: string;
	client_secret: string;
	scope: string;
	grant_type: string;
	username: string;
	password: string;
}
