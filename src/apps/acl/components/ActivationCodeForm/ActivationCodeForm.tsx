/**
 * @fileOverview ActivationCodeForm Component
 * @description This file includes the definition and functionality of the ActivationCodeForm component.
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

import { useActivationCodeFormManager } from '@/acl/hooks/useActivationCodeFormManager';
import { BoxButton } from '@/acl/ui/BoxButton';
import { BoxInput } from '@/acl/ui/BoxInput';
import { OTPInput } from '@/components/Form';
import { Button } from '@/shared/ui/Button';

import { ActivationCodeFormProps } from './types';

/**
 * ActivationCodeForm component to encapsulate the functionality of app.
 * @param {ActivationCodeFormProps} props - Props for the login form component.
 * @returns {JSX.Element} - The rendered login form element.
 */
const ActivationCodeForm: React.FC<
	ActivationCodeFormProps
> = (): React.JSX.Element => {
	const {
		state: { fieldStates, values, errors },
		actions: {
			handleChange,
			handleBlur,
			handleFocus,
			t,
			handleActivationCodeSubmit,
		},
	} = useActivationCodeFormManager();
	return (
		<>
			<BoxInput>
				<OTPInput
					label={t('aclMessages.accountActivation.activationCode.label')}
					value={values.activationCode}
					onChangeText={handleChange('activationCode')}
					onBlur={handleBlur('activationCode')}
					OTPError={errors.activationCode}
					isDirty={fieldStates.activationCode.isDirty}
					isTouched={fieldStates.activationCode.isTouched}
					isInvalid={fieldStates.activationCode.isInvalid}
					onFocus={handleFocus('activationCode')}
				/>
			</BoxInput>
			<BoxButton>
				<Button
					onPress={handleActivationCodeSubmit}
					text={t('aclMessages.accountActivation.submit')}
				/>
			</BoxButton>
		</>
	);
};

export default ActivationCodeForm;
