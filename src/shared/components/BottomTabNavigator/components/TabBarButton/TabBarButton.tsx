/**
 * @fileOverview TabBarButton Component
 * @description This file includes the definition and functionality of the TabBarButton component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { Box, Text } from '@/shared/ui';

import { iconMap } from './constants';
import { TabBarBoxStyle, TabBarLabelStyle } from './tabBarButtonStyles';
import { TabBarButtonProps } from './types';

/**
 * TabBarButton component to encapsulate the functionality of app.
 * @param {TabBarButtonProps} props - Props for the tab bar button component.
 * @returns {JSX.Element} - The rendered tab bar button element.
 */
const TabBarButton: React.FC<TabBarButtonProps> = ({
	route,
	label,
	accessibilityState,
	totalNotifications,
}): React.JSX.Element => {
	const focused = accessibilityState?.selected || false;
	const IconComponent = iconMap[route.name];
	return (
		<TabBarBoxStyle testID="ContainerCustomTab" position="relative">
			{route.name === 'UserAccount' && totalNotifications > 0 && (
				<Box
					minWidth={24}
					maxWidth={40}
					h={24}
					bg="$errorDark"
					rounded={'$full'}
					position="absolute"
					top={'$3'}
					left={46}
					justifyContent="center"
					alignItems="center"
					alignContent="center"
					flex={1}
					zIndex={1}
					px={5}>
					<Text action="white" size="xs" height={14} mt={-2}>
						{totalNotifications > 99 ? `+${99}` : totalNotifications}
					</Text>
				</Box>
			)}
			<IconComponent
				width={'$6'}
				height={'$6'}
				fill={focused ? '$primaryDark' : '$textDark'}
				stroke={focused ? '$primaryDark' : '$textDark'}
				as={undefined}
			/>
			<TabBarLabelStyle testID="LabelCustomTab" isFocused={focused}>
				{label}
			</TabBarLabelStyle>
		</TabBarBoxStyle>
	);
};

export default TabBarButton;
