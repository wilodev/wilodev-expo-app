/**
 * @fileOverview UISlice
 * @description Slice for managing UI related state within the Redux store.
 *              This includes states like Auth indicators, which can be used
 *              across the application to show/hide Auth spinners or progress bars.
 *              The setAuth action allows for easy toggling of this state.
 *              It's part of the global state management using Redux Toolkit.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from '@/sharedTypes/user';
import { AppState } from '@/state/store';

const initialState: AuthState = {
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// Action to set the Auth state. True to show Auth, false to hide.
		setAuth(state) {
			state.isAuthenticated = true;
		},
		clearAuth(state) {
			state.isAuthenticated = false;
		},
	},
});

export const { setAuth, clearAuth } = authSlice.actions;
export const selectAuth = (state: AppState) => state.auth;
export default authSlice.reducer;
