/**
 * @fileOverview Network Provider
 * @description Provides an abstraction layer over @react-native-community/netinfo and expo-network.
 *              This module abstracts the specific logic of these libraries, offering a standardized interface
 *              for network information handling across the application. It ensures that switching network libraries
 *              can be done with minimal changes.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import NetInfo from '@react-native-community/netinfo';
import * as Network from 'expo-network';

import { INetworkChangeHandler, INetworkState } from '@/coreTypes/INetwork';

class NetworkProvider {
	// Method to configure NetInfo
	static configure(configuration: Partial<unknown>): void {
		NetInfo.configure(configuration);
	}

	// Method to fetch current network state using NetInfo
	static async fetch(): Promise<INetworkState> {
		const state = await NetInfo.fetch();
		return {
			type: state.type,
			isConnected: state.isConnected || false,
			isInternetReachable: state.isInternetReachable,
		};
	}

	// Method to refresh network state using NetInfo
	static async refresh(): Promise<INetworkState> {
		const state = await NetInfo.refresh();
		return {
			type: state.type,
			isConnected: state.isConnected || false,
			isInternetReachable: state.isInternetReachable,
		};
	}

	// Method to add network state change listener using NetInfo
	static addEventListener(listener: INetworkChangeHandler): () => void {
		return NetInfo.addEventListener((state) => {
			listener({
				type: state.type,
				isConnected: state.isConnected || false,
				isInternetReachable: state.isInternetReachable,
			});
		});
	}

	// React Hook to use network information using NetInfo
	static useNetInfo(configuration?: Partial<unknown>): INetworkState {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const state = NetInfo.useNetInfo(configuration);
		return {
			type: state.type,
			isConnected: state.isConnected || false,
			isInternetReachable: state.isInternetReachable,
		};
	}

	// React Hook to use isolated instance of network information using NetInfo
	static useNetInfoInstance(
		isPaused?: boolean,
		configuration?: Partial<unknown>
	): {
		netInfo: INetworkState;
		refresh: () => void;
	} {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const { netInfo, refresh } = NetInfo.useNetInfoInstance(
			isPaused,
			configuration
		);
		return {
			netInfo: {
				type: netInfo.type,
				isConnected: netInfo.isConnected || false,
				isInternetReachable: netInfo.isInternetReachable,
			},
			refresh,
		};
	}

	// Method to get current network state using Expo Network
	static async getNetworkStateAsync(): Promise<INetworkState> {
		const state = await Network.getNetworkStateAsync();
		return {
			type: state.type || '',
			isConnected: state.isConnected || false,
			isInternetReachable: state.isInternetReachable,
		};
	}

	// Method to get current IP address using Expo Network
	static async getIpAddressAsync(): Promise<string> {
		return await Network.getIpAddressAsync();
	}

	// Method to check if airplane mode is enabled using Expo Network
	static async isAirplaneModeEnabledAsync(): Promise<boolean> {
		return await Network.isAirplaneModeEnabledAsync();
	}
}

export default NetworkProvider;
