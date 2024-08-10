/**
 * @fileOverview Spanish translations for password recovery form validation messages.
 * @description Contains all Spanish language text for password recovery form validation.
 *              These messages are used across the application where password recovery form validation occurs.
 *              The structure and naming conventions ensure consistency and ease of use when integrating
 *              translations into the validation logic.
 * @module acl/locales/es/forgotPasswordOptionsMessages
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export const forgotPasswordOptionsMessages = {
	title: 'Opciones de Recuperación',
	description:
		'Elija cómo le gustaría recuperar su contraseña. Debes agregar nuestro contacto a su teléfono y sincronizar sus contactos para mejorar la seguridad.',
	contact: {
		confirm: 'Agregar Contacto',
		cancel: 'Cancelar',
		success: {
			title: 'Contacto agregado',
			description: 'El contacto se ha agregado a tu lista de contactos.',
		},
		error: {
			title: 'Error al agregar contacto',
			description:
				'No se ha podido agregar el contacto a tu lista de contactos.',
		},
		warning: {
			title: 'Contacto existente',
			description: 'El contacto ya existe en tu lista de contactos.',
		},
	},
	buttons: {
		add: 'Agregar contacto',
		email: 'Recuperar vía Email',
		phone: 'Recuperar vía WhatsApp',
	},
};
