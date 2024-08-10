/**
 * @fileOverview Spanish translations for reset password form validation messages.
 * @description Contains all Spanish language text for reset password form validation.
 *              These messages are used across the application where reset password form validation occurs.
 * @module apps/acl/locales/es/resetPasswordMessages
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export const resetPasswordMessages = {
	title: 'Restablecer Contraseña',
	description:
		'Ingrese su nueva contraseña a continuación para completar el proceso de recuperación.',
	newPassword: {
		label: 'Contraseña',
		placeholder: 'Ingrese su contraseña',
		isInvalid: {
			required: 'La contraseña es requerida',
			minLength: 'La contraseña debe tener al menos 8 caracteres',
			minNumber: 'La contraseña debe tener al menos un número',
			minUpperCase: 'La contraseña debe tener al menos una letra mayúscula',
			minLowerCase: 'La contraseña debe tener al menos una letra minúscula',
			minSpecialCharacter:
				'La contraseña debe tener al menos un carácter especial',
			maxLength: 'La contraseña no puede tener más de 20 caracteres',
			invalid: 'La contraseña no cumple con los requisitos de seguridad',
		},
	},
	confirmNewPassword: {
		label: 'Confirmar Contraseña',
		placeholder: 'Confirme su contraseña',
		isInvalid: {
			required: 'La confirmación de la contraseña es requerida',
			match: 'Las contraseñas no coinciden',
		},
	},
	submit: 'Cambiar Contraseña',
};
