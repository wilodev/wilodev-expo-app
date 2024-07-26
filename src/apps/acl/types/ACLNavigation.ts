/**
 * @fileOverview Acl Navigation and Actions
 * @description This file contains type definitions for the state and actions of the navigation.
 *              It is designed to support form management with strong typing, enhancing the
 *              development experience and ensuring robustness. The Acl Navigation interface
 *              describes the structure of the form's state, including field values and validation errors.
 *              Actions interface outlines methods for handling form interactions such as
 *              field changes, submissions, and navigation.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { NavigationProp } from '@react-navigation/native';

import { ACLStackParamList } from '@/navigation/ACL/type';

/**
 * ACLNavigationActions interface provides a set of methods for managing form interactions.
 * It includes functions for handling navigation within the application.
 */
export interface ACLNavigationActions {
	handleForgotPassword: () => void;
	handleForgotPasswordOptions: () => void;
	handleForgotPasswordWhatsApp: () => void;
	handleLogin: () => void;
	handleRegister: () => void;
	handlePhone: (value: string, origin: string) => void;
	handleBack: () => void;
	handleTermsAndConditions: () => void;
	t: (key: string) => string;
	navigation: NavigationProp<ACLStackParamList>;
}
