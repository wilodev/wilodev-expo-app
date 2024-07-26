/**
 * @fileOverview User Account Stack Navigator
 * @description This file contains the configuration for the stack navigator used within the User Account section.
 *              It defines the navigation flow and screens related to user account management such as viewing the profile,
 *              changing password, etc. This navigator is part of the authenticated area of the application, accessible only
 *              after successful user login.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SettingsScreen } from 'src/apps/settings';

export type UserAccountStackParamList = {
	SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<UserAccountStackParamList>();

const SettingsStackNavigator: React.FC = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SettingsScreen"
				component={SettingsScreen}
				options={{ title: 'Mi Cuenta' }}
			/>
		</Stack.Navigator>
	);
};

export default SettingsStackNavigator;
