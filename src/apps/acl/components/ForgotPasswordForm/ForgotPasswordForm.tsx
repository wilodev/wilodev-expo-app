/**
 * @fileOverview ForgotPasswordForm Component
 * @description This file includes the definition and functionality of the ForgotPasswordForm component.
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

import { useForgotPasswordFormManager } from '@/acl/hooks/useForgotPasswordFormManager';
import { BoxButton } from '@/acl/ui/BoxButton';
import { BoxInput } from '@/acl/ui/BoxInput';
import { EmailInput } from '@/components/Form';
import { MailIcon } from '@/shared/ui';
import { Button } from '@/shared/ui/Button';

import { ForgotPasswordFormProps } from './types';

/**
 * ForgotPasswordForm component to encapsulate the functionality of app.
 * @param {ForgotPasswordFormProps} props - Props for the login form component.
 * @returns {JSX.Element} - The rendered login form element.
 */
const ForgotPasswordForm: React.FC<
	ForgotPasswordFormProps
> = (): React.JSX.Element => {
	const {
		state: { fieldStates, values, errors },
		actions: {
			handleChange,
			handleBlur,
			handleFocus,
			t,
			handleForgotPasswordSubmit,
		},
	} = useForgotPasswordFormManager();
	return (
		<>
			<BoxInput>
				<EmailInput
					label={t('aclMessages.forgotPassword.email.label')}
					value={values.email}
					onChangeText={handleChange('email')}
					onBlur={handleBlur('email')}
					error={errors.email}
					isDirty={fieldStates.email.isDirty}
					isTouched={fieldStates.email.isTouched}
					isInvalid={fieldStates.email.isInvalid}
					onFocus={handleFocus('email')}
				/>
			</BoxInput>
			<BoxButton>
				<Button
					onPress={handleForgotPasswordSubmit}
					text={t('aclMessages.forgotPassword.submit')}
					startIcon={<MailIcon w={'$5'} h={'$5'} />}
				/>
			</BoxButton>
		</>
	);
};

export default ForgotPasswordForm;
