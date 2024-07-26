/**
 * @fileOverview Authentication Navigation Hooks
 * @description This file contains custom hooks related to navigation within the authentication flow of the application.
 *              It utilizes '@react-navigation/native' to provide a convenient and consistent way to navigate across
 *              different screens in the authentication stack. These hooks simplify navigation logic and improve
 *              code readability, ensuring easy maintenance and scalability.
 * @file hooks.ts
 * @type HOOK
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import {
	NavigationProp,
	useNavigation,
	useRoute,
} from '@react-navigation/native';

import { ACLStackParamList, AuthRouteProp } from './ACL/type';

/**
 * Custom hook to access the navigation object specific to the authentication flow.
 * @returns {NavigationProp<ACLStackParamList>} The navigation prop with type safety for the authentication stack.
 */
export const useAuthNavigation = (): NavigationProp<ACLStackParamList> => {
	const navigation: NavigationProp<ACLStackParamList> = useNavigation();
	return navigation;
};

/**
 * Custom hook to type-check the route parameters for the authentication flow.
 * @returns {RouteProp<ACLStackParamList, keyof ACLStackParamList>} The route prop with type safety.
 */
export const useAuthRoute = <
	T extends keyof ACLStackParamList,
>(): AuthRouteProp<T> => {
	return useRoute<AuthRouteProp<T>>();
};
