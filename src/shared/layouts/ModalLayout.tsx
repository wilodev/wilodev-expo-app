/**
 * @fileOverview ModalLayout Component
 * @description This file includes the definition and implementation of the ModalLayout component.
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
 * <ModalLayout>
 *   <HomeForm />
 * </ModalLayout>
 */

import React from 'react';

import BaseLayout from './BaseLayout';
import { MainLayoutProps } from './types';

const ModalLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return <BaseLayout>{children}</BaseLayout>;
};

export default ModalLayout;