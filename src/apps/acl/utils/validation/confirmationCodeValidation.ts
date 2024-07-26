/**
 * @fileOverview Confirmation Code Form Validation
 * @description Defines the validation schema for the confirmation code form using Yup.
 *              This schema is used to validate user input on the confirmation code screen.
 * @module apps/acl/utils/validation/confirmationCodeValidation
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

import { ConfirmationCodeFormFields } from '../../types/formTypes';

// Define the validation schema for the confirmation code form.
const confirmationCodeValidationSchema: ValidationSchema<ConfirmationCodeFormFields> =
	{
		code: {
			required: translate('aclMessages.confirmationCode.requiredCode'),
			minLength: {
				value: 6,
				message: translate('aclMessages.confirmationCode.minLengthCode'),
			},
			maxLength: {
				value: 6,
				message: translate('aclMessages.confirmationCode.maxLengthCode'),
			},
		},
	};

// Instance validation adapter factory with the confirmation code form.
const adapterFactory = getValidationAdapter<ConfirmationCodeFormFields>();

// Instantiate the ValidationManager with the schema and the adapter instance.
export const confirmationCodeValidator =
	new ValidationManager<ConfirmationCodeFormFields>(
		confirmationCodeValidationSchema,
		adapterFactory
	);
