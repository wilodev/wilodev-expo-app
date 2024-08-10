/**
 * @fileOverview Form Types for ACL
 * @description Defines interfaces for form fields used in the ACL (Access Control Layer) module.
 *              This includes forms for login, registration, password recovery, etc.
 * @module apps/acl/types/formTypes
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export interface LoginFormFields {
	email: string;
	password: string;
}

export interface RegisterFormFields {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
	terms: string;
}

export interface ForgotPasswordFormFields {
	email: string;
}

export interface ForgotPasswordWhatsAppFormFields {
	phone: string;
}

export interface ConfirmationCodeFormFields {
	code: string;
}

export interface ResetPasswordFormFields {
	newPassword: string;
	confirmNewPassword: string;
}

export interface AccountActivationFormFields {
	activationCode: string;
}

export interface ResetCodeFormFields {
	code: string;
}
