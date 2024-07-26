/**
 * @fileOverview Redux Hooks
 * @description Custom hooks for interacting with the Redux store.
 *              These hooks abstract the Redux store interaction, allowing for easy access
 *              to state and dispatch functionality within the components.
 *              This approach also facilitates switching to different state management solutions
 *              in the future if needed.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import type { AppState, AppDispatch } from './store';

// Custom hook for dispatch actions. Enhances useDispatch with the AppDispatch type.
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom hook for selecting state. Enhances useSelector with AppState type for better type safety.
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
