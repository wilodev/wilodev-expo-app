/**
 * @fileOverview ExpoBiometricAuth
 * @description This file contains the implementation of the BiometricAuth class using expo-local-authentication.
 * @module core/biometric
 * @category Core
 * @component Utility
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import * as LocalAuthentication from 'expo-local-authentication';

import { BiometricAuth } from './BiometricAuth';

class ExpoBiometricAuth extends BiometricAuth {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor() {
		super();
	}

	async isSupported(): Promise<boolean> {
		const hasHardware = await LocalAuthentication.hasHardwareAsync();
		const isEnrolled = await LocalAuthentication.isEnrolledAsync();
		return hasHardware && isEnrolled;
	}

	async authenticate(reason: string): Promise<void> {
		const result = await LocalAuthentication.authenticateAsync({
			promptMessage: reason,
			fallbackLabel: 'Use Passcode',
			disableDeviceFallback: false,
		});
		if (!result.success) {
			throw new Error('Biometric authentication failed');
		}
	}
}

export default ExpoBiometricAuth;
