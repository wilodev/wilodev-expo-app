/**
 * @fileOverview AppNavigator Component
 * @description This component manages the main navigation of the application.
 *              It sets up the stack navigator and defines the screens for different
 *              parts of the app. It abstracts the navigation logic to ensure a
 *              decoupled and manageable navigation flow.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { DefaultThemeNavigation } from '@/shared/theme/config';
import { useAppSelector } from '@/state/hook';
import { selectAuth } from '@/state/redux';

import { ACLNavigator } from './ACL/ACLNavigator';
import { MainTabNavigator } from './Authenticated/MainTabNavigator';

const AppNavigator: React.FC = () => {
	const linking = {
		prefixes: ['appCommunication://'],
		config: {
			screens: {
				ActivationCodeScreen: {
					path: 'verify/:code',
					parse: {
						code: (code: string) => {
							if (code.startsWith('ACS-')) {
								return code.replace('ACS-', '');
							} else {
								return null;
							}
						},
					},
				},
				ResetCodeScreen: {
					path: 'verify/:code',
					parse: {
						code: (code: string) => {
							if (code.startsWith('RCS-')) {
								return code.replace('RCS-', '');
							} else {
								return null;
							}
						},
					},
				},
			},
		},
	};
	const isAuthenticated = useAppSelector(selectAuth);

	return (
		<NavigationContainer theme={DefaultThemeNavigation} linking={linking}>
			{isAuthenticated.isAuthenticated === false ? (
				<ACLNavigator />
			) : (
				<MainTabNavigator />
			)}
		</NavigationContainer>
	);
};

export default AppNavigator;
