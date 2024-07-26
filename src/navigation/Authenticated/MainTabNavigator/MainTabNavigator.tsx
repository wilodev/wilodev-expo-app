/**
 * @fileOverview MainTabNavigator Component
 * @description Component that handles the main navigation of the application.
 *              Defines the navigation settings and visual style for the application tabs.
 *              Uses TabBarIcon, TabBarLabel and TabBarBackground components for a cohesive user experience.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import {
	BottomTabBarProps,
	BottomTabHeaderProps,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { HeaderTopNavigator } from '@/components/HeaderTopNavigator';
import { BottomTabNavigator } from '@/shared/components/BottomTabNavigator';
import { getHeaderTitleStyle } from '@/shared/theme/utils/stylesUtils';
import { useThemeColors } from '@/shared/theme/utils/themeHelpers';
import { useAppSelector } from '@/state/hook';
import { selectAllNotifications } from '@/state/redux';

import { HomeScreen, NotificationSwipeScreen } from 'src/apps/home';

import { SettingsStackNavigator } from '../SettingsStackNavigator';

export type MainTabParamList = {
	UserAccount: undefined;
	HomeAccount: undefined;
	DataAccount: undefined;
	SettingAccount: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();
export const MainTabNavigator: React.FC = () => {
	const { backgroundColor, isDark } = useThemeColors();
	const showBorder = true;
	const allNotifications = useAppSelector(selectAllNotifications);
	const unreadNotifications = allNotifications?.filter(
		(notification) => notification.status === 'unread'
	);
	return (
		<Tab.Navigator
			tabBar={(props: BottomTabBarProps) =>
				BottomTabNavigator({
					showBorder,
					totalNotifications: unreadNotifications?.length || 0,
					...props,
				})
			}
			screenOptions={() => ({
				headerStyle: {
					backgroundColor: backgroundColor,
					borderBottomWidth: 0,
				},
				headerShadowVisible: true,
				headerTitleStyle: getHeaderTitleStyle(isDark),
			})}
			sceneContainerStyle={{
				backgroundColor,
			}}
			initialRouteName="HomeAccount">
			<Tab.Screen
				name="HomeAccount"
				component={HomeScreen}
				options={{
					headerShown: true,
					title: 'Inicio',
					header: (props: BottomTabHeaderProps) =>
						HeaderTopNavigator({ showBorder, noButtonBack: true, ...props }),
				}}
			/>
			<Tab.Screen
				name="UserAccount"
				component={NotificationSwipeScreen}
				options={{
					headerShown: true,
					title: 'Notificaciones',
					headerTitle: 'Notificaciones Swipe',
					header: (props: BottomTabHeaderProps) =>
						HeaderTopNavigator({ showBorder, noButtonBack: true, ...props }),
				}}
			/>
			<Tab.Screen
				name="SettingAccount"
				component={SettingsStackNavigator}
				options={{
					headerShown: true,
					title: 'Configuración',
					headerTitle: 'Configuración',
					header: (props: BottomTabHeaderProps) =>
						HeaderTopNavigator({ showBorder, noButtonBack: true, ...props }),
				}}
			/>
		</Tab.Navigator>
	);
};
