/**
 * @file initConfig.ts
 * @description Initial configuration setup for the application including network state listener, font loading, and language settings.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { AppState, Platform } from 'react-native';

import { Dispatch } from '@reduxjs/toolkit';
import { focusManager, onlineManager } from '@tanstack/react-query';

import { SecureStorage } from '@/lib/storage';
import { NetworkProvider } from '@/providers/index';
import { clearAuth, setAuth } from '@/state/actions';

interface InitConfigParams {
	dispatch: Dispatch;
}

const setupNetworkListener = () => {
	onlineManager.setEventListener((setOnline) => {
		return NetworkProvider.addEventListener((state) => {
			setOnline(!!state.isConnected);
		});
	});
};

const setupFocusManager = () => {
	const onAppStateChange = (status: string) => {
		if (Platform.OS !== 'web') {
			focusManager.setFocused(status === 'active');
		}
	};

	AppState.addEventListener('change', onAppStateChange);
	return onAppStateChange;
};

export const initConfig = async ({
	dispatch,
}: InitConfigParams): Promise<{
	state: boolean;
	actions?: { onAppStateChange: (status: string) => void };
}> => {
	try {
		// Set up network state listener
		setupNetworkListener();
		// Verify Auth State
		const auth = await SecureStorage.getItem('access_token');
		if (auth) {
			dispatch(setAuth());
		} else {
			dispatch(clearAuth());
		}
		// Set up focus manager and return the handler
		const onAppStateChange = setupFocusManager();

		return { state: true, actions: { onAppStateChange } };
	} catch (error) {
		console.error('Error initializing app:', error);
		return { state: false };
	}
};
