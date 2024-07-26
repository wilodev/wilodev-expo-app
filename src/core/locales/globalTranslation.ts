/**
 * @fileOverview Global Translation Helper
 * @description Provides a global translation function to access translations throughout the application.
 *              This file defines a helper function that wraps the i18next translation functionality,
 *              allowing for easy retrieval of translated strings using translation keys.
 *              It abstracts the direct usage of i18next, providing a more straightforward and
 *              consistent way to perform translations across different parts of the application.
 *              This utility can be used in contexts where React components or hooks are not applicable.
 * @module shared/locales/globalTranslate
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import i18n from './next-i18next.config';

/**
 * Translates a given key using the current language's translation resources.
 * This function interfaces with the i18next instance to fetch the translation
 * for a specified key. It's designed to be used in non-component contexts,
 * providing a unified approach to accessing translations.
 *
 * @param key The key for the text to be translated.
 * @returns The translated string corresponding to the given key.
 */
export const translate = (key: string): string => {
	return i18n.t(key);
};
