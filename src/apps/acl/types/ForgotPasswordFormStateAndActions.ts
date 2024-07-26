/**
 * @fileOverview ForgotPasswordFormState and ForgotPasswordFormActions
 * @description This file contains type definitions for the state and actions of the ForgotPasswordForm.
 *              It is designed to support form management with strong typing, enhancing the
 *              development experience and ensuring robustness. The ForgotPasswordFormState interface
 *              describes the structure of the form's state, including field values and validation errors.
 *              ForgotPasswordFormActions interface outlines methods for handling form interactions such as
 *              field changes, submissions, and navigation.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { FieldState } from 'src/core/types/IFormManager';

import { ForgotPasswordFormFields } from './formTypes';

/**
 * ForgotPasswordFormState interface defines the structure of the state used in the ForgotPasswordForm.
 * It includes form field states, field states, and validation errors.
 */
export interface ForgotPasswordFormState {
	fieldStates: FieldState<ForgotPasswordFormFields>;
	values: ForgotPasswordFormFields;
	errors: Partial<Record<keyof ForgotPasswordFormFields, string>>;
}

/**
 * ForgotPasswordFormActions interface provides a set of methods for managing form interactions.
 * It includes functions for handling field changes, form submission, and navigation within the application.
 */
export interface ForgotPasswordFormActions {
	handleChange: <K extends keyof ForgotPasswordFormFields>(
		field: K
	) => (value: ForgotPasswordFormFields[K]) => void;
	handleBlur: <K extends keyof ForgotPasswordFormFields>(
		field: K
	) => () => void;
	handleFocus: <K extends keyof ForgotPasswordFormFields>(
		field: K
	) => () => void;
	handleSubmit: (callback: (values: ForgotPasswordFormFields) => void) => void;
	handleForgotPasswordSubmit: () => void;
	t: (key: string) => string;
}
