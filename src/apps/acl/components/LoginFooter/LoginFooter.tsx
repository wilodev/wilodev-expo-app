/**
 * @fileOverview LoginFooter Component
 * @description This file includes the definition and functionality of the LoginFooter component.
 *              It is part of the Acl functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { Text, Box, Link } from '@/shared/ui';

import { useTranslationApp } from 'src/core/locales/useTranslationApp';

import { LoginFooterProps } from './types';

/**
 * LoginFooter component to encapsulate the functionality of app.
 * @param {LoginFooterProps} props - Props for the login footer component.
 * @returns {JSX.Element} - The rendered login footer element.
 */
const LoginFooter: React.FC<LoginFooterProps> = React.memo(({ onRegister }) => {
	const {
		actions: { t },
	} = useTranslationApp();
	return (
		<Box
			w={'100%'}
			alignContent="center"
			justifyContent="center"
			flexDirection={'row'}
			px={'$4'}>
			<Text textAlign="center" size="xs">
				{t('aclMessages.login.footer.description')}
				{'   '}
			</Text>
			<Link onPress={onRegister} size="xs">
				{t('aclMessages.login.footer.register')}
			</Link>
		</Box>
	);
});

LoginFooter.displayName = 'LoginFooter';

export default LoginFooter;
