/**
 * @fileOverview Spanish translations for password recovery form validation messages.
 * @description Contains all Spanish language text for password recovery form validation.
 *              These messages are used across the application where password recovery form validation occurs.
 *              The structure and naming conventions ensure consistency and ease of use when integrating
 *              translations into the validation logic.
 * @module acl/locales/es/resetCodeMessages
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export const resetCodeMessages = {
	title: 'Ingresar Código de Recuperación',
	description:
		'Por favor, revise su bandeja de entrada o carpeta de spam, si elegiste WhatsApp  revise sus mensajes de WhatsApp para encontrar un código de recuperación de seis dígitos.',
	code: {
		label: 'Código de recuperación',
		placeholder: '',
		isInvalid: {
			required: 'El código de recuperación es requerido',
			invalid: 'El código de recuperación es inválido',
			minLength: 'El código de recuperación debe tener al menos 6 caracteres',
		},
	},
	message:
		'Hola equipo de {{name}}, Necesito recuperar mi contraseña. Mi ticket es:',
	submit: 'Validar',
};
