/**
 * @fileOverview Reset Password Form Validation
 * @description Defines the validation schema for the reset password form using Yup.
 *              This schema is used to validate user input on the reset password screen.
 * @module apps/acl/utils/validation/resetPasswordValidation
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { translate } from 'src/core/locales/globalTranslation';
import {
	ValidationSchema,
	getValidationAdapter,
	ValidationManager,
} from 'src/core/validation';

import { ResetPasswordFormFields } from '../../types/formTypes';

//  Define the validation schema for the reset password form.
const resetPasswordValidationSchema: ValidationSchema<ResetPasswordFormFields> =
	{
		newPassword: {
			required: translate(
				'aclMessages.resetPassword.newPassword.isInvalid.required'
			),
			isPassword: {
				minLength: {
					value: 8,
					message: translate(
						'aclMessages.resetPassword.newPassword.isInvalid.minLength'
					),
				},
				maxLength: {
					value: 20,
					message: translate(
						'aclMessages.resetPassword.newPassword.isInvalid.maxLength'
					),
				},
				minNumbers: {
					value: 1,
					message: translate(
						'aclMessages.resetPassword.newPassword.isInvalid.minNumber'
					),
				},
				minUppercase: {
					value: 1,
					message: translate(
						'aclMessages.resetPassword.newPassword.isInvalid.minUpperCase'
					),
				},
				minLowercase: {
					value: 1,
					message: translate(
						'aclMessages.resetPassword.newPassword.isInvalid.minLowerCase'
					),
				},
				minSymbols: {
					value: 1,
					message: translate(
						'aclMessages.resetPassword.newPassword.isInvalid.minSpecialCharacter'
					),
				},
				message: translate(
					'aclMessages.resetPassword.newPassword.isInvalid.invalid'
				),
			},
		},
		confirmNewPassword: {
			required: translate(
				'aclMessages.resetPassword.confirmNewPassword.isInvalid.required'
			),
			isRepeatPassword: {
				reference: 'newPassword',
				message: translate(
					'aclMessages.resetPassword.confirmNewPassword.isInvalid.match'
				),
			},
		},
	};

// Instance validation adapter factory with the reset password form.
const adapterFactory = getValidationAdapter<ResetPasswordFormFields>();

// Instantiate the ValidationManager with the schema and the adapter instance.
export const resetPasswordValidator =
	new ValidationManager<ResetPasswordFormFields>(
		resetPasswordValidationSchema,
		adapterFactory
	);
