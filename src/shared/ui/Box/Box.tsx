/**
 * @fileOverview Box Component
 * @description This file includes the definition and functionality of the Box component.
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

import { BoxStyle } from './boxStyles';
import { BoxProps } from './types';

/**
 * Box component to encapsulate the functionality of app.
 * @param children
 * @param {BoxProps} props - Props for the box component.
 * @returns {JSX.Element} - The rendered box element.
 */
const Box: React.FC<BoxProps> = ({ children, ...props }): React.JSX.Element => {
	if (children === undefined) return <BoxStyle {...props} />;
	return <BoxStyle {...props}>{children}</BoxStyle>;
};

export default Box;
