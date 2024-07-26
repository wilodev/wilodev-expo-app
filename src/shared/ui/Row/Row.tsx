/**
 * @fileOverview Row Component
 * @description This file includes the definition and functionality of the Row component.
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

import { RowStyle } from './rowStyles';
import { RowProps } from './types';

/**
 * Row component to encapsulate the functionality of app.
 * @param children
 * @param {RowProps} props - Props for the Row component.
 * @returns {JSX.Element} - The rendered Row element.
 */
const Row: React.FC<RowProps> = ({ children, ...props }): React.JSX.Element => {
	return <RowStyle {...props}>{children}</RowStyle>;
};

export default Row;