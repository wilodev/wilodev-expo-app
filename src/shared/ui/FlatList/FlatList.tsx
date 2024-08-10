/**
 * @fileOverview FlatList Component
 * @description This file includes the definition and functionality of the FlatList component.
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

import { FlatListStyle } from './flatListStyle';
import { FlatListProps } from './types';

/**
 * FlatList component to encapsulate the functionality of app.
 * @param {FlatListProps} props - Props for the FlatList component.
 * @returns {JSX.Element} - The rendered FlatList element.
 */
const FlatList = <ItemT,>(props: FlatListProps<ItemT>): JSX.Element => (
	<FlatListStyle {...(props as FlatListProps<unknown>)} />
);

export default FlatList;
