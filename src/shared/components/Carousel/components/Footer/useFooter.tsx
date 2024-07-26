/**
 * @fileOverview useFooter Hook
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
	interpolateColor,
	useAnimatedStyle,
	withSpring,
	withTiming,
} from 'react-native-reanimated';

import { useDimensions } from '@/hooks/useDimensions';

import { FooterProps } from './types';

/**
 * Dot component to encapsulate use case  dot.
 * @param {FooterProps} props - Props for the dot component.
 * @returns {JSX.Element} - The rendered dot element.
 */
export const useFooter = ({
	flatListRef,
	onPress,
	x,
	dataLength,
	flatListIndex,
}: FooterProps) => {
	const { width, height } = useDimensions();

	const buttonAnimationStyle = useAnimatedStyle(() => {
		return {
			width:
				flatListIndex.value === dataLength - 1
					? withSpring(140)
					: withSpring(60),
			height: 60,
		};
	});

	const arrowAnimationStyle = useAnimatedStyle(() => {
		return {
			width: 30,
			height: 30,
			opacity:
				flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
			transform: [
				{
					translateX:
						flatListIndex.value === dataLength - 1
							? withTiming(100)
							: withTiming(0),
				},
			],
		};
	});

	const textAnimationStyle = useAnimatedStyle(() => {
		return {
			opacity:
				flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
			transform: [
				{
					translateX:
						flatListIndex.value === dataLength - 1
							? withTiming(0)
							: withTiming(-100),
				},
			],
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

	const handleButtonPress = () => {
		if (flatListIndex.value < dataLength - 1) {
			flatListRef.current?.scrollToIndex({ index: flatListIndex.value + 1 });
		} else {
			onPress();
		}
	};

	const state = {
		width,
		height,
		buttonAnimationStyle,
		arrowAnimationStyle,
		textAnimationStyle,
		animatedColor,
	};
	const actions = {
		handleButtonPress,
	};

	return { state, actions };
};
