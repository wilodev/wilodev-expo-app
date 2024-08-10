/**
 * @fileOverview Account Activation Form Validation
 * @description Defines the validation schema for the account activation form using Yup.
 *              This schema is used to validate user input on the account activation screen.
 * @module apps/acl/utils/validation/accountActivationValidation
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

import { AccountActivationFormFields } from '../../types/formTypes';

// Define the validation schema for the account activation form.
const accountActivationValidationSchema: ValidationSchema<AccountActivationFormFields> =
	{
		activationCode: {
			required: translate(
				'aclMessages.accountActivation.activationCode.isInvalid.required'
			),
			minLength: {
				value: 6,
				message: translate(
					'aclMessages.accountActivation.activationCode.isInvalid.minLength'
				),
			},
			maxLength: {
				value: 6,
				message: translate(
					'aclMessages.accountActivation.activationCode.isInvalid.maxLength'
				),
			},
		},
	};

// Instance validation adapter factory with the account activation form.
const adapterFactory = getValidationAdapter<AccountActivationFormFields>();

// Instantiate the ValidationManager with the schema and the adapter instance.
export const accountActivationValidator =
	new ValidationManager<AccountActivationFormFields>(
		accountActivationValidationSchema,
		adapterFactory
	);
