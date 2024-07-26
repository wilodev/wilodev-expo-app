/**
 * @fileOverview Spanish translations for password recovery form validation messages.
 * @description Contains all Spanish language text for password recovery form validation.
 *              These messages are used across the application where password recovery form validation occurs.
 *              The structure and naming conventions ensure consistency and ease of use when integrating
 *              translations into the validation logic.
 * @module acl/locales/es/forgotPasswordMessages
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export const forgotPasswordMessages = {
	title: 'Recuperar vía Email',
	description:
		'Para restablecer tu contraseña por favor escribe tu email y te enviaremos un correo con las instrucciones',
	email: {
		label: 'Correo Electrónico',
		placeholder: 'Ingrese su correo electrónico',
		isInvalid: {
			required: 'El correo electrónico es requerido',
			invalid: 'El correo electrónico es inválido',
			notFound: 'El correo electrónico no se encuentra registrado',
			sentSuccess: 'El correo electrónico de recuperación se envió con éxito',
		},
	},
	submit: 'Enviar',
};
