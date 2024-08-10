/**
 * @fileOverview BaseLayout Component
 * @description This file includes the definition and implementation of the BaseLayout component.
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
 * <BaseLayout>
 *   <HomeForm />
 * </BaseLayout>
 */

import React from 'react';

import { Keyboard, Platform, useWindowDimensions } from 'react-native';

import { KeyboardAvoidingView } from '@gluestack-ui/themed';

import { BaseLayoutProps } from './types';
import { useThemeColors } from '../theme/utils/themeHelpers';
import { Box } from '../ui/Box';
import { SafeArea } from '../ui/SafeArea';
import { TouchableWithoutFeedback } from '../ui/TouchableWithoutFeedback';

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	const { backgroundColor } = useThemeColors();
	const { width, height } = useWindowDimensions();
	return (
		<Box bg={backgroundColor} flex={1} width={'$full'} h={'$full'}>
			<SafeArea
				edges={['bottom', 'left', 'right', 'top']}
				flex={1}
				width={'$full'}
				h={'$full'}>
				<KeyboardAvoidingView
					flex={1}
					behavior={'padding'}
					w={'$full'}
					height={'$full'}
					keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
					<TouchableWithoutFeedback
						onPress={Keyboard.dismiss}
						accessible={false}>
						<Box w={width} h={height - 40} flex={1} alignItems="center">
							{children}
						</Box>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</SafeArea>
		</Box>
	);
};

export default BaseLayout;
