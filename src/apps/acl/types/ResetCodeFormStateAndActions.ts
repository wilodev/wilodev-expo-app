/**
 * @fileOverview ResetCodeFormState and ResetCodeFormActions
 * @description This file contains type definitions for the state and actions of the ResetCodeForm.
 *              It is designed to support form management with strong typing, enhancing the
 *              development experience and ensuring robustness. The ResetCodeFormState interface
 *              describes the structure of the form's state, including field values and validation errors.
 *              ResetCodeFormActions interface outlines methods for handling form interactions such as
 *              field changes, submissions, and navigation.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { FieldState } from 'src/core/types/IFormManager';

import { ResetCodeFormFields } from './formTypes';

/**
 * ResetCodeFormState interface defines the structure of the state used in the ResetCodeForm.
 * It includes form field states, field states, and validation errors.
 */
export interface ResetCodeFormState {
	fieldStates: FieldState<ResetCodeFormFields>;
	values: ResetCodeFormFields;
	errors: Partial<Record<keyof ResetCodeFormFields, string>>;
}

/**
 * ResetCodeFormActions interface provides a set of methods for managing form interactions.
 * It includes functions for handling field changes, form submission, and navigation within the application.
 */
export interface ResetCodeFormActions {
	handleChange: <K extends keyof ResetCodeFormFields>(
		field: K
	) => (value: ResetCodeFormFields[K]) => void;
	handleBlur: <K extends keyof ResetCodeFormFields>(field: K) => () => void;
	handleFocus: <K extends keyof ResetCodeFormFields>(field: K) => () => void;
	handleSubmit: (callback: (values: ResetCodeFormFields) => void) => void;
	handleResetCodeSubmit: () => void;
	t: (key: string) => string;
}
