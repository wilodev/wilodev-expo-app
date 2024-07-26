/**
 * @fileOverview Password Recovery Form Validation
 * @description This file defines the validation schema for the password recovery form,
 *              ensuring that the user input is valid and meets the required criteria.
 *              It is a part of the ACL (Access Control Layer) functionality, focused on
 *              user authentication and password management.
 * @module apps/acl/utils/validation/passwordRecoveryValidation
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

import { ResetCodeFormFields } from '../../types/formTypes';

// Define the validation schema for the password recovery form.
const resetCodeValidationSchema: ValidationSchema<ResetCodeFormFields> = {
	// Code validation
	code: {
		required: translate('aclMessages.resetCode.code.isInvalid.required'),
		minLength: {
			value: 6,
			message: translate('aclMessages.resetCode.code.isInvalid.minLength'),
		},
	},
};

// Instantiate the validation adapter factory with the password recovery form data type.
const adapterFactory = getValidationAdapter<ResetCodeFormFields>();

// Instantiate the ValidationManager with the schema and the adapter instance.
export const resetCodeValidator = new ValidationManager<ResetCodeFormFields>(
	resetCodeValidationSchema,
	adapterFactory
);
