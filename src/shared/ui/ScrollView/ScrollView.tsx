/**
 * @fileOverview ScrollView Component
 * @description This file includes the definition and functionality of the ScrollView component.
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

import { ScrollViewStyle } from './scrollViewStyles';
import { ScrollViewProps } from './types';

/**
 * ScrollView component to encapsulate the functionality of app.
 * @param {ScrollViewProps} props - Props for the scroll view component.
 * @returns {JSX.Element} - The rendered scroll view element.
 */
const ScrollView: React.FC<ScrollViewProps> = ({ ...props }, ref) => {
	const { children } = props;
	return (
		<ScrollViewStyle {...props} ref={ref}>
			{children}
		</ScrollViewStyle>
	);
};

export default ScrollView;
