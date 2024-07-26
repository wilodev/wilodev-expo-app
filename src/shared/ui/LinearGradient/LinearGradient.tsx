/**
 * @fileOverview LinearGradient Component
 * @description This file includes the definition and functionality of the Box component.
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
	LinearGradientPoint,
	LinearGradient as RNLinearGradient,
} from 'expo-linear-gradient';

import { LinearGradientStyle } from './linearGradientStyles';
import { LinearGradientProps } from './types';

/**
 * Box component to encapsulate the functionality of app.
 * @param children
 * @param {LinearGradientProps} props - Props for the box component.
 * @returns {JSX.Element} - The rendered box element.
 */
const Box: React.FC<LinearGradientProps> = ({
	children,
	start,
	end,
	...props
}): React.JSX.Element => {
	if (children === undefined)
		return (
			<LinearGradientStyle
				as={RNLinearGradient}
				start={start as LinearGradientPoint}
				end={end as LinearGradientPoint}
				{...props}
			/>
		);
	return (
		<LinearGradientStyle
			{...props}
			as={RNLinearGradient}
			start={start as LinearGradientPoint}
			end={end as LinearGradientPoint}>
			{children}
		</LinearGradientStyle>
	);
};

export default Box;
