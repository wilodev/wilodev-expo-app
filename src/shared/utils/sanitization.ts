/**
 * @fileOverview Input Sanitization Utilities
 * @description This module provides utility functions for sanitizing user input to prevent injection attacks.
 *              It centralizes sanitization logic to ensure consistency and ease of maintenance.
 * @module utils/sanitization
 * @category Utilities
 * @component Utility
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import DOMPurify from 'dompurify';

/**
 * Sanitizes a string by removing potentially dangerous characters or scripts.
 * @function sanitizeInput
 * @param {string} input - The input string to sanitize.
 * @returns {string} - The sanitized string.
 */
export const sanitizeInput = (input: string): string => {
	return DOMPurify.sanitize(input);
};

/**
 * Sanitizes an object by applying the sanitization function to each string property.
 * @function sanitizeObject
 * @param {object} obj - The object to sanitize.
 * @returns {object} - The sanitized object.
 */
export const sanitizeObject = (
	obj: Record<string, unknown>
): Record<string, unknown> => {
	const sanitizedObj: Record<string, unknown> = {};
	for (const key in obj) {
		if (typeof obj[key] === 'string') {
			sanitizedObj[key] = sanitizeInput(obj[key]);
		} else if (typeof obj[key] === 'object') {
			sanitizedObj[key] = sanitizeObject(obj[key] as Record<string, unknown>);
		} else {
			sanitizedObj[key] = obj[key];
		}
	}
	return sanitizedObj;
};
