/**
 * @fileOverview Yup Schema Adapter
 * @description Transforms a generic validation schema into a Yup-compatible schema.
 *              This adapter enables the usage of a unified validation schema across different
 *              parts of the application, leveraging the features of Yup for data validation.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import * as Yup from 'yup';
import YupPassword from 'yup-password';

import { ValidationSchema } from '../ValidationSchema';

YupPassword(Yup); // Extends Yup with password validation functionality.
export function convertToYupSchema<T extends object>(
	validationSchema: ValidationSchema<T>
): Yup.ObjectSchema<Partial<T>> {
	// Creates an empty object to store the Yup schema.
	// const yupSchema: Record<keyof T, Yup.AnySchema | undefined> = {};
	const yupSchema = (Object.keys(validationSchema) as (keyof T)[]).reduce<
		Record<keyof T, Yup.AnySchema | undefined>
	>(
		(acc, key) => {
			acc[key] = undefined; // Establece cada clave a undefined inicialmente
			return acc;
		},
		{} as Record<keyof T, Yup.AnySchema | undefined>
	);
	// Iterates over each rule in the generic validation schema and converts it to Yup rules.
	(Object.keys(validationSchema) as (keyof T)[]).forEach((key) => {
		const rule = validationSchema[key];
		//let validator = Yup.string(); // Validation rule for the current field.
		let validator: Yup.StringSchema = Yup.string();
		if (rule?.required) {
			const message =
				typeof rule.required === 'string'
					? rule.required
					: 'This field is required';
			validator = validator.required(message);
		}
		if (rule?.email) {
			const message =
				typeof rule.email === 'string' ? rule.email : 'Invalid email format';
			validator = validator.email(message);
		}
		if (rule?.minLength) {
			const { value, message } =
				typeof rule.minLength === 'object'
					? rule.minLength
					: {
							value: rule.minLength,
							message: `Should be at least ${rule.minLength} characters`,
						};
			validator = validator.min(value, message);
		}
		if (rule?.maxLength) {
			const { value, message } =
				typeof rule.maxLength === 'object'
					? rule.maxLength
					: {
							value: rule.maxLength,
							message: `Should be no more than ${rule.maxLength} characters`,
						};
			validator = validator.max(value, message);
		}
		if (rule?.isString) {
			if (rule.isString.minLength) {
				const { value, message } =
					typeof rule.isString.minLength === 'object'
						? rule.isString.minLength
						: {
								value: rule.isString.minLength,
								message: `Should be at least ${rule.isString.minLength} characters`,
							};
				validator = validator.min(value, message);
			}
			if (rule.isString.maxLength) {
				const { value, message } =
					typeof rule.isString.maxLength === 'object'
						? rule.isString.maxLength
						: {
								value: rule.isString.maxLength,
								message: `Should be no more than ${rule.isString.maxLength} characters`,
							};
				validator = validator.max(value, message);
			}
			validator = validator.matches(
				/^[a-zA-Z\s]+$/,
				rule.isString.message || 'Only alphabetic characters are allowed'
			);
		}
		if (rule?.isPhone) {
			validator = validator.matches(
				/^[0-9]+$/,
				rule.isPhone.message || 'Invalid phone number format'
			);

			if (rule.isPhone.minLength) {
				const { value, message } =
					typeof rule.isPhone.minLength === 'object'
						? rule.isPhone.minLength
						: {
								value: rule.isPhone.minLength,
								message: `Must be at least ${rule.isPhone.minLength} characters`,
							};
				validator = validator.min(value, message);
			}
			if (rule.isPhone.maxLength) {
				const { value, message } =
					typeof rule.isPhone.maxLength === 'object'
						? rule.isPhone.maxLength
						: {
								value: rule.isPhone.maxLength,
								message: `Must be no more than ${rule.isPhone.maxLength} characters`,
							};
				validator = validator.max(value, message);
			}
			if (rule.isPhone.pattern) {
				const { value, message } =
					typeof rule.isPhone.pattern === 'object'
						? rule.isPhone.pattern
						: {
								value: rule.isPhone.pattern,
								message: `Must be no more than ${rule.isPhone.pattern} characters`,
							};
				validator = validator.matches(value, message);
			}
		}
		if (rule?.isPassword) {
			validator = Yup.string().password();

			if (typeof rule.isPassword.maxLength === 'object') {
				validator = validator.max(
					rule.isPassword.maxLength.value,
					rule.isPassword.maxLength.message
				);
			} else if (typeof rule.isPassword.maxLength === 'number') {
				validator = validator.max(
					rule.isPassword.maxLength,
					`Password must be no more than ${rule.isPassword.maxLength} characters long`
				);
			}

			if (typeof rule.isPassword.minUppercase === 'object') {
				validator = validator.minUppercase(
					rule.isPassword.minUppercase.value,
					rule.isPassword.minUppercase.message
				);
			} else if (typeof rule.isPassword.minUppercase === 'number') {
				validator = validator.minUppercase(
					rule.isPassword.minUppercase,
					`Password must have at least ${rule.isPassword.minUppercase} uppercase characters`
				);
			}

			if (typeof rule.isPassword.minLowercase === 'object') {
				validator = validator.minLowercase(
					rule.isPassword.minLowercase.value,
					rule.isPassword.minLowercase.message
				);
			} else if (typeof rule.isPassword.minLowercase === 'number') {
				validator = validator.minLowercase(
					rule.isPassword.minLowercase,
					`Password must have at least ${rule.isPassword.minLowercase} lowercase characters`
				);
			}

			if (typeof rule.isPassword.minNumbers === 'object') {
				validator = validator.minNumbers(
					rule.isPassword.minNumbers.value,
					rule.isPassword.minNumbers.message
				);
			} else if (typeof rule.isPassword.minNumbers === 'number') {
				validator = validator.minNumbers(
					rule.isPassword.minNumbers,
					`Password must have at least ${rule.isPassword.minNumbers} numbers characters`
				);
			}

			if (typeof rule.isPassword.minSymbols === 'object') {
				validator = validator.minSymbols(
					rule.isPassword.minSymbols.value,
					rule.isPassword.minSymbols.message
				);
			} else if (typeof rule.isPassword.minSymbols === 'number') {
				validator = validator.minSymbols(
					rule.isPassword.minSymbols,
					`Password must have at least ${rule.isPassword.minSymbols} symbols characters`
				);
			}

			if (typeof rule.isPassword.minLength === 'object') {
				validator = validator.min(
					rule.isPassword.minLength.value,
					rule.isPassword.minLength.message
				);
			} else if (typeof rule.isPassword.minLength === 'number') {
				validator = validator.min(
					rule.isPassword.minLength,
					`Password must be at least ${rule.isPassword.minLength} characters long`
				);
			}
		}
		if (rule?.isRepeatPassword) {
			validator = validator.oneOf(
				[Yup.ref(rule.isRepeatPassword.reference)],
				rule.isRepeatPassword.message || 'Passwords must match'
			);
		}

		// if (rule?.isChecked) {
		// 	const message
		// 		= typeof rule.isChecked === 'string' ? rule.isChecked : 'This field must be checked';
		// 	validator = validator.oneOf([true], message);
		// }

		// Assigns the configured validator to the corresponding field in the Yup schema.
		yupSchema[key] = validator;
	});
	// Returns the complete Yup schema.
	return Yup.object().shape(
		yupSchema as { [K in keyof T]: Yup.AnySchema }
	) as Yup.ObjectSchema<Partial<T>>;
}
