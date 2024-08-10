/**
 * @fileOverview TextRotate Component
 * @description This file includes the definition and functionality of the TextRotate component.
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

import { ContainerStyle, TextStyle } from './textRotateStyles';
import { TextRotateProps } from './types';

/**
 * TextRotate component to encapsulate the functionality of app.
 * @param {TextRotateProps} props - Props for the text rotate component.
 * @returns {JSX.Element} - The rendered text rotate element.
 */
const TextRotate: React.FC<TextRotateProps> = ({
	children,
}): React.JSX.Element => {
	return (
		<ContainerStyle>
			<TextStyle>{children}</TextStyle>
		</ContainerStyle>
	);
};

export default TextRotate;
