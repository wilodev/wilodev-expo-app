/**
 * @fileOverview PasswordResetSuccessfulScreenScreen Component
 * @description This screen component is responsible for displaying the PasswordResetSuccessfulScreen user interface.
 *              It serves as a container for specific components related to the PasswordResetSuccessfulScreen functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { useACLNavigation } from '@/acl/hooks';
import ACLLayout from '@/layouts/ACLLayout';
import { Box, Text, Button } from '@/shared/ui';
import { LockSvg } from '@/shared/ui/Svg';

const PasswordResetSuccessfulScreen: React.FC = () => {
	const {
		actions: { handleBack, t },
	} = useACLNavigation(true);
	return (
		<ACLLayout
			title={t('aclMessages.passwordResetSuccessful.title')}
			image={<LockSvg />}
			showButtonBack
			onBack={handleBack}
			header={{
				Box: {
					justifyContent: 'center',
					alignItems: 'center',
					w: '$full',
					mt: '$32',
					mb: '$6',
				},
				Heading: {
					color: '$success500',
				},
				Image: {
					mt: '$16',
				},
			}}>
			<Box justifyContent="center" alignItems="center" w={'$full'} mt={'$12'}>
				<Text>{t('aclMessages.passwordResetSuccessful.description')}</Text>
			</Box>
			<Box justifyContent="center" alignItems="center" w={'$full'} mt={'$12'}>
				<Button
					onPress={handleBack}
					text={t('aclMessages.passwordResetSuccessful.submit')}
				/>
			</Box>
		</ACLLayout>
	);
};
export default PasswordResetSuccessfulScreen;
