/**
 * @fileOverview AbsoluteBox Component
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

import { AbsoluteBoxStyle } from './absoluteBoxStyles';
import { AbsoluteBoxProps } from './types';

/**
 * Box component to encapsulate the functionality of app.
 * @param children
 * @param {AbsoluteBoxProps} props - Props for the box component.
 * @returns {JSX.Element} - The rendered box element.
 */
const Box: React.FC<AbsoluteBoxProps> = ({
	children,
	...props
}): React.JSX.Element => {
	if (children === undefined) return <AbsoluteBoxStyle {...props} />;
	return <AbsoluteBoxStyle {...props}>{children}</AbsoluteBoxStyle>;
};

export default Box;
