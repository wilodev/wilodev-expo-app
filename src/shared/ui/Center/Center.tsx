/**
 * @fileOverview Center Component
 * @description This file includes the definition and functionality of the Center component.
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

import { CenterStyle } from './centerStyles';
import { CenterProps } from './types';

/**
 * Center component to encapsulate the functionality of app.
 * @param {CenterProps} props - Props for the center component.
 * @returns {JSX.Element} - The rendered center element.
 */
const Center: React.FC<CenterProps> = ({
	children,
	...props
}): React.JSX.Element => {
	return <CenterStyle {...props}>{children}</CenterStyle>;
};

export default Center;
