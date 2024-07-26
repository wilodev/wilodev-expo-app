/**
 * @fileOverview LoginScreen Component
 * @description This screen component is responsible for displaying the Login user interface.
 *              It serves as a container for specific components related to the Login functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { LoginForm } from '@/acl/components/LoginForm';
import { useACLNavigation } from '@/acl/hooks/useACLNavigation';
import { ACLLayout } from '@/shared/layouts';

const Login: React.FC = () => {
	const {
		actions: { t },
	} = useACLNavigation();
	return (
		<ACLLayout
			title={t('aclMessages.login.title')}
			subtitle={t('aclMessages.login.description')}
			header={{
				Box: {
					mt: '$6',
					mb: '$16',
				},
				Heading: {
					'$xs-fontSize': '$2xl',
					'$sm-fontSize': '$3xl',
				},
				Text: {
					'$xs-fontSize': '$sm',
					'$sm-fontSize': '$md',
				},
			}}>
			<LoginForm />
		</ACLLayout>
	);
};
export default Login;
