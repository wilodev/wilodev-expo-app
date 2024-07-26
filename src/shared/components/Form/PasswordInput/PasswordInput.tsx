/**
 * @fileOverview PasswordInput Component
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

import { PasswordInputProps } from './types';
import { usePassword } from './usePassword';
import { EyeIcon, EyeSlashIcon, LockIcon } from '../../../ui/Icons';
import { BaseInput } from '../BaseInput';

/**
 * PasswordInput component to encapsulate the functionality of app.
 * @param {PasswordInputProps} props - Props for the base input component.
 * @returns {JSX.Element} - The rendered base input element.
 */
const PasswordInput: React.FC<PasswordInputProps> = ({
	label = 'Password',
	placeholder = '***************',
	startIcon,
	endIcon,
	...props
}) => {
	const { showPassword, toggleShowPassword } = usePassword();
	return (
		<BaseInput
			label={label}
			placeholder={placeholder}
			autoCapitalize="none"
			keyboardType="default"
			autoComplete="off"
			inputMode="text"
			textContentType="password"
			enterKeyHint="done"
			returnKeyType="done"
			type={showPassword ? 'text' : 'password'}
			secureTextEntry={!showPassword}
			startIcon={startIcon ?? <LockIcon />}
			endIcon={(endIcon ?? showPassword) ? <EyeSlashIcon /> : <EyeIcon />}
			endIconHandler={toggleShowPassword}
			{...props}
		/>
	);
};

export default PasswordInput;
