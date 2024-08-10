/**
 * @fileOverview App Component
 * @description This file defines the App component, which is the root component of the application.
 *              It handles the application's theme, including the status bar style and
 *              the safe area's appearance based on the selected theme (dark or light).
 *              The App component integrates the primary navigation system of the application
 *              using AppNavigator.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { useEffect } from 'react';

import { AppState, useColorScheme } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

import { OnboardingScreen } from '@/init/screens/OnboardingScreen';
import { Box } from '@/ui/Box';

import { useInitConfig } from './core/config/useInitConfig';
import { AppNavigator } from './navigation';
import { getSafeAreaProviderStyles } from './shared/theme/utils/stylesUtils';

// Main component: the root component for the application.
export function Main(): React.JSX.Element {
	// Detects the color scheme (dark or light) for theme purposes.
	const isDarkMode = useColorScheme() === 'dark';
	// Retrieves the appropriate style for the safe area based on the theme.
	const safeAreaStyles = getSafeAreaProviderStyles(isDarkMode);
	// Initializes the application.
	const {
		state: { isReady, showOnboarding, error },
		actions,
	} = useInitConfig();
	useEffect(() => {
		if (actions?.onAppStateChange) {
			const subscription = AppState.addEventListener(
				'change',
				actions.onAppStateChange
			);
			return () => subscription.remove();
		}
	}, [actions]);

	if (!isReady) {
		return <Box bg={'$backgroundLight'} $dark-bg={'$backgroundDark'} />;
	}
	if (error) {
		return <Box>{error.message}</Box>;
	}
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider style={safeAreaStyles}>
				<StatusBar style="auto" />
				{showOnboarding ? <OnboardingScreen /> : <AppNavigator />}
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
}
