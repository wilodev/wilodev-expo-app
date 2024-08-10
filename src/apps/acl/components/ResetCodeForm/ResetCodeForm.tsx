/**
 * @fileOverview ResetCodeForm Component
 * @description This file includes the definition and functionality of the ResetCodeForm component.
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

import { useResetCodeFormManager } from '@/acl/hooks/useResetCodeFormManager';
import { BoxButton } from '@/acl/ui/BoxButton';
import { BoxInput } from '@/acl/ui/BoxInput';
import { OTPInput } from '@/components/Form';
import { Button } from '@/shared/ui/Button';

import { ResetCodeFormProps } from './types';

/**
 * ResetCodeForm component to encapsulate the functionality of app.
 * @param {ResetCodeFormProps} props - Props for the login form component.
 * @returns {JSX.Element} - The rendered login form element.
 */
const ResetCodeForm: React.FC<ResetCodeFormProps> = (): React.JSX.Element => {
	const {
		state: { fieldStates, values, errors },
		actions: {
			handleChange,
			handleBlur,
			handleFocus,
			t,
			handleResetCodeSubmit,
		},
	} = useResetCodeFormManager();
	return (
		<>
			<BoxInput>
				<OTPInput
					label={t('aclMessages.resetCode.code.label')}
					value={values.code}
					onChangeText={handleChange('code')}
					onBlur={handleBlur('code')}
					OTPError={errors.code}
					isDirty={fieldStates.code.isDirty}
					isTouched={fieldStates.code.isTouched}
					isInvalid={fieldStates.code.isInvalid}
					onFocus={handleFocus('code')}
				/>
			</BoxInput>
			<BoxButton>
				<Button
					onPress={handleResetCodeSubmit}
					text={t('aclMessages.resetCode.submit')}
				/>
			</BoxButton>
		</>
	);
};

export default ResetCodeForm;
