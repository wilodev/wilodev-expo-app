/**
 * @fileOverview ForgotPasswordWhatsAppForm Component
 * @description This file includes the definition and functionality of the ForgotPasswordWhatsAppForm component.
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

import { useForgotPasswordWhatsAppFormManager } from '@/acl/hooks/useForgotPasswordWhatsAppFormManager';
import { BoxButton } from '@/acl/ui/BoxButton';
import { BoxInput } from '@/acl/ui/BoxInput';
import { PhoneInput } from '@/components/Form';
import { WhatsAppIcon } from '@/shared/ui';
import { Button } from '@/shared/ui/Button';

import { ForgotPasswordWhatsAppFormProps } from './types';

/**
 * ForgotPasswordWhatsAppForm component to encapsulate the functionality of app.
 * @param {ForgotPasswordWhatsAppFormProps} props - Props for the login form component.
 * @returns {JSX.Element} - The rendered login form element.
 */
const ForgotPasswordWhatsAppForm: React.FC<
	ForgotPasswordWhatsAppFormProps
> = (): React.JSX.Element => {
	const {
		state: { fieldStates, values, errors, currentPrefix },
		actions: {
			handleChange,
			handleBlur,
			handleFocus,
			t,
			handleForgotPasswordWhatsAppSubmit,
			handlePhone,
		},
	} = useForgotPasswordWhatsAppFormManager();
	return (
		<>
			<BoxInput>
				<PhoneInput
					label={t('aclMessages.forgotPasswordWhatsApp.phone.label')}
					value={values.phone}
					placeholder={t(
						'aclMessages.forgotPasswordWhatsApp.phone.placeholder'
					)}
					onChangeText={handleChange('phone')}
					onBlur={handleBlur('phone')}
					error={errors.phone}
					isDirty={fieldStates.phone.isDirty}
					isTouched={fieldStates.phone.isTouched}
					isInvalid={fieldStates.phone.isInvalid}
					onFocus={handleFocus('phone')}
					onPressPrefix={() =>
						handlePhone(currentPrefix, 'ForgotPasswordWhatsAppScreen')
					}
					currentPrefix={currentPrefix}
				/>
			</BoxInput>
			<BoxButton>
				<Button
					onPress={handleForgotPasswordWhatsAppSubmit}
					text={t('aclMessages.forgotPasswordWhatsApp.submit')}
					startIcon={<WhatsAppIcon w={'$5'} h={'$5'} />}
				/>
			</BoxButton>
		</>
	);
};

export default ForgotPasswordWhatsAppForm;
