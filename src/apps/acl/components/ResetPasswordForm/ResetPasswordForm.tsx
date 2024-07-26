/**
 * @fileOverview ResetPasswordForm Component
 * @description This file includes the definition and functionality of the ResetPasswordForm component.
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

import { useResetPasswordFormManager } from '@/acl/hooks/useResetPasswordFormManager';
import { BoxButton } from '@/acl/ui/BoxButton';
import { BoxInput } from '@/acl/ui/BoxInput';
import { PasswordInput } from '@/components/Form';
import { Button } from '@/shared/ui/Button';

import { ResetPasswordFormProps } from './types';

/**
 * ResetPasswordForm component to encapsulate the functionality of app.
 * @param {ResetPasswordFormProps} props - Props for the login form component.
 * @returns {JSX.Element} - The rendered login form element.
 */
const ResetPasswordForm: React.FC<
	ResetPasswordFormProps
> = (): React.JSX.Element => {
	const {
		state: { fieldStates, values, errors },
		actions: {
			handleChange,
			handleBlur,
			handleFocus,
			t,
			handleResetPasswordSubmit,
		},
	} = useResetPasswordFormManager();
	return (
		<>
			<BoxInput>
				<PasswordInput
					label={t('aclMessages.resetPassword.newPassword.label')}
					value={values.newPassword}
					onChangeText={handleChange('newPassword')}
					onBlur={handleBlur('newPassword')}
					error={errors.newPassword}
					isDirty={fieldStates.newPassword.isDirty}
					isTouched={fieldStates.newPassword.isTouched}
					isInvalid={fieldStates.newPassword.isInvalid}
					onFocus={handleFocus('newPassword')}
					maxLength={20}
				/>
			</BoxInput>
			<BoxInput>
				<PasswordInput
					label={t('aclMessages.resetPassword.confirmNewPassword.label')}
					value={values.confirmNewPassword}
					onChangeText={handleChange('confirmNewPassword')}
					onBlur={handleBlur('confirmNewPassword')}
					error={errors.confirmNewPassword}
					isDirty={fieldStates.confirmNewPassword.isDirty}
					isTouched={fieldStates.confirmNewPassword.isTouched}
					isInvalid={fieldStates.confirmNewPassword.isInvalid}
					onFocus={handleFocus('confirmNewPassword')}
					maxLength={20}
				/>
			</BoxInput>
			<BoxButton>
				<Button
					onPress={handleResetPasswordSubmit}
					text={t('aclMessages.resetPassword.submit')}
				/>
			</BoxButton>
		</>
	);
};

export default ResetPasswordForm;
