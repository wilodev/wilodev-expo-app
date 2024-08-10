/**
 * @fileOverview RegisterFormState and RegisterFormActions
 * @description This file contains type definitions for the state and actions of the RegisterForm.
 *              It is designed to support form management with strong typing, enhancing the
 *              development experience and ensuring robustness. The RegisterFormState interface
 *              describes the structure of the form's state, including field values and validation errors.
 *              RegisterFormActions interface outlines methods for handling form interactions such as
 *              field changes, submissions, and navigation.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { FieldState } from 'src/core/types/IFormManager';

import { RegisterFormFields } from './formTypes';

/**
 * RegisterFormState interface defines the structure of the state used in the RegisterForm.
 * It includes form field states, field states, and validation errors.
 */
export interface RegisterFormState {
	fieldStates: FieldState<RegisterFormFields>;
	values: RegisterFormFields;
	errors: Partial<Record<keyof RegisterFormFields, string>>;
	currentPrefix: string;
	formHeight: number;
}

/**
 * RegisterFormActions interface provides a set of methods for managing form interactions.
 * It includes functions for handling field changes, form submission, and navigation within the application.
 */
export interface RegisterFormActions {
	handleChange: <K extends keyof RegisterFormFields>(
		field: K
	) => (value: RegisterFormFields[K]) => void;
	handleBlur: <K extends keyof RegisterFormFields>(field: K) => () => void;
	handleFocus: <K extends keyof RegisterFormFields>(field: K) => () => void;
	handleSubmit: (callback: (values: RegisterFormFields) => void) => void;
	handleRegisterSubmit: () => void;
	handleLogin: () => void;
	handlePhone: (prefix: string, origin: string) => void;
	handleTermsAndConditions: () => void;
	t: (key: string) => string;
}
