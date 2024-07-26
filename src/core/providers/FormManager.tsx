/**
 * @fileOverview Form Manager Hook
 * @description Provides the useFormManager hook, which interfaces with the React Hook Form Manager.
 *              This hook abstracts form logic, facilitating the integration with different form management solutions.
 *              It utilizes a validation manager to handle form validation, streamlining the process of managing form state and validation.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { FieldValues } from 'react-hook-form';

import { useReactHookFormManager } from './ReactHookFormManager';
import { IFormManager } from '../types/IFormManager';
import { ValidationManager } from '../validation';

export const useFormManager = <T extends FieldValues>(
	defaultValues: T,
	validationManager: ValidationManager<T>
): IFormManager<T> => {
	const validationAdapter = validationManager.getAdapter();
	return useReactHookFormManager(defaultValues, validationAdapter);
};
