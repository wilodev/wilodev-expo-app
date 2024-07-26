/**
 * @fileOverview ActivationCodeFormState and ActivationCodeFormActions
 * @description This file contains type definitions for the state and actions of the ActivationCodeForm.
 *              It is designed to support form management with strong typing, enhancing the
 *              development experience and ensuring robustness. The ActivationCodeFormState interface
 *              describes the structure of the form's state, including field values and validation errors.
 *              ActivationCodeFormActions interface outlines methods for handling form interactions such as
 *              field changes, submissions, and navigation.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { FieldState } from 'src/core/types/IFormManager';

import { AccountActivationFormFields } from './formTypes';

/**
 * ActivationCodeFormState interface defines the structure of the state used in the ActivationCodeForm.
 * It includes form field states, field states, and validation errors.
 */
export interface ActivationCodeFormState {
	fieldStates: FieldState<AccountActivationFormFields>;
	values: AccountActivationFormFields;
	errors: Partial<Record<keyof AccountActivationFormFields, string>>;
}

/**
 * ActivationCodeFormActions interface provides a set of methods for managing form interactions.
 * It includes functions for handling field changes, form submission, and navigation within the application.
 */
export interface ActivationCodeFormActions {
	handleChange: <K extends keyof AccountActivationFormFields>(
		field: K
	) => (value: AccountActivationFormFields[K]) => void;
	handleBlur: <K extends keyof AccountActivationFormFields>(
		field: K
	) => () => void;
	handleFocus: <K extends keyof AccountActivationFormFields>(
		field: K
	) => () => void;
	handleSubmit: (
		callback: (values: AccountActivationFormFields) => void
	) => void;
	handleActivationCodeSubmit: () => void;
	t: (key: string) => string;
}
