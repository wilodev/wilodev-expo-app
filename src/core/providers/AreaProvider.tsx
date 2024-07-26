/**
 * @fileOverview UIProvider Component
 * @description This component provides a context for UI components using the React Native library.
 *              It wraps the application with the PaperProvider to ensure a consistent theme and styling
 *              across all UI components. This abstraction facilitates the use of React Native features
 *              and components throughout the app.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { PropsWithChildren, ReactNode } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * AreaProvider component to provide React Native context.
 * @param {PropsWithChildren} props - Props for the PropsWithChildren component.
 * @returns {ReactNode} - The rendered PaperProvider component wrapping the application.
 */
const AreaProvider: React.FC<PropsWithChildren> = ({ children }): ReactNode => {
	return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default AreaProvider;
