/**
 * @fileOverview BiometricAuth Interface and Abstract Class
 * @description This file contains the interface and abstract class for biometric authentication.
 *              It provides a contract for different biometric authentication implementations.
 * @module core/biometric
 * @category Core
 * @component Utility
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export interface IBiometricAuth {
	isSupported(): Promise<boolean>;
	authenticate(reason: string): Promise<void>;
}

export abstract class BiometricAuth implements IBiometricAuth {
	abstract isSupported(): Promise<boolean>;
	abstract authenticate(reason: string): Promise<void>;
}
