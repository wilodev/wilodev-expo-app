/**
 * @fileOverview HeaderTopBarBackground Component
 * @description This file includes the definition and functionality of the HeaderTopBarBackground component.
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

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
	HeaderTopBarBackgroundContainerStyle,
	HeaderTopBarBackgroundStyle,
} from './headerTopBarBackgroundStyles';
import { HeaderTopBarBackgroundProps } from './types';

/**
 * HeaderTopBarBackground component to encapsulate the functionality of app.
 * @param {HeaderTopBarBackgroundProps} props - Props for the tab bar background component.
 * @returns {JSX.Element} - The rendered tab bar background element.
 */
const HeaderTopBarBackground: React.FC<HeaderTopBarBackgroundProps> = ({
	children,
	showBorder,
}): React.JSX.Element => {
	const insets = useSafeAreaInsets();
	return (
		<HeaderTopBarBackgroundContainerStyle
			showBorder={showBorder}
			mt={insets.top - 60}>
			<HeaderTopBarBackgroundStyle showBorder={showBorder}>
				{children}
			</HeaderTopBarBackgroundStyle>
		</HeaderTopBarBackgroundContainerStyle>
	);
};

export default HeaderTopBarBackground;
