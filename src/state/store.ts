/**
 * @fileOverview Redux Store
 * @description Configuration of the Redux Toolkit store for global state management.
 *              This store integrates different reducers from across the application.
 *              It's set up with Redux Toolkit to simplify Redux usage and enforce best practices.
 *              The store is the centralized location for state management in the application.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { configureStore } from '@reduxjs/toolkit';

import authReducer from './redux/slices/authSlice';
import notificationsReducer from './redux/slices/notificationsSlice';
import uiReducer from './redux/slices/uiSlice';

export const store = configureStore({
	reducer: {
		ui: uiReducer, // Integrating the UI slice reducer.
		auth: authReducer, // Integrating the Auth slice reducer.
		notifications: notificationsReducer, // Integrating the notifications slice reducer.
	},
});

// Typing for the app's state and dispatch to enhance type safety and autocomplete.
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
