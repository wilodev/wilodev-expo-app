/**
 * @fileOverview ForgotPasswordScreen Component
 * @description This screen component is responsible for displaying the ForgotPassword user interface.
 *              It serves as a container for specific components related to the ForgotPassword functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { useForgotPasswordOptions } from '@/acl/hooks/useForgotPasswordOptions';
import ACLLayout from '@/layouts/ACLLayout';
import { Box, Button, Text } from '@/shared/ui';
import { WhatsAppSvg } from '@/shared/ui/Svg';

const ForgotPasswordOptionsScreen: React.FC = () => {
	const {
		state: { canSendForgotPassword },
		actions: {
			t,
			handleAddContact,
			handleBack,
			handleForgotPassword,
			handleForgotPasswordWhatsApp,
		},
	} = useForgotPasswordOptions();
	return (
		<ACLLayout
			title={t('aclMessages.forgotPasswordOptions.title')}
			image={
				<WhatsAppSvg
					fill="$successLight"
					stroke="$backgroundLight"
					$dark-fill="$successDark"
					$dark-stroke="$backgroundDark"
					$xs-w={'$16'}
					$xs-h={'$16'}
					$sm-w={'$32'}
					$sm-h={'$32'}
				/>
			}
			showButtonBack
			onBack={handleBack}>
			<Box mb={'$5'} w={'$full'}>
				<Text textAlign="justify" size="sm">
					{t('aclMessages.forgotPasswordOptions.description')}
				</Text>
			</Box>
			<Box my={'$2'}>
				<Button
					onPress={handleAddContact}
					action="secondary"
					text={t('aclMessages.forgotPasswordOptions.buttons.add')}
				/>
			</Box>
			<Box my={'$3'}>
				<Button
					onPress={handleForgotPassword}
					text={t('aclMessages.forgotPasswordOptions.buttons.email')}
					isDisabled={!canSendForgotPassword}
				/>
			</Box>
			<Box my={'$3'}>
				<Button
					onPress={handleForgotPasswordWhatsApp}
					text={t('aclMessages.forgotPasswordOptions.buttons.phone')}
					action="success"
					isDisabled={!canSendForgotPassword}
				/>
			</Box>
		</ACLLayout>
	);
};
export default ForgotPasswordOptionsScreen;
