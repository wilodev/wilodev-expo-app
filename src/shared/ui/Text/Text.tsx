/**
 * @fileOverview Text Component
 * @description This file includes the definition and functionality of the Text component.
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

import { TextStyle } from './textStyles';
import { TextProps } from './types';

/**
 * Text component to encapsulate the functionality of app.
 * @param {TextProps} props - Props for the text component.
 * @returns {JSX.Element} - The rendered text element.
 */
const Text: React.FC<TextProps> = ({
	children,
	...props
}): React.JSX.Element => {
	return <TextStyle {...props}>{children}</TextStyle>;
};

export default Text;
