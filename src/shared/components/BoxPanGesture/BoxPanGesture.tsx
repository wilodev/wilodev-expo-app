/**
 * @fileOverview BoxPanGesture Component
 * @description This file includes the definition and functionality of the BoxPanGesture component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { forwardRef } from 'react';

import { DimensionValue } from 'react-native';

import {
	PanGestureHandler,
	PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from 'react-native-reanimated';

import { AnimateBox, Box } from '@/shared/ui';

import { BoxContainer, BoxLeft, BoxRight } from './boxPanGestureStyles';
import { BoxPanGestureProps } from './types';

/**
 * BoxPanGesture component to encapsulate the functionality of app.
 * @param {BoxPanGestureProps} props - Props for the pan gesture handler component.
 * @returns {JSX.Element} - The rendered pan gesture handler element.
 */
const BoxPanGesture = forwardRef<PanGestureHandler, BoxPanGestureProps>(
	(
		{ children, onSwipeLeft, onSwipeRight, leftComponent, rightComponent },
		_ref
	) => {
		const translateX = useSharedValue(0);
		const leftWidth = useSharedValue('0%');
		const rightWidth = useSharedValue('0%');
		const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
			const { translationX, translationY } = event.nativeEvent;
			if (Math.abs(translationX) > Math.abs(translationY)) {
				if (translationX > 0 && onSwipeLeft) {
					translateX.value = translationX;
					leftWidth.value = `99%`;
				} else if (translationX < 0 && onSwipeRight) {
					translateX.value = translationX;
					rightWidth.value = `99%`;
				}
			}
		};

		const onGestureEnd = () => {
			if (translateX.value < -100 && onSwipeRight) {
				runOnJS(onSwipeRight)();
			} else if (translateX.value > 100 && onSwipeLeft) {
				runOnJS(onSwipeLeft)();
			}
			translateX.value = withSpring(0, { damping: 20 });
			leftWidth.value = withTiming('0%', { duration: 1000 });
			rightWidth.value = withTiming('0%', { duration: 1000 });
		};

		const animatedStyle = useAnimatedStyle(() => ({
			transform: [{ translateX: translateX.value }],
			opacity: 1,
		}));
		const leftAnimatedStyle = useAnimatedStyle(() => ({
			width: leftWidth.value as DimensionValue,
		}));

		const rightAnimatedStyle = useAnimatedStyle(() => ({
			width: rightWidth.value as DimensionValue,
		}));

		return (
			<BoxContainer zIndex={4}>
				{onSwipeLeft && leftComponent && (
					<BoxLeft style={[leftAnimatedStyle]}>{leftComponent}</BoxLeft>
				)}
				<Box zIndex={3} w={'$full'}>
					<PanGestureHandler
						onGestureEvent={onGestureEvent}
						onEnded={onGestureEnd}
						activeOffsetX={[-20, 20]}>
						<AnimateBox w={'$full'} style={[animatedStyle]}>
							{children}
						</AnimateBox>
					</PanGestureHandler>
				</Box>
				{onSwipeRight && rightComponent && (
					<BoxRight style={[rightAnimatedStyle]}>{rightComponent}</BoxRight>
				)}
			</BoxContainer>
		);
	}
);
BoxPanGesture.displayName = 'BoxPanGesture';
export default BoxPanGesture;
