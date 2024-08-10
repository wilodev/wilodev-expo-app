/**
 * @fileOverview SettingsScreen Component
 * @description This screen component is responsible for displaying the Settings user interface.
 *              It serves as a container for specific components related to the Settings functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { TouchableBox } from '@/shared/ui';
import { Box } from '@/ui/Box';
import { Text } from '@/ui/Text';

import useSettingsService from '../../services/useSettingsService';

const Settings: React.FC = () => {
	const { logout } = useSettingsService();
	return (
		<Box>
			<TouchableBox onPress={logout}>
				<Text>Cerrar Session</Text>
			</TouchableBox>
		</Box>
	);
};
export default Settings;
