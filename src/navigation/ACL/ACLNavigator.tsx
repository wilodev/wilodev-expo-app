/**
 * @fileOverview ACLNavigator Component
 * @description This component manages the navigation flow for authentication-related screens.
 *              It defines the stack navigator for login, register, and password recovery screens,
 *              ensuring a clear and manageable authentication flow.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	ActivationCodeScreen,
	ForceChangePasswordScreen,
	ForgotPasswordScreen,
	LoginScreen,
	RegisterScreen,
	ResetCodeScreen,
	ResetPasswordScreen,
	WelcomeScreen,
	ForgotPasswordOptionsScreen,
	PasswordResetSuccessfulScreen,
	ForgotPasswordWhatsAppScreen,
	TermsAndConditionsScreen,
} from '@/acl/index';
import { useThemeColors } from '@/theme/utils/themeHelpers';

import { CountryPhonePrefixScreen } from 'src/apps/commons';

import { ACLStackParamList } from './type';

const Stack = createNativeStackNavigator<ACLStackParamList>();

export const ACLNavigator: React.FC = () => {
	const { backgroundColor, primaryColor } = useThemeColors();
	return (
		<Stack.Navigator
			initialRouteName="LoginScreen"
			screenOptions={{
				headerTitle: '',
				headerBackTitle: '',
				headerTintColor: primaryColor,
				headerStyle: {
					backgroundColor: backgroundColor,
				},
				headerShadowVisible: false,
				headerShown: false,
				animation: 'slide_from_right',
				animationTypeForReplace: 'pop',
			}}>
			<Stack.Group>
				<Stack.Screen
					name="ActivationCodeScreen"
					component={ActivationCodeScreen}
					options={{
						headerLeft: () => null,
						gestureEnabled: false,
					}}
				/>
				<Stack.Screen
					name="ForceChangePasswordScreen"
					component={ForceChangePasswordScreen}
					options={{
						headerLeft: () => null,
						gestureEnabled: false,
					}}
				/>
				<Stack.Screen
					name="ForgotPasswordScreen"
					component={ForgotPasswordScreen}
				/>
				<Stack.Screen
					name="ForgotPasswordOptionsScreen"
					component={ForgotPasswordOptionsScreen}
				/>
				<Stack.Screen
					name="ForgotPasswordWhatsAppScreen"
					component={ForgotPasswordWhatsAppScreen}
				/>
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
				<Stack.Screen
					name="ResetCodeScreen"
					component={ResetCodeScreen}
					options={{
						headerLeft: () => null,
						gestureEnabled: false,
					}}
				/>
				<Stack.Screen
					name="PasswordResetSuccessfulScreen"
					component={PasswordResetSuccessfulScreen}
					options={{
						headerLeft: () => null,
						gestureEnabled: false,
					}}
				/>

				<Stack.Screen
					name="ResetPasswordScreen"
					component={ResetPasswordScreen}
					options={{
						headerLeft: () => null,
						gestureEnabled: false,
					}}
				/>
				<Stack.Screen
					name="WelcomeScreen"
					component={WelcomeScreen}
					options={{
						headerLeft: () => null,
						gestureEnabled: false,
					}}
				/>
			</Stack.Group>
			<Stack.Group
				screenOptions={{ presentation: 'modal', gestureEnabled: false }}>
				<Stack.Screen
					name="CountryPhonePrefixScreen"
					component={CountryPhonePrefixScreen}
					options={{
						headerLeft: () => null,
						gestureEnabled: false,
					}}
				/>
				<Stack.Screen
					name="TermsAndConditionsScreen"
					component={TermsAndConditionsScreen}
					options={{
						headerLeft: () => null,
						gestureEnabled: false,
					}}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};
