/**
 * @fileOverview Dot Component
 * @description This file includes the definition and functionality of the Dot component.
 *              It is part of the Carousel functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { AnimateBox } from '@/shared/ui';

import { DotProps } from './types';
import { useDot } from './useDot';

/**
 * Dot component to encapsulate the functionality of app.
 * @param {DotProps} props - Props for the dot component.
 * @returns {JSX.Element} - The rendered dot element.
 */
const Dot: React.FC<DotProps> = ({ x, index }): React.JSX.Element => {
	const {
		state: { animatedDotStyle, animatedColor },
	} = useDot({ x, index });
	return (
		<AnimateBox
			height={10}
			marginHorizontal={10}
			borderRadius={5}
			style={[animatedDotStyle, animatedColor]}
		/>
	);
};

export default Dot;
