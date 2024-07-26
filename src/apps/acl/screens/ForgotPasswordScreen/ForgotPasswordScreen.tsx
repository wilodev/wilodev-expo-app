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

import { ForgotPasswordForm } from '@/acl/components/ForgotPasswordForm';
import { useACLNavigation } from '@/acl/hooks';
import ACLLayout from '@/layouts/ACLLayout';
import { MailSvg } from '@/shared/ui/Svg';

const ForgotPassword: React.FC = () => {
	const {
		actions: { t, handleBack },
	} = useACLNavigation();
	return (
		<ACLLayout
			title={t('aclMessages.forgotPassword.title')}
			subtitle={t('aclMessages.forgotPassword.description')}
			image={<MailSvg />}
			showButtonBack
			onBack={handleBack}>
			<ForgotPasswordForm />
		</ACLLayout>
	);
};
export default ForgotPassword;
