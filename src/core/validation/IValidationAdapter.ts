/**
 * @fileOverview Validation Adapter Interface
 * @description Provides the IValidationAdapter interface which defines essential methods
 *              for a validation adapter. This interface ensures a consistent approach
 *              to handling validation logic across various libraries like Yup or Zod.
 *              It abstracts validation processes, providing methods for schema setup,
 *              data validation, and error retrieval.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { ValidationSchema } from './ValidationSchema';

export interface IValidationAdapter<T extends object> {
	/**
	 * Sets the validation schema in the adapter.
	 * @param {ValidationSchema} schema - The validation schema to be used for data validation.
	 */
	setSchema(schema: ValidationSchema<T>): void;

	/**
	 * Validates the given data against the schema.
	 * @param {T} data - The data to be validated.
	 * @returns {Promise<void>} - A promise that resolves if the validation is successful, or rejects with errors.
	 */
	validate(data: T): Promise<void>;

	/**
	 * Retrieves validation errors after validation.
	 * @returns {Record<string, string> | null} - An object containing validation errors, or null if no errors.
	 */
	getErrors(): Record<string, string> | null;
}
