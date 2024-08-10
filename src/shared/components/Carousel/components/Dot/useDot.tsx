/**
 * @fileOverview useDot Hook
 * @description This custom hook is designed to .
 *              It is part of the wilodev-app project and follows the standard hook structure,
 *              providing both state and actions for .
 *              This hook is designed to be reusable across various parts of the application.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import {
	Extrapolation,
	interpolate,
	interpolateColor,
	useAnimatedStyle,
} from 'react-native-reanimated';

import { useDimensions } from '@/hooks/useDimensions';

import { DotProps } from './types';

/**
 * Dot component to encapsulate use case  dot.
 * @param {DotProps} props - Props for the dot component.
 * @returns {JSX.Element} - The rendered dot element.
 */
export const useDot = ({ x, index }: DotProps) => {
	const { width, height } = useDimensions();

	const animatedDotStyle = useAnimatedStyle(() => {
		const widthAnimation = interpolate(
			x.value,
			[(index - 1) * width, index * width, (index + 1) * width],
			[10, 20, 10],
			Extrapolation.CLAMP
		);

		const opacityAnimation = interpolate(
			x.value,
			[(index - 1) * width, index * width, (index + 1) * width],
			[0.5, 1, 0.5],
			Extrapolation.CLAMP
		);
		return {
			width: widthAnimation,
			opacity: opacityAnimation,
		};
	});

	const animatedColor = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			x.value,
			[0, width, 2 * width],
			['#005b4f', '#1e2169', '#F15937']
		);

		return {
			backgroundColor: backgroundColor,
		};
	});

	const state = {
		width,
		height,
		animatedDotStyle,
		animatedColor,
	};

	return { state };
};
