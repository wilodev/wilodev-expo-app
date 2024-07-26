/**
 * @fileOverview LoginForm Component
 * @description This file includes the definition and functionality of the LoginForm component.
 *              It is part of the Acl functionality within the wilodev-app project.
 *              This component is responsible for Login form.
 *             Login form and other components to login screen.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { useLoginFormManager } from '@/acl/hooks/useLoginFormManager';
import { EmailInput, PasswordInput } from '@/components/Form';
import { Box, Link, FaceIcon } from '@/shared/ui';
import { Button } from '@/shared/ui/Button';

import { LoginFormProps } from './types';
import { LoginFooter } from '../LoginFooter';

/**
 * LoginForm component to encapsulate the functionality of app.
 * @param {LoginFormProps} props - Props for the login form component.
 * @returns {JSX.Element} - The rendered login form element.
 */
const LoginForm: React.FC<LoginFormProps> = (): React.JSX.Element => {
	const {
		state: {
			fieldStates,
			values,
			errors,
			isLoading,
			biometricEnabled,
			faceIconFill,
		},
		actions: {
			handleChange,
			handleBlur,
			handleFocus,
			handleForgotPasswordOptions,
			t,
			handleRegister,
			handleLoginSubmit,
			handleBiometricLogin,
		},
	} = useLoginFormManager();
	const marginTop =
		errors.email || errors.password
			? biometricEnabled
				? '$10'
				: '$20'
			: biometricEnabled
				? '$16'
				: '$32';
	return (
		<>
			<Box mb={'$6'}>
				<EmailInput
					label={t('aclMessages.login.email.label')}
					value={values.email}
					onChangeText={handleChange('email')}
					onBlur={handleBlur('email')}
					error={errors.email}
					isDirty={fieldStates.email.isDirty}
					isTouched={fieldStates.email.isTouched}
					isInvalid={fieldStates.email.isInvalid}
					onFocus={handleFocus('email')}
					showStartIcon={false}
					isFloating={true}
				/>
			</Box>
			<Box mb={'$4'}>
				<PasswordInput
					label={t('aclMessages.login.password.label')}
					value={values.password}
					onChangeText={handleChange('password')}
					onBlur={handleBlur('password')}
					error={errors.password}
					isDirty={fieldStates.password.isDirty}
					isTouched={fieldStates.password.isTouched}
					isInvalid={fieldStates.password.isInvalid}
					onFocus={handleFocus('password')}
					showStartIcon={false}
					isFloating={true}
				/>
			</Box>
			<Box alignItems="flex-end">
				<Link onPress={handleForgotPasswordOptions}>
					{t('aclMessages.login.forgotPassword')}
				</Link>
			</Box>
			<Box mt={'$12'}>
				<Button
					onPress={handleLoginSubmit}
					text={t('aclMessages.login.submit')}
					isLoading={isLoading}
				/>
			</Box>
			<Box mt="$4" justifyContent="center" alignItems="center">
				{biometricEnabled && (
					<Button onPress={handleBiometricLogin} variant="link" w={'$32'}>
						<FaceIcon fill={faceIconFill} w={'$10'} h={'$10'} />
					</Button>
				)}
			</Box>
			<Box mt={marginTop}>
				<LoginFooter onRegister={handleRegister} />
			</Box>
		</>
	);
};

export default LoginForm;
