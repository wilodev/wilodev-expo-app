/**
 * @fileOverview ResetCodeScreen Component
 * @description This screen component is responsible for displaying the ResetCode user interface.
 *              It serves as a container for specific components related to the ResetCode functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { ResetCodeForm } from '@/acl/components/ResetCodeForm';
import { useACLNavigation } from '@/acl/hooks';
import ACLLayout from '@/layouts/ACLLayout';
import { MailSvg } from '@/shared/ui/Svg';

const ResetCode: React.FC = () => {
	const {
		actions: { handleBack, t },
	} = useACLNavigation(true);
	return (
		<ACLLayout
			title={t('aclMessages.resetCode.title')}
			subtitle={t('aclMessages.resetCode.description')}
			image={<MailSvg />}
			showButtonBack
			onBack={handleBack}>
			<ResetCodeForm />
		</ACLLayout>
	);
};
export default ResetCode;
