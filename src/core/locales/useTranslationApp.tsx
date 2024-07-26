/**
 * @fileOverview useTranslationApp Hook
 * @description This custom hook provides a convenient interface for using the translation
 *              functionalities from react-i18next in your React Native  application.
 *              It encapsulates the state and actions related to translation, making it
 *              easier to use and maintain translation logic across your app.
 * @module Hooks
 * @category Hooks
 * @component HOOK
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useTranslation } from 'react-i18next';

import { i18n } from 'i18next';

import { HookOutput } from '@/sharedTypes/hook';

/**
 * Represents the state structure provided by the useTranslationApp hook.
 */
interface TranslationStateHook {
	/**
	 * Indicates whether the translation resources are ready to be used.
	 */
	ready: boolean;
}

/**
 * Represents the actions structure provided by the useTranslationApp hook.
 */
interface TranslationActionsHook {
	/**
	 * A function to get the translated string for the given translation key.
	 * @param key The translation key to translate.
	 * @param options Optional parameters for interpolation.
	 * @returns The translated string.
	 */
	t: (key: string, options?: Record<string, unknown>) => string;

	/**
	 * The i18next instance, providing access to i18next functionalities.
	 */
	it: i18n;
}

/**
 * A custom hook for handling translations in a React Native  application.
 * This hook abstracts the complexity of directly interacting with the i18next API
 * and provides a simplified interface for translations and configuration.
 *
 * @returns An object containing the translation state and actions.
 */
export const useTranslationApp = (): HookOutput<
	TranslationStateHook,
	TranslationActionsHook
> => {
	const { t, i18n: it, ready } = useTranslation();

	return {
		state: { ready },
		actions: { t, it },
	};
};
