/**
 * @fileOverview InitAppSlice
 * @description Slice for managing InitApp related state within the Redux store.
 *              This includes states like loading indicators, which can be used
 *              across the application to show/hide loading spinners or progress bars.
 *              The setLoading action allows for easy toggling of this state.
 *              It's part of the global state management using Redux Toolkit.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '@/state/store';

interface InitAppState {
	language: string;
	showOnboarding: boolean;
}

const initialState: InitAppState = {
	language: 'es',
	showOnboarding: false,
};

const initAppSlice = createSlice({
	name: 'initApp',
	initialState,
	reducers: {
		setLanguage(state, action: PayloadAction<string>) {
			state.language = action.payload;
		},
		setShowOnboarding(state, action: PayloadAction<boolean>) {
			state.showOnboarding = action.payload;
		},
	},
});

export const { setLanguage, setShowOnboarding } = initAppSlice.actions;

// Return selector for the language state
export const selectLanguage = (state: AppState) => state.initApp.language;
// Return selector for the showOnboarding state
export const selectShowOnboarding = (state: AppState) =>
	state.initApp.showOnboarding;

export default initAppSlice.reducer;
