/**
 * @fileOverview RegisterForm Component
 * @description This file includes the definition and functionality of the RegisterForm component.
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

import { ScrollView } from '@gluestack-ui/themed';

import { useRegisterFormManager } from '@/acl/hooks/useRegisterFormManager';
import { BoxButton } from '@/acl/ui/BoxButton';
import { BoxInput } from '@/acl/ui/BoxInput';
import {
	CheckboxInput,
	EmailInput,
	PasswordInput,
	PhoneInput,
	TextInput,
} from '@/components/Form';
import { Box, Column, Link, Text } from '@/shared/ui';
import { Button } from '@/shared/ui/Button';

import { RegisterFormProps } from './types';
import { RegisterFooter } from '../RegisterFooter';

/**
 * RegisterForm component to encapsulate the functionality of app.
 * @param {RegisterFormProps} props - Props for the login form component.
 * @returns {JSX.Element} - The rendered login form element.
 */
const RegisterForm: React.FC<RegisterFormProps> = (): React.JSX.Element => {
	const {
		state: { fieldStates, values, errors, currentPrefix, formHeight },
		actions: {
			handleChange,
			handleBlur,
			handleFocus,
			t,
			handleRegisterSubmit,
			handlePhone,
			handleTermsAndConditions,
			handleLogin,
		},
	} = useRegisterFormManager();
	return (
		<Box flexDirection={'column'}>
			<ScrollView
				scrollEnabled
				w={'$full'}
				scrollToOverflowEnabled
				showsVerticalScrollIndicator={false}
				px={'$1'}
				maxHeight={formHeight}>
				<BoxInput flexDirection="row" w={'$full'} gap={2}>
					<BoxInput w={'$1/2'} pr={6}>
						<TextInput
							label={t('aclMessages.register.firstName.label')}
							placeholder="Wilson"
							value={values.firstName}
							onChangeText={handleChange('firstName')}
							onBlur={handleBlur('firstName')}
							error={errors.firstName}
							isDirty={fieldStates.firstName.isDirty}
							isTouched={fieldStates.firstName.isTouched}
							isInvalid={fieldStates.firstName.isInvalid}
							onFocus={handleFocus('firstName')}
						/>
					</BoxInput>
					<BoxInput w={'$1/2'} pr={4}>
						<TextInput
							label={t('aclMessages.register.lastName.label')}
							placeholder="Pérez"
							value={values.lastName}
							onChangeText={handleChange('lastName')}
							onBlur={handleBlur('lastName')}
							error={errors.lastName}
							isDirty={fieldStates.lastName.isDirty}
							isTouched={fieldStates.lastName.isTouched}
							isInvalid={fieldStates.lastName.isInvalid}
							onFocus={handleFocus('lastName')}
						/>
					</BoxInput>
				</BoxInput>
				<BoxInput>
					<PhoneInput
						label={t('aclMessages.register.phone.label')}
						value={values.phone}
						placeholder={t('aclMessages.register.phone.placeholder')}
						onChangeText={handleChange('phone')}
						onBlur={handleBlur('phone')}
						error={errors.phone}
						isDirty={fieldStates.phone.isDirty}
						isTouched={fieldStates.phone.isTouched}
						isInvalid={fieldStates.phone.isInvalid}
						onFocus={handleFocus('phone')}
						onPressPrefix={() => handlePhone(currentPrefix, 'RegisterScreen')}
						currentPrefix={currentPrefix}
					/>
				</BoxInput>
				<BoxInput>
					<EmailInput
						label={t('aclMessages.register.email.label')}
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
				<BoxInput>
					<PasswordInput
						label={t('aclMessages.register.password.label')}
						value={values.password}
						onChangeText={handleChange('password')}
						onBlur={handleBlur('password')}
						error={errors.password}
						isDirty={fieldStates.password.isDirty}
						isTouched={fieldStates.password.isTouched}
						isInvalid={fieldStates.password.isInvalid}
						onFocus={handleFocus('password')}
						maxLength={20}
					/>
				</BoxInput>
				<BoxInput>
					<PasswordInput
						label={t('aclMessages.register.confirmPassword.label')}
						value={values.confirmPassword}
						onChangeText={handleChange('confirmPassword')}
						onBlur={handleBlur('confirmPassword')}
						error={errors.confirmPassword}
						isDirty={fieldStates.confirmPassword.isDirty}
						isTouched={fieldStates.confirmPassword.isTouched}
						isInvalid={fieldStates.confirmPassword.isInvalid}
						onFocus={handleFocus('confirmPassword')}
						maxLength={20}
					/>
				</BoxInput>
				<BoxInput>
					<CheckboxInput
						value={values.terms}
						onChangeCheck={handleChange('terms')}
						onBlur={handleBlur('terms')}
						error={errors.terms}
						onFocus={handleFocus('terms')}>
						<Column flexWrap="wrap">
							<Text size="sm">{t('aclMessages.register.terms.label')}</Text>
							<Link size="sm" mx={4} onPress={handleTermsAndConditions}>
								{t('aclMessages.register.terms.term')}
							</Link>
							<Text size="sm">{t('aclMessages.register.terms.and')}</Text>
							<Link size="sm" mx={4} onPress={handleTermsAndConditions}>
								{t('aclMessages.register.terms.condition')}
							</Link>
						</Column>
					</CheckboxInput>
				</BoxInput>
			</ScrollView>
			<BoxButton
				sx={{
					width: '100%',
					height: 86,
					bg: '$backgroundLight',
					_dark: {
						bg: '$backgroundDark',
					},
					'@xs': {
						bottom: 100,
					},
					'@sm': {
						bottom: 20,
					},
				}}>
				<Button
					onPress={handleRegisterSubmit}
					text={t('aclMessages.register.submit')}
				/>
			</BoxButton>
			<RegisterFooter onLogin={handleLogin} />
		</Box>
	);
};

export default RegisterForm;
