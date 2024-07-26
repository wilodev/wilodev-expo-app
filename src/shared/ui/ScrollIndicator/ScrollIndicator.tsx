/**
 * @fileOverview ScrollIndicator Component
 * @description This file includes the definition and functionality of the ScrollIndicator component.
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

import {
	ScrollBackgroundStyle,
	ScrollContainerStyle,
	ScrollStyle,
} from './scrollIndicatorStyles';
import { ScrollIndicatorProps } from './types';

/**
 * ScrollIndicator component to encapsulate the functionality of app.
 * @param {ScrollIndicatorProps} props - Props for the scroll indicator component.
 * @returns {JSX.Element} - The rendered scroll indicator element.
 */
const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
	top,
	height,
	showScrollIndicator,
}): React.JSX.Element => {
	if (!showScrollIndicator) {
		return <ScrollContainerStyle />;
	}
	return (
		<ScrollContainerStyle>
			<ScrollBackgroundStyle />
			<ScrollStyle top={top} height={height} />
		</ScrollContainerStyle>
	);
};

export default ScrollIndicator;
