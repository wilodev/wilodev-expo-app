/**
 * @fileOverview TabBarBackground Component
 * @description This file includes the definition and functionality of the TabBarBackground component.
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
	TabBarBackgroundContainerStyle,
	TabBarBackgroundStyle,
} from './tabBarBackgroundStyles';
import { TabBarBackgroundProps } from './types';

/**
 * TabBarBackground component to encapsulate the functionality of app.
 * @param {TabBarBackgroundProps} props - Props for the tab bar background component.
 * @returns {JSX.Element} - The rendered tab bar background element.
 */
const TabBarBackground: React.FC<TabBarBackgroundProps> = ({
	children,
	showBorder,
	insets,
}): React.JSX.Element => {
	return (
		<TabBarBackgroundContainerStyle showBorder={showBorder}>
			<TabBarBackgroundStyle
				showBorder={showBorder}
				marginBottom={insets?.bottom || 0}>
				{children}
			</TabBarBackgroundStyle>
		</TabBarBackgroundContainerStyle>
	);
};

export default TabBarBackground;
