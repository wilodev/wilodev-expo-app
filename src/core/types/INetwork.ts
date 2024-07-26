/**
 * @fileOverview Network Interface
 * @description Interface for network that abstracts form handling logic, suitable for libraries like react-hook-form or Formik.
 *              This interface allows for easy integration and switching between different form management libraries,
 *              minimizing impact on the components. It includes methods for handling changes, blur events, form submission,
 *              and error tracking.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
export interface INetworkState {
	type: string;
	isConnected: boolean;
	isInternetReachable?: boolean | null | undefined;
}

export type INetworkChangeHandler = (state: INetworkState) => void;
