/**
 * @fileOverview ACLLayout Component
 * @description This file includes the definition and implementation of the ACLLayout component.
 *              It provides a consistent layout for all authentication-related screens such as Login, Forgot Password, and Register.
 *              The layout includes a container, a box for content, and areas for a title, subtitle, and additional children components.
 *              This component ensures a uniform look and feel across all authentication screens, enhancing the user experience and
 *              maintaining consistency throughout the app.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 *
 * @example
 * <ACLLayout title="Login" subtitle="Enter your credentials">
 *   <LoginForm />
 * </ACLLayout>
 */

import React from 'react';

import { ButtonBack } from '@/components/ButtonBack';
import { ModalAlert } from '@/components/ModalAlert';
import {
	BoxBaseLayout,
	ChildrenBaseLayout,
	FooterBaseLayout,
} from '@/shared/ui/Layouts';
import { useAppDispatch, useAppSelector } from '@/state/hook';
import { selectError, setClearError } from '@/state/redux';

import BaseLayout from './BaseLayout';
import { ACLLayoutProps } from './types';
import { Box, Text } from '../ui';
import { ACLHeader } from '../ui/ACLHeader';

const ACLLayout: React.FC<ACLLayoutProps> = ({
	header,
	image,
	title,
	subtitle,
	children,
	footer,
	showButtonBack,
	onBack,
}) => {
	const dispatch = useAppDispatch();
	const error = useAppSelector(selectError);
	// Global Error
	const handleClose = () => {
		console.log('Close');
		dispatch(setClearError());
	};
	return (
		<BaseLayout>
			{showButtonBack && onBack && <ButtonBack onPress={onBack} />}
			<BoxBaseLayout>
				{(title || subtitle || image) && (
					<ACLHeader.Box {...header?.Box}>
						{title && (
							<ACLHeader.Heading {...header?.Heading}>
								{title}
							</ACLHeader.Heading>
						)}
						{image && (
							<ACLHeader.Image {...header?.Image}>{image}</ACLHeader.Image>
						)}
						{subtitle && (
							<ACLHeader.Text {...header?.Text}>{subtitle}</ACLHeader.Text>
						)}
					</ACLHeader.Box>
				)}
				<ChildrenBaseLayout>{children}</ChildrenBaseLayout>
				<FooterBaseLayout>{footer}</FooterBaseLayout>
				{error.title !== '' && (
					<ModalAlert
						title={error.title}
						actions="error"
						onClose={handleClose}
						openModal={true}>
						<Box mt={'$8'}>
							<Text>{error.message}</Text>
						</Box>
					</ModalAlert>
				)}
			</BoxBaseLayout>
		</BaseLayout>
	);
};

export default ACLLayout;
