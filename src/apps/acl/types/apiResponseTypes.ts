/**
 * @fileOverview Response Types for ACL
 * @description Defines interfaces for API responses in the ACL (Access Control Layer) module.
 *              This includes responses for login, registration, password recovery, etc.
 * @module apps/acl/types/responseTypes
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export interface User {
	id: string;
	email: string;
	name: string;
}

export interface LoginResponse {
	access_token: string;
	refresh_token: string;
	expires_in: number;
}

export interface RegisterResponse {
	success: boolean;
	message: string;
}

export interface PasswordRecoveryResponse {
	success: boolean;
	message: string;
}

export interface ResetPasswordResponse {
	success: boolean;
	message: string;
}

export interface AccountActivationResponse {
	success: boolean;
	message: string;
}
