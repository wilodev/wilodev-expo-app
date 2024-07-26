/**
 * @fileOverview Heading Component
 * @description This file includes the definition and functionality of the Heading component.
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

import { HeadingStyle } from './headingStyles';
import { HeadingProps } from './types';

/**
 * Heading component to encapsulate the functionality of app.
 * @param {HeadingProps} props - Props for the heading component.
 * @returns {JSX.Element} - The rendered heading element.
 */
const Heading: React.FC<HeadingProps> = ({
	children,
	...props
}): React.JSX.Element => {
	return (
		<HeadingStyle {...props} bold>
			{children}
		</HeadingStyle>
	);
};

export default Heading;
