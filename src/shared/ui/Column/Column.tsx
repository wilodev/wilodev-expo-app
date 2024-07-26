/**
 * @fileOverview Column Component
 * @description This file includes the definition and functionality of the Column component.
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

import { ColumnStyle } from './columnStyles';
import { ColumnProps } from './types';

/**
 * Column component to encapsulate the functionality of app.
 * @param children
 * @param {ColumnProps} props - Props for the Column component.
 * @returns {JSX.Element} - The rendered Column element.
 */
const Column: React.FC<ColumnProps> = ({
	children,
	...props
}): React.JSX.Element => {
	return <ColumnStyle {...props}>{children}</ColumnStyle>;
};

export default Column;
