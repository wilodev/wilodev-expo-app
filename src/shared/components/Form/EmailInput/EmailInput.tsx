/**
 * @fileOverview EmailInput Component
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

import { EmailInputProps } from './types';
import { MailIcon } from '../../../ui/Icons';
import { BaseInput } from '../BaseInput';

/**
 * EmailInput component to encapsulate the functionality of app.
 * @param {EmailInputProps} props - Props for the base input component.
 * @returns {JSX.Element} - The rendered base input element.
 */
const EmailInput: React.FC<EmailInputProps> = ({
	label = 'Email',
	placeholder = 'example@example.com',
	startIcon,
	...props
}) => {
	return (
		<BaseInput
			label={label}
			placeholder={placeholder}
			autoCapitalize="none"
			keyboardType="email-address"
			autoComplete="email"
			inputMode="email"
			autoCorrect={false}
			enterKeyHint="next"
			returnKeyType="next"
			textContentType="emailAddress"
			startIcon={startIcon ?? <MailIcon />}
			{...props}
		/>
	);
};

export default EmailInput;
