/**
 * @fileOverview useForgotPasswordOptions Hook
 * @description This custom hook is designed to handle forgot password options.
 *              It is part of the wilodev-app project and follows the standard hook structure,
 *              providing both state and actions for managing forgot password functionality.
 *              This hook is designed to be reusable across various parts of the application.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useState } from 'react';

import { useTranslationApp } from '@/locales/useTranslationApp';
import { checkAppContact } from '@/shared/utils/contactUtils';

import { useACLNavigation } from './useACLNavigation';

/**
 * Custom hook to manage forgot password options.
 * @returns {object} State and actions related to forgot password options.
 */
export const useForgotPasswordOptions = () => {
	// Create a new state to store whether we can send the forgot password
	const [canSendForgotPassword, setCanSendForgotPassword] =
		useState<boolean>(false);
	const {
		actions: { handleBack, handleForgotPassword, handleForgotPasswordWhatsApp },
	} = useACLNavigation();
	const {
		actions: { t },
	} = useTranslationApp();

	const handleAddContact = async () => {
		try {
			const canProceed = await checkAppContact(t);
			setCanSendForgotPassword(canProceed);
		} catch (error) {
			console.error('Error adding contact:', error);
		}
	};

	return {
		state: { canSendForgotPassword },
		actions: {
			t,
			handleAddContact,
			handleBack,
			handleForgotPassword,
			handleForgotPasswordWhatsApp,
		},
	};
};
