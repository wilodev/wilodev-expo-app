/**
 * @fileOverview BottomTabNavigator Component
 * @description This file includes the definition and functionality of the BottomTabNavigator component.
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

import { TouchableOpacity } from 'react-native';

import { TabBarBackground } from './components/TabBarBackground';
import { TabBarButton } from './components/TabBarButton';
import { BottomTabNavigatorProps } from './types';

/**
 * BottomTabNavigator component to encapsulate the functionality of app.
 * @param {BottomTabNavigatorProps} props - Props for the tab bar background component.
 * @returns {JSX.Element} - The rendered tab bar background element.
 */
const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = ({
	showBorder,
	totalNotifications,
	...props
}): React.JSX.Element => {
	const { state, descriptors, navigation, insets } = props;
	return (
		<TabBarBackground showBorder={showBorder} insets={insets}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
							? options.title
							: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				return (
					<TouchableOpacity
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						onPress={onPress}
						onLongPress={onLongPress}
						key={index}
						activeOpacity={0.8}>
						<TabBarButton
							route={route as never}
							label={label as string}
							accessibilityState={isFocused ? { selected: true } : {}}
							totalNotifications={totalNotifications}
						/>
					</TouchableOpacity>
				);
			})}
		</TabBarBackground>
	);
};

export default BottomTabNavigator;
