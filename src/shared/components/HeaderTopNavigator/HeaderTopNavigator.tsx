/**
 * @fileOverview HeaderTopNavigator Component
 * @description This file includes the definition and functionality of the HeaderTopNavigator component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { Box, Heading, Text } from '@/shared/ui';

import { HeaderTopBarBackground } from './components/HeaderTopBarBackground';
import { HeaderTopNavigatorProps } from './types';
import { ButtonBack } from '../ButtonBack';
/**
 * HeaderTopNavigator component to encapsulate the functionality of app.
 * @param {HeaderTopNavigatorProps} props - Props for the header navigator component.
 * @returns {JSX.Element} - The rendered header navigator element.
 */
const HeaderTopNavigator: React.FC<HeaderTopNavigatorProps> = ({
	showBorder,
	noButtonBack = false,
	...props
}): React.JSX.Element => {
	return (
		<HeaderTopBarBackground showBorder={showBorder}>
			<Box w={48} h={'$full'} justifyContent="center" alignItems="center">
				{props.navigation.canGoBack() && !noButtonBack && (
					<ButtonBack onPress={props.navigation.goBack} />
				)}
			</Box>
			<Box>
				{props.options.title && (
					<Heading size="lg">{props.options.title}</Heading>
				)}
			</Box>
			<Box w={48} h={'$full'} justifyContent="center" alignItems="center">
				<Text />
			</Box>
		</HeaderTopBarBackground>
	);
};

export default HeaderTopNavigator;
