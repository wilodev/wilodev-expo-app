/**
 * @fileOverview Locales Index
 * @description This file serves as a central hub for exporting all locale files used in the application.
 *              It simplifies the import of locale strings throughout the app and helps maintain a clear structure.
 *              As new locale files are added for different components or screens, they should be exported here.
 *
 *              Example Import:
 *              import { loginFormLocale } from '[Relative Path]/locales';
 *
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { accountActivationMessages } from './accountActivationMessages';
import { confirmationCodeMessages } from './confirmationCodeMessages';
import { forgotPasswordMessages } from './forgotPasswordMessages';
import { forgotPasswordOptionsMessages } from './forgotPasswordOptionsMessages';
import { forgotPasswordWhatsAppMessages } from './forgotPasswordWhatsAppMessages';
import { loginMessages } from './loginMessages';
import { passwordResetSuccessfulMessages } from './passwordResetSuccessfulMessages';
import { registerMessages } from './registerMessages';
import { resetCodeMessages } from './resetCodeMessages';
import { resetPasswordMessages } from './resetPasswordMessages';
import { welcomeMessages } from './welcomeMessages';

export const aclMessages = {
	login: loginMessages,
	forgotPassword: forgotPasswordMessages,
	forgotPasswordOptions: forgotPasswordOptionsMessages,
	forgotPasswordWhatsApp: forgotPasswordWhatsAppMessages,
	resetCode: resetCodeMessages,
	accountActivation: accountActivationMessages,
	confirmationCode: confirmationCodeMessages,
	register: registerMessages,
	resetPassword: resetPasswordMessages,
	passwordResetSuccessful: passwordResetSuccessfulMessages,
	welcome: welcomeMessages,
};
