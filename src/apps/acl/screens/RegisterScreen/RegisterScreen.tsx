/**
 * @fileOverview RegisterScreen Component
 * @description This screen component is responsible for displaying the Register user interface.
 *              It serves as a container for specific components related to the Register functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { RegisterForm } from '@/acl/components/RegisterForm';
import { useACLNavigation } from '@/acl/hooks/useACLNavigation';
import { ACLLayout } from '@/layouts/index';

const Register: React.FC = () => {
	const {
		actions: { t, handleBack },
	} = useACLNavigation();
	return (
		<ACLLayout
			title={t('aclMessages.register.title')}
			subtitle={t('aclMessages.register.description')}
			header={{
				Box: {
					$xs: { my: '$1' },
					$sm: { my: '$4' },
					$md: { my: '$20' },
					$lg: { my: '$32' },
				},
			}}
			showButtonBack
			onBack={handleBack}>
			<RegisterForm />
		</ACLLayout>
	);
};
export default Register;
