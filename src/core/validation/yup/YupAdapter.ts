/**
 * @fileOverview Yup Adapter
 * @description Implements the IValidationAdapter interface using the Yup validation library.
 *              This adapter translates a generic validation schema into Yup-specific schema
 *              and executes data validation using Yup functionalities.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import * as Yup from 'yup';

import { convertToYupSchema } from './YupSchemaAdapter';
import { IValidationAdapter } from '../IValidationAdapter';
import { ValidationSchema } from '../ValidationSchema';

export class YupAdapter<T extends object> implements IValidationAdapter<T> {
	// Optional property to hold the Yup validation schema.
	private schema?: Yup.AnySchema;

	private lastErrors: Record<string, string> | null = null;

	// Sets the Yup schema based on the generic validation schema.
	setSchema(validationSchema: ValidationSchema<T>): void {
		this.schema = convertToYupSchema(validationSchema);
	}

	// Validates the data against the Yup schema.
	async validate(data: T): Promise<void> {
		try {
			await this.schema?.validate(data, { abortEarly: false });
			this.lastErrors = null;
		} catch (e) {
			if (e instanceof Yup.ValidationError) {
				this.lastErrors = e.inner.reduce(
					(acc, curr) => {
						// Asegúrate de que curr.path no sea undefined
						if (curr.path) {
							acc[curr.path] = curr.message;
						}

						return acc;
					},
					{} as Record<string, string>
				);
			} else {
				throw e;
			}
			throw new Error('Validation failed');
		}
	}

	getErrors(): Record<string, string> | null {
		return this.lastErrors;
	}
}
