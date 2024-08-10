/**
 * @fileOverview WhatsApp Utility
 * @description This file contains the utility function to open WhatsApp with a pre-filled message.
 *              It is part of the utilities within the wilodev-app project.
 *              This utility is used to construct the WhatsApp URL and open the WhatsApp application with the specified message.
 * @file whatsapp.ts
 * @location src/shared/utils/whatsapp.ts
 * @type UTILITY
 * @function openWhatsApp
 * @module util
 * @category Utilities
 * @subcategory Communication
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { Linking } from 'react-native';

/**
 * Opens WhatsApp with a pre-filled message and a deep link.
 * @param phoneNumber - The recipient's phone number in international format.
 * @param message - The message to send.
 * @param code - The verification code to include in the deep link.
 * @param screen - The screen to navigate back to ('ActivationCodeScreen' or 'ResetCodeScreen').
 */
export const openWhatsApp = (
	phoneNumber: string,
	message: string,
	code: string
) => {
	const fullMessage = `${message}\n\n\n\n ${code}`;
	const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
	Linking.openURL(url).catch((err) => console.error('An error occurred', err));
};
