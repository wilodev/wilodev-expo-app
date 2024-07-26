/**
 * @fileOverview i18n Configuration
 * @description Configures and initializes the i18next library for internationalization in the application.
 *              This setup includes specifying language resources, fallback language, and other
 *              i18next-specific settings. The configuration uses the react-i18next framework
 *              for integration with React components, ensuring a seamless translation experience.
 *              Currently, this configuration includes Spanish translations, with scope for
 *              adding more languages.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { initReactI18next } from 'react-i18next';

import { es } from 'date-fns/locale';
import i18n from 'i18next';

import { esMessages } from './es/index'; // Import Spanish translations

// Defines the resource object for language support
const resources = {
	es: {
		translation: esMessages, // Spanish translations
		dateFns: es,
	},
};

// Initializes i18next with specific configuration
i18n
	.use(initReactI18next) // Integrates i18next with React
	.init({
		compatibilityJSON: 'v3', // Specifies the JSON version compatibility
		resources, // Sets the language resources
		fallbackLng: 'es', // Fallback language: Spanish
		interpolation: {
			escapeValue: false, // Escaping not needed for React
		},
		// Additional configuration options can be added here
	});

export default i18n;
