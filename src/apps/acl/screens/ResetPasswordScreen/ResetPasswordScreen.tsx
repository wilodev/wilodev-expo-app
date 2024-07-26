/**
 * @fileOverview ResetPasswordScreen Component
 * @description This screen component is responsible for displaying the ResetPassword user interface.
 *              It serves as a container for specific components related to the ResetPassword functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { ResetPasswordForm } from '@/acl/components/ResetPasswordForm';
import { useACLNavigation } from '@/acl/hooks';
import ACLLayout from '@/layouts/ACLLayout';
import { UnlockedSvg } from '@/shared/ui/Svg';

const ResetPassword: React.FC = () => {
	const {
		actions: { handleBack, t },
	} = useACLNavigation(true);
	return (
		<ACLLayout
			title={t('aclMessages.resetPassword.title')}
			subtitle={t('aclMessages.resetPassword.description')}
			image={<UnlockedSvg />}
			showButtonBack
			onBack={handleBack}>
			<ResetPasswordForm />
		</ACLLayout>
	);
};
export default ResetPassword;
