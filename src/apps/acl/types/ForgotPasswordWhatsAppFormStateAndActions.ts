/**
 * @fileOverview ForgotPasswordWhatsAppFormState and ForgotPasswordWhatsAppFormActions
 * @description This file contains type definitions for the state and actions of the ForgotPasswordWhatsAppForm.
 *              It is designed to support form management with strong typing, enhancing the
 *              development experience and ensuring robustness. The ForgotPasswordWhatsAppFormState interface
 *              describes the structure of the form's state, including field values and validation errors.
 *              ForgotPasswordWhatsAppFormActions interface outlines methods for handling form interactions such as
 *              field changes, submissions, and navigation.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { FieldState } from 'src/core/types/IFormManager';

import { ForgotPasswordWhatsAppFormFields } from './formTypes';

/**
 * ForgotPasswordWhatsAppFormState interface defines the structure of the state used in the ForgotPasswordWhatsAppForm.
 * It includes form field states, field states, and validation errors.
 */
export interface ForgotPasswordWhatsAppFormState {
	fieldStates: FieldState<ForgotPasswordWhatsAppFormFields>;
	values: ForgotPasswordWhatsAppFormFields;
	errors: Partial<Record<keyof ForgotPasswordWhatsAppFormFields, string>>;
	currentPrefix: string;
}

/**
 * ForgotPasswordWhatsAppFormActions interface provides a set of methods for managing form interactions.
 * It includes functions for handling field changes, form submission, and navigation within the application.
 */
export interface ForgotPasswordWhatsAppFormActions {
	handleChange: <K extends keyof ForgotPasswordWhatsAppFormFields>(
		field: K
	) => (value: ForgotPasswordWhatsAppFormFields[K]) => void;
	handleBlur: <K extends keyof ForgotPasswordWhatsAppFormFields>(
		field: K
	) => () => void;
	handleFocus: <K extends keyof ForgotPasswordWhatsAppFormFields>(
		field: K
	) => () => void;
	handleSubmit: (
		callback: (values: ForgotPasswordWhatsAppFormFields) => void
	) => void;
	handleForgotPasswordWhatsAppSubmit: () => void;
	t: (key: string) => string;
	handlePhone: (prefix: string, origin: string) => void;
}
