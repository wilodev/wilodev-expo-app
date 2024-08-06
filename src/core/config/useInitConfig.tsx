/**
 * @file useInitConfig.ts
 * @description Initial configuration setup for the application including network state listener, font loading, and language settings.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useCallback, useEffect, useState } from 'react';

import { AppState, Platform } from 'react-native';

import { focusManager, onlineManager } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';

import { SecureStorage } from '@/lib/storage';
import { NetworkProvider } from '@/providers/index';
import { clearAuth, selectShowOnboarding, setAuth } from '@/state/actions';
import { useAppDispatch, useAppSelector } from '@/state/hook';

import { useLoadFonts } from './useLoadFonts';

SplashScreen.preventAutoHideAsync();

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
interface UseInitConfigResult {
	state: {
		isReady: boolean;
		showOnboarding: boolean;
		error: null | Error;
	};
	actions?: { onAppStateChange: (status: string) => void };
}

export const useInitConfig = (): UseInitConfigResult => {
	const [isReady, setIsReady] = useState<boolean>(false);
	const [actions, setActions] = useState<
		{ onAppStateChange: (status: string) => void } | undefined
	>(undefined);
	const [error, setError] = useState<Error | null>(null);
	const dispatch = useAppDispatch();
	const { loaded: fontsLoaded, error: fontsError } = useLoadFonts();
	const showOnboarding = useAppSelector(selectShowOnboarding);

	const init = useCallback(async () => {
		if (fontsError) {
			console.error('Error loading fonts:', fontsError);
			setError(fontsError);
			setIsReady(false);
			return;
		}
		if (!fontsLoaded) {
			return; // No hacemos nada hasta que las fuentes estén cargadas.
		}

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
			setIsReady(true);
			setActions({ onAppStateChange });
		} catch (error) {
			console.error('Error initializing app:', error);
			setError(error as Error);
			setIsReady(false);
		}
	}, [dispatch, fontsLoaded, fontsError]);

	useEffect(() => {
		init();
	}, [init]);

	useEffect(() => {
		if (isReady || error) {
			SplashScreen.hideAsync();
		}
	}, [isReady, error]);

	return { state: { isReady, showOnboarding, error: fontsError }, actions };
};
