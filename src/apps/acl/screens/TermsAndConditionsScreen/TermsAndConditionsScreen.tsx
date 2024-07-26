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
import { Box, Text } from '@/shared/ui';

const TermsAndConditionsScreen: React.FC = () => {
	const {
		actions: { t, handleBack },
	} = useForgotPasswordOptions();
	return (
		<ACLLayout
			title={t('aclMessages.terms.title')}
			showButtonBack
			onBack={handleBack}>
			<Box mb={'$5'} w={'$full'}>
				<Text>{t('aclMessages.terms.description')}</Text>
			</Box>
		</ACLLayout>
	);
};
export default TermsAndConditionsScreen;
