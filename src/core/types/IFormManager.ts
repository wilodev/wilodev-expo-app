/**
 * @fileOverview Form Manager Interface
 * @description Interface for form manager that abstracts form handling logic, suitable for libraries like react-hook-form or Formik.
 *              This interface allows for easy integration and switching between different form management libraries,
 *              minimizing impact on the components. It includes methods for handling changes, blur events, form submission,
 *              and error tracking.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

export type FieldState<T> = Record<
	keyof T,
	{ isInvalid: boolean; isTouched: boolean; isDirty: boolean }
>;

export interface IFormManager<T> {
	values: T; // Current form values
	fieldStates: FieldState<T>; // Form field states (touched, dirty, invalid)
	handleChange: <K extends keyof T>(field: K) => (value: T[K]) => void; // Method to handle changes in form fields
	handleBlur: <K extends keyof T>(field: K) => () => void; // Method to handle onBlur events
	handleSubmit: (callback: (values: T) => void) => () => void; // Method to handle form submission
	handleFocus: <K extends keyof T>(field: K) => () => void; // Method to handle onFocus events
	errors: Partial<Record<keyof T, string>>; // Form error messages
}
