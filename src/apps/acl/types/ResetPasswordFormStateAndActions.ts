/**
 * @fileOverview ResetPasswordFormState and ResetPasswordFormActions
 * @description This file contains type definitions for the state and actions of the ResetPasswordForm.
 *              It is designed to support form management with strong typing, enhancing the
 *              development experience and ensuring robustness. The ResetPasswordFormState interface
 *              describes the structure of the form's state, including field values and validation errors.
 *              ResetPasswordFormActions interface outlines methods for handling form interactions such as
 *              field changes, submissions, and navigation.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { FieldState } from 'src/core/types/IFormManager';

import { ResetPasswordFormFields } from './formTypes';

/**
 * ResetPasswordFormState interface defines the structure of the state used in the ResetPasswordForm.
 * It includes form field states, field states, and validation errors.
 */
export interface ResetPasswordFormState {
	fieldStates: FieldState<ResetPasswordFormFields>;
	values: ResetPasswordFormFields;
	errors: Partial<Record<keyof ResetPasswordFormFields, string>>;
}

/**
 * ResetPasswordFormActions interface provides a set of methods for managing form interactions.
 * It includes functions for handling field changes, form submission, and navigation within the application.
 */
export interface ResetPasswordFormActions {
	handleChange: <K extends keyof ResetPasswordFormFields>(
		field: K
	) => (value: ResetPasswordFormFields[K]) => void;
	handleBlur: <K extends keyof ResetPasswordFormFields>(field: K) => () => void;
	handleFocus: <K extends keyof ResetPasswordFormFields>(
		field: K
	) => () => void;
	handleSubmit: (callback: (values: ResetPasswordFormFields) => void) => void;
	handleResetPasswordSubmit: () => void;
	t: (key: string) => string;
}
