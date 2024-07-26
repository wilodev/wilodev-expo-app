/**
 * @fileOverview Translation Context Provider
 * @description Provides a context for accessing the translation services throughout the application.
 *              This file defines the TranslationProvider component which wraps the application
 *              and provides a translation service context, and a custom hook useTranslationService
 *              for accessing the translation functionalities.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { createContext, useContext, ReactNode } from 'react';

import { ITranslationService } from '../locales/ITranslationService';
import i18n from '../locales/next-i18next.config';
import { TranslationService } from '../locales/TranslationService';

const TranslationContext = createContext<ITranslationService | undefined>(
	undefined
);

interface TranslationProviderProps {
	children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
	children,
}) => {
	const translationService = new TranslationService(i18n);

	return (
		<TranslationContext.Provider value={translationService}>
			{children}
		</TranslationContext.Provider>
	);
};

export const useTranslationService = (): ITranslationService => {
	const context = useContext(TranslationContext);
	if (!context) {
		throw new Error(
			'useTranslationService must be used within a TranslationProvider'
		);
	}
	return context;
};
