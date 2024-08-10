/**
 * @fileOverview MainLayout Component
 * @description This file includes the definition and implementation of the MainLayout component.
 *              It provides a consistent layout for all main screens such as Home, Transfers, Account.
 *              The layout includes a container, a box for content and additional children components.
 *              This component ensures a uniform look and feel across all authentication screens, enhancing the user experience and
 *              maintaining consistency throughout the app.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 *
 * @example
 * <MainLayout>
 *   <HomeForm />
 * </MainLayout>
 */

import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ButtonBack } from '@/components/ButtonBack';

import BaseLayout from './BaseLayout';
import { MainLayoutProps } from './types';
import { Box } from '../ui/Box';
import { SafeArea } from '../ui/SafeArea';

const MainLayout: React.FC<MainLayoutProps> = ({
	showButtonBack,
	onBack,
	children,
}) => {
	const insets = useSafeAreaInsets();
	return (
		<BaseLayout>
			{showButtonBack && onBack && <ButtonBack onPress={onBack} />}
			<SafeArea edges={['bottom']}>
				<Box
					mt={-insets.top}
					mb={-insets.bottom}
					mr={-insets.right}
					ml={-insets.left}>
					{children}
				</Box>
			</SafeArea>
		</BaseLayout>
	);
};

export default MainLayout;
