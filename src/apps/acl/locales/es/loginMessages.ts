/**
 * @fileOverview Spanish translations for login form validation messages.
 * @description Contains all Spanish language text for login form validation.
 *              These messages are used across the application where login form validation occurs.
 * @module shared/locales/es/loginMessages
 * @author Wilson Fabian Pérez Sucuzhañay
 * @copyright 2024 @wilodev
 */

export const loginMessages = {
	title: 'Iniciar Sesión',
	description: 'Por favor, ingrese sus credenciales para iniciar sesión.',
	email: {
		label: 'Correo Electrónico',
		placeholder: 'Ingrese su correo electrónico',
		isInvalid: {
			required: 'El correo electrónico es requerido',
			invalid: 'El correo electrónico es inválido',
		},
	},
	password: {
		label: 'Contraseña',
		placeholder: 'Ingrese su contraseña',
		isInvalid: {
			required: 'La contraseña es requerida',
		},
	},
	forgotPassword: '¿Olvidaste tu contraseña?',
	submit: 'Iniciar Sesión',
	footer: {
		description: '¿No tienes una cuenta?',
		register: 'Regístrate',
	},
	errors: {
		invalid_credentials: {
			title: 'Ops, Error',
			description:
				'Las credenciales ingresadas no son válidas. Por favor, intente de nuevo.',
		},
		network_error: {
			title: 'Ops, Error de red',
			description:
				'No se pudo conectar con el servidor. Por favor, revise su conexión a Internet e intente de nuevo.',
		},
		server_error: {
			title: 'Error del servidor',
			description:
				'Ocurrió un error en el servidor. Por favor, intente más tarde.',
		},
	},
};
