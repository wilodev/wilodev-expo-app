/**
 * @fileOverview ActivationCodeScreen Component
 * @description This screen component is responsible for displaying the ActivationCode user interface.
 *              It serves as a container for specific components related to the ActivationCode functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { ActivationCodeForm } from '@/acl/components/ActivationCodeForm';
import { useACLNavigation } from '@/acl/hooks';
import ACLLayout from '@/layouts/ACLLayout';
import { WelcomeSvg } from '@/shared/ui/Svg';

const ActivationCode: React.FC = () => {
	const {
		actions: { handleBack, t },
	} = useACLNavigation(true);
	return (
		<ACLLayout
			title={t('aclMessages.accountActivation.title')}
			subtitle={t('aclMessages.accountActivation.description')}
			image={<WelcomeSvg />}
			showButtonBack
			onBack={handleBack}>
			<ActivationCodeForm />
		</ACLLayout>
	);
};
export default ActivationCode;
