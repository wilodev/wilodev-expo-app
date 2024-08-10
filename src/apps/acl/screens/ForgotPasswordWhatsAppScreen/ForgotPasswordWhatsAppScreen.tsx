/**
 * @fileOverview ForgotPasswordWhatsAppScreen Component
 * @description This screen component is responsible for displaying the ForgotPasswordWhatsApp user interface.
 *              It serves as a container for specific components related to the ForgotPasswordWhatsApp functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { ForgotPasswordWhatsAppForm } from '@/acl/components/ForgotPasswordWhatsAppForm';
import { useACLNavigation } from '@/acl/hooks';
import ACLLayout from '@/layouts/ACLLayout';
import { MailSvg } from '@/shared/ui/Svg';

const ForgotPasswordWhatsApp: React.FC = () => {
	const {
		actions: { t, handleBack },
	} = useACLNavigation();
	return (
		<ACLLayout
			title={t('aclMessages.forgotPasswordWhatsApp.title')}
			subtitle={t('aclMessages.forgotPasswordWhatsApp.description')}
			image={<MailSvg />}
			showButtonBack
			onBack={handleBack}>
			<ForgotPasswordWhatsAppForm />
		</ACLLayout>
	);
};
export default ForgotPasswordWhatsApp;
