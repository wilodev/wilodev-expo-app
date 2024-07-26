/**
 * @fileOverview Spanish translations for password recovery form validation messages.
 * @description Contains all Spanish language text for password recovery form validation.
 *              These messages are used across the application where password recovery form validation occurs.
 *              The structure and naming conventions ensure consistency and ease of use when integrating
 *              translations into the validation logic.
 * @module acl/locales/es/forgotPasswordWhatsAppMessages
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export const forgotPasswordWhatsAppMessages = {
	title: 'Recuperar vía WhatsApp',
	description:
		'Para restablecer tu contraseña por favor escribe tù numero de whatsapp y te enviaremos un mensaje con las instrucciones',
	phone: {
		label: 'Teléfono',
		placeholder: 'Ingrese su teléfono',
		isInvalid: {
			required: 'El teléfono es requerido',
			invalid: 'El teléfono es inválido',
			notFound: 'El teléfono no se encuentra registrado',
			sentSuccess: 'El mensaje de recuperación se envió con éxito',
		},
	},
	submit: 'Enviar',
};
