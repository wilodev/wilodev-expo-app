/**
 * @fileOverview Register Form Validation
 * @description Defines the validation schema for the registration form using Yup.
 *              This schema is utilized to validate user input on the registration screen,
 *              ensuring data integrity and compliance with defined constraints.
 * @module apps/acl/utils/validation/registerValidation
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

import { RegisterFormFields } from '../../types/formTypes';

// Define the validation schema for the register form.
const registerValidationSchema: ValidationSchema<RegisterFormFields> = {
	firstName: {
		required: translate('aclMessages.register.firstName.isInvalid.required'),
	},
	lastName: {
		required: translate('aclMessages.register.lastName.isInvalid.required'),
	},
	// Email validation
	email: {
		required: translate('aclMessages.register.email.isInvalid.required'),
		email: translate('aclMessages.register.email.isInvalid.invalid'),
	},
	// Phone validation
	phone: {
		required: translate('aclMessages.register.phone.isInvalid.required'),
	},
	// Password validation
	password: {
		required: translate('aclMessages.register.password.isInvalid.required'),
		isPassword: {
			minLength: {
				value: 8,
				message: translate('aclMessages.register.password.isInvalid.minLength'),
			},
			maxLength: {
				value: 20,
				message: translate('aclMessages.register.password.isInvalid.maxLength'),
			},
			minNumbers: {
				value: 1,
				message: translate('aclMessages.register.password.isInvalid.minNumber'),
			},
			minUppercase: {
				value: 1,
				message: translate(
					'aclMessages.register.password.isInvalid.minUpperCase'
				),
			},
			minLowercase: {
				value: 1,
				message: translate(
					'aclMessages.register.password.isInvalid.minLowerCase'
				),
			},
			minSymbols: {
				value: 1,
				message: translate(
					'aclMessages.register.password.isInvalid.minSpecialCharacter'
				),
			},
			message: translate('aclMessages.register.password.isInvalid.invalid'),
		},
	},
	// Confirmation Password validation
	confirmPassword: {
		required: translate(
			'aclMessages.register.confirmPassword.isInvalid.required'
		),
		isRepeatPassword: {
			reference: 'password',
			message: translate(
				'aclMessages.register.confirmPassword.isInvalid.match'
			),
		},
	},
	// Terms and Conditions validation
	terms: {
		required: translate('aclMessages.register.terms.isInvalid.required'),
	},
};

// Instantiate the ValidationAdapterFactory with the register form.
const adapterFactory = getValidationAdapter<RegisterFormFields>();
// Instantiate the ValidationManager with the schema and the adapter instance.
export const registerValidator = new ValidationManager<RegisterFormFields>(
	registerValidationSchema,
	adapterFactory
);
