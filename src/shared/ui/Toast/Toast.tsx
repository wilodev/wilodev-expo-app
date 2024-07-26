/**
 * @fileOverview Toast Component
 * @description This file includes the definition and functionality of the Toast component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { useEffect } from 'react';

import {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

import {
	AnimateBoxStyle,
	Message,
	Button,
	CloseButtonIcon,
} from './toastStyles';
import { ToastProps } from './types';

/**
 * Toast component to encapsulate the functionality of app.
 * @param {ToastProps} props - Props for the toast component.
 * @returns {JSX.Element} - The rendered toast element.
 */
const Toast: React.FC<ToastProps> = ({
	id,
	message,
	placement = 'bottom',
	isVisible,
	onClose,
	actions,
	duration = 5000, // 5 seconds
}) => {
	const translateY = useSharedValue(placement === 'top' ? -100 : 100);
	const opacity = useSharedValue(0);

	useEffect(() => {
		if (isVisible) {
			translateY.value = withTiming(0, {
				duration: 900,
				easing: Easing.out(Easing.exp),
			});
			opacity.value = withTiming(1, {
				duration: 900,
			});
			const timer = setTimeout(() => {
				onClose();
			}, duration);
			return () => clearTimeout(timer);
		} else {
			translateY.value = withTiming(placement === 'top' ? -100 : 100, {
				duration: 900,
				easing: Easing.in(Easing.exp),
			});
			opacity.value = withTiming(0, {
				duration: 900,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible]);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: translateY.value }],
		opacity: opacity.value,
	}));

	return (
		<AnimateBoxStyle
			style={[animatedStyle]}
			nativeID={`toast-${id}`}
			actions={actions}
			placement={placement}>
			<Button onPress={onClose}>
				<CloseButtonIcon
					fill={actions === 'primary' ? '$black' : '$white'}
					stroke={actions === 'primary' ? '$black' : '$white'}
				/>
			</Button>
			<Message actions={actions}>{message}</Message>
		</AnimateBoxStyle>
	);
};

export default Toast;
