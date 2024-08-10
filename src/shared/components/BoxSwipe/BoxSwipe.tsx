/**
 * @fileOverview BoxSwipe Component
 * @description This file includes the definition and functionality of the BoxSwipe component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for handling swipe actions.
 * @autor Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { forwardRef, useEffect } from 'react';

import { Swipeable } from 'react-native-gesture-handler';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { AnimateBox } from '@/shared/ui';

import { BoxSwipeProps } from './types';

/**
 * BoxSwipe component to encapsulate the functionality of app.
 * @param {BoxSwipeProps} props - Props for the box swipe component.
 * @returns {JSX.Element} - The rendered box swipe element.
 */
const BoxSwipe = forwardRef<Swipeable, BoxSwipeProps>(
	(
		{ children, renderLeftActions, renderRightActions, onOpen },
		ref
	): React.JSX.Element => {
		const animatedStyle = useAnimatedStyle(() => {
			return {
				transform: [{ translateX: withTiming(0, { duration: 0 }) }],
			};
		});

		const shouldRenderLeftActions = !!renderLeftActions;
		const shouldRenderRightActions = !!renderRightActions;

		useEffect(() => {
			if (ref && typeof ref === 'object' && ref.current) {
				ref.current.openLeft = () => onOpen?.(ref.current);
				ref.current.openRight = () => onOpen?.(ref.current);
			}
		}, [onOpen, ref]);

		return (
			<Swipeable
				ref={ref}
				renderLeftActions={
					shouldRenderLeftActions ? renderLeftActions : undefined
				}
				renderRightActions={
					shouldRenderRightActions ? renderRightActions : undefined
				}
				leftThreshold={shouldRenderLeftActions ? 0.3 : undefined}
				rightThreshold={shouldRenderRightActions ? 0.3 : undefined}
				friction={1.5}
				onSwipeableOpenStartDrag={() =>
					onOpen?.(ref && typeof ref === 'object' ? ref.current : null)
				}
				enabled={
					(shouldRenderLeftActions && !shouldRenderRightActions) ||
					(!shouldRenderLeftActions && shouldRenderRightActions)
				}>
				<AnimateBox style={animatedStyle}>{children}</AnimateBox>
			</Swipeable>
		);
	}
);
BoxSwipe.displayName = 'BoxPanGesture';
export default BoxSwipe;
