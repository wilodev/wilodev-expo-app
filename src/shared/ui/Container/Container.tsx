/**
 * @fileOverview Container Component
 * @description This file includes the definition and functionality of the Container component.
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

import { ContainerStyle } from './containerStyles';
import { ContainerProps } from './types';

/**
 * Container component to encapsulate the functionality of app.
 * @param children
 * @param {ContainerProps} props - Props for the container component.
 * @returns {JSX.Element} - The rendered container element.
 */
const Container: React.FC<ContainerProps> = ({
	children,
	...props
}): React.JSX.Element => {
	return <ContainerStyle {...props}>{children}</ContainerStyle>;
};

export default Container;
