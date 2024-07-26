/**
 * @fileOverview useCarouselItem Hook
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
	useAnimatedStyle,
} from 'react-native-reanimated';

import { useDimensions } from '@/hooks/useDimensions';

import { ICarouselItemProps } from './types';

/**
 * CarouselItem component to encapsulate use case  carouselItem.
 * @param {CarouselItemProps} props - Props for the carouselItem component.
 * @returns {JSX.Element} - The rendered carouselItem element.
 */
export const useCarouselItem = ({
	index,
	x,
}: Omit<ICarouselItemProps, 'item'>) => {
	const { width, height } = useDimensions();
	const circleAnimation = useAnimatedStyle(() => {
		const scale = interpolate(
			x.value,
			[(index - 1) * width, index * width, (index + 1) * width],
			[1, 4, 4],
			Extrapolation.CLAMP
		);

		return {
			transform: [{ scale: scale }],
		};
	});

	const animationStyle = useAnimatedStyle(() => {
		const translateYAnimation = interpolate(
			x.value,
			[(index - 1) * width, index * width, (index + 1) * width],
			[200, 0, -200],
			Extrapolation.CLAMP
		);

		return {
			transform: [{ translateY: translateYAnimation }],
		};
	});

	const state = {
		width,
		height,
		animationStyle,
		circleAnimation,
	};
	const actions = {};
	return { state, actions };
};
