/**
 * @fileOverview Hook Output Interface
 * @description This file defines the structure for the output of custom hooks.
 *              It includes the state and actions associated with the hook.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

/**
 * Interface for Hook Output
 * @template TState The type of the state object returned by the hook.
 * @template TActions The type of the actions object returned by the hook.
 * @field state The current state of the hook.
 * @field actions The set of actions that can be performed on the state.
 */
export interface HookOutput<TState = object, TActions = object> {
	state: TState;
	actions: TActions;
}
