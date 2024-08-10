/**
 * @fileOverview Spanish translations for register form validation messages.
 * @description Contains all Spanish language text for register form validation.
 *              These messages are used across the application where register form validation occurs.
 *              The structure and naming conventions ensure consistency and ease of use when integrating
 *              translations into the validation logic.
 * @module acl/locales/es/registerMessages
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export const registerMessages = {
	title: 'Crear Cuenta',
	description: 'Complete los siguientes datos para crear una nueva cuenta.',
	firstName: {
		label: 'Nombre',
		placeholder: 'Ingrese su nombre',
		isInvalid: {
			required: 'El nombre es requerido',
		},
	},
	lastName: {
		label: 'Apellido',
		placeholder: 'Ingrese su apellido',
		isInvalid: {
			required: 'El apellido es requerido',
		},
	},
	phone: {
		label: 'Número de Teléfono',
		placeholder: 'Ingrese su número de teléfono',
		isInvalid: {
			required: 'El número de teléfono es requerido',
			invalid: 'El número de teléfono es inválido',
		},
	},
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
	confirmPassword: {
		label: 'Confirmar Contraseña',
		placeholder: 'Confirme su contraseña',
		isInvalid: {
			required: 'La confirmación de la contraseña es requerida',
			match: 'Las contraseñas no coinciden',
		},
	},
	terms: {
		label: 'He leído y acepto los',
		term: 'términos',
		and: 'y',
		condition: 'condiciones',
		isInvalid: {
			required: 'Debe aceptar los términos y condiciones',
		},
	},
	submit: 'Crear Cuenta',
	footer: {
		description: '¿Ya tienes una cuenta?',
		login: 'Iniciar Sesión',
	},
	errors: {
		username_already_exists: {
			title: 'Ops, Error',
			description:
				'El nombre de usuario ya está registrado. Por favor, use otro correo o intente iniciar sesión.',
		},
		email_already_exists: {
			title: 'Ops, Error',
			description:
				'El correo electrónico ya está registrado. Por favor, use otro correo o intente iniciar sesión.',
		},
		weak_password: {
			title: 'Ops, Contraseña débil',
			description:
				'La contraseña ingresada es demasiado débil. Por favor, elija una contraseña más segura.',
		},
		network_error: {
			title: 'Ops, Error de red',
			description:
				'No se pudo conectar con el servidor. Por favor, revise su conexión a Internet e intente de nuevo.',
		},
		server_error: {
			title: 'Ops, Error del servidor',
			description:
				'Ocurrió un error en el servidor. Por favor, intente más tarde.',
		},
	},
};
