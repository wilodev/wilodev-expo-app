/**
 * @fileOverview UISlice
 * @description Slice for managing UI related state within the Redux store.
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

interface UIState {
	loading: boolean;
	error: {
		message: string;
		title: string;
	};
}

const initialState: UIState = {
	loading: false,
	error: {
		message: '',
		title: '',
	},
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		// Action to set the loading state. True to show loading, false to hide.
		setLoading(state, action: PayloadAction<boolean>) {
			state.loading = action.payload;
		},
		setError(state, action: PayloadAction<{ message: string; title: string }>) {
			state.error = action.payload;
		},
		setClearError(state) {
			state.error = {
				message: '',
				title: '',
			};
		},
	},
});

export const { setLoading, setError, setClearError } = uiSlice.actions;

// Return selector for Error and ClearError states
export const selectError = (state: AppState) => state.ui.error;
export const selectClearError = (state: AppState) => state.ui.error;
// Return selector for Loading state
export const selectLoading = (state: AppState) => state.ui.loading;

export default uiSlice.reducer;
