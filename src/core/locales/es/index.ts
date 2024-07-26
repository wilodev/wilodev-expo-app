/**
 * @fileOverview Spanish Translation Index
 * @description This file aggregates and exports all Spanish translation messages used across the application.
 *              It combines global translation messages with module-specific messages (like ACL) to provide
 *              a comprehensive set of Spanish translations. This centralization facilitates the management
 *              and usage of translation resources within the application.
 * @module shared/locales/es
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { aclMessages } from '@/acl/locales/es';
import { commonsMessages } from '@/commons/locales/es';

// Global Spanish translation messages
const globalMessages = {
	// Define global translation keys and messages here
	app: {
		name: 'Freestics',
		welcome: 'Bienvenido a nuestra aplicación',
		goodbye: 'Gracias por visitarnos',
	},
	notifications: {
		read: 'Leído',
		unread: 'No leído',
		archived: 'Archivado',
		contactAddedTitle: 'Contacto Añadido',
		contactAddedMessage: 'El contacto {name} ha sido añadido exitosamente.',
		contactExistsTitle: 'Contacto Existente',
		contactExistsMessage:
			'El contacto {name} ya existe en su lista de contactos.',
		permissionDeniedTitle: 'Permiso Denegado',
		permissionDeniedMessage:
			'No se ha concedido el permiso para {action}. Por favor, habilita en la configuración.',
		openSettings: 'Abrir Configuración',
		cancel: 'Cancelar',
	},
	contacts: {
		permissionTitle: 'Permiso para Contactos',
		permissionMessage: 'Necesitamos acceso a sus contactos para {action}.',
		buttonAccept: 'Aceptar',
		readAction: 'leer sus contactos',
		writeAction: 'escribir en sus contactos',
		errorTitle: 'Error',
		errorMessage: 'Hubo un problema al acceder a sus contactos.',
		contactAddedTitle: 'Contacto Añadido',
		contactAddedMessage: 'El contacto {name} ha sido añadido exitosamente.',
		contactExistsTitle: 'Contacto Existente',
		contactExistsMessage:
			'El contacto {name} ya existe en su lista de contactos.',
		permissionDeniedTitle: 'Permiso Denegado',
		permissionDeniedMessage:
			'No se ha concedido el permiso para {action}. Por favor, habilita en la configuración.',
		openSettings: 'Abrir Configuración',
		cancel: 'Cancelar',
	},
	errors: {
		title: 'Ops, Error',
		genericError: 'Algo salió mal. Por favor, inténtelo de nuevo.',
		networkError:
			'No hay conexión a internet. Por favor, revise su conexión y vuelva a intentarlo.',
		badRequest:
			'Solicitud incorrecta. Por favor, revise los datos e inténtelo de nuevo.',
		failedFetch: 'No se pudo obtener los datos. Por favor, inténtelo de nuevo.',
		// Error 500 messages
		internalServerError:
			'Error interno del servidor. Inténtelo de nuevo más tarde.',
		serverError: 'Error del servidor. Inténtelo de nuevo más tarde.',
		// Error 401 messages
		unauthorized: 'No autorizado. Por favor, inicie sesión para continuar.',
		// Error 403 messages
		forbidden: 'Prohibido. No tiene permiso para acceder a esta página.',
		// Error 404 messages
		notFound: 'El recurso solicitado no se ha encontrado.',
	},
	// Define global translation keys and messages here
	alerts: {
		confirm: 'Confirmar',
		cancel: 'Cancelar',
		ok: 'Aceptar',
	},
};

//Combining ACL and other module-specific messages with global messages
export const esMessages = {
	...globalMessages,
	aclMessages: { ...aclMessages }, // Incorporating ACL module-specific messages
	commonsMessages: { ...commonsMessages }, // Language
};
