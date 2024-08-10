/**
 * @fileOverview TextInput Component
 * @description This component extends the BaseInput component specifically for email entry.
 *              It sets default properties appropriate for email input fields to enhance user experience
 *              and input accuracy on mobile devices.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { TextInputProps } from './types';
import { BaseInput } from '../BaseInput';

/**
 * TextInput component to encapsulate the functionality of app.
 * @param {TextInputProps} props - Props for the base input component.
 * @returns {JSX.Element} - The rendered base input element.
 */
const TextInput: React.FC<TextInputProps> = ({ placeholder, ...props }) => {
	return (
		<BaseInput
			placeholder={placeholder}
			autoCapitalize="sentences"
			keyboardType="default"
			autoComplete="off"
			inputMode="text"
			enterKeyHint="next"
			returnKeyType="next"
			autoCorrect={false}
			{...props}
		/>
	);
};

export default TextInput;
