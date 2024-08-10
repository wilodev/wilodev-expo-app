/**
 * @fileOverview BoxNumber Component
 * @description This file includes the definition and functionality of the BoxNumber component.
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

import { ContainerStyle, TextStyle } from './boxNumberStyles';
import { BoxNumberProps } from './types';

/**
 * BoxNumber component to encapsulate the functionality of app.
 * @param {BoxNumberProps} props - Props for the box number component.
 * @returns {JSX.Element} - The rendered box number element.
 */
const BoxNumber: React.FC<BoxNumberProps> = ({
	children,
	isActive = false,
	hasBorderTop = true,
}): React.JSX.Element => {
	return (
		<ContainerStyle isActive={isActive} hasBorderTop={hasBorderTop}>
			<TextStyle isActive={isActive}>{children}</TextStyle>
		</ContainerStyle>
	);
};

export default BoxNumber;
