/**
 * @fileOverview Online Manager Configuration
 * @description Configures the online manager to handle network connectivity status
 *              and process any pending requests when the device goes online.
 *              This module integrates with @tanstack/react-query and @react-native-community/netinfo.
 * @module utils/onlineManager
 * @category Utilities
 * @component Configuration
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import NetInfo from '@react-native-community/netinfo';
import { onlineManager } from '@tanstack/react-query';

import { processQueue } from '@/shared/utils/requestQueue';

/**
 * Configures the online manager to monitor network connectivity status.
 * When the device goes online, it processes any pending requests.
 * @function setEventListener
 * @memberof module:utils/onlineManager
 * @param {Function} setOnline - Function to set the online status in the online manager.
 * @returns {Function} - Returns the unsubscribe function from NetInfo event listener.
 */
onlineManager.setEventListener((setOnline) => {
	return NetInfo.addEventListener((state) => {
		const online = (!!state.isConnected && state.isInternetReachable) || false;
		setOnline(online);
		if (online) {
			processQueue();
		}
	});
});
