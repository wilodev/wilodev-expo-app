/**
 * @fileOverview Spanish translations for account activation form validation messages.
 * @description Contains all Spanish language text for account activation form validation.
 *              These messages are used across the application where account activation form validation occurs.
 * @module apps/acl/locales/es/accountActivationMessages
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export const accountActivationMessages = {
	title: 'Activar cuenta',
	description:
		'Te hemos enviado un correo electrónico con el código necesario para activar tu cuenta. Por favor, revisa tu bandeja de entrada y sigue las instrucciones.',
	activationCode: {
		label: 'Código de activación',
		placeholder: 'Ingresa el código de activación',
		isInvalid: {
			required: 'El código de activación es requerido.',
			invalid: 'El código de activación es inválido.',
			minLength: 'El código de activación debe tener al menos 6 caracteres',
			maxLength: 'El código de activación debe tener al menos 6 caracteres',
			notFound: 'El código de activación no fue encontrado.',
			sentSuccess: 'El código de activación fue enviado con éxito.',
		},
	},
	message: 'Hola equipo de {{name}}, Necesito activar mi cuenta. Mi ticket es:',
	submit: 'Enviar',
};
