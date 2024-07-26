/**
 * @fileOverview Login Form Validation
 * @description Defines the validation schema for the login form using Yup.
 *              This schema is utilized to validate user input on the login screen.
 * @module apps/acl/utils/validation/loginValidation
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

import { LoginFormFields } from '../../types/formTypes';

// Define el esquema de validación para el formulario de inicio de sesión.
const loginValidationSchema: ValidationSchema<LoginFormFields> = {
	// Validación de email
	email: {
		required: translate('aclMessages.login.email.isInvalid.required'),
		email: translate('aclMessages.login.email.isInvalid.invalid'),
	},
	// Validación de contraseña
	password: {
		required: translate('aclMessages.login.password.isInvalid.required'),
	},
};

// Instancia la fábrica de adaptadores de validación con el tipo de datos del formulario de inicio de sesión.
const adapterFactory = getValidationAdapter<LoginFormFields>();

// Instancia el ValidationManager con el esquema y la instancia del adaptador.
export const loginValidator = new ValidationManager<LoginFormFields>(
	loginValidationSchema,
	adapterFactory
);
