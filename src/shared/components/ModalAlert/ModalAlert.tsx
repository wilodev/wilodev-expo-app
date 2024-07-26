/**
 * @fileOverview Modal Alert Component
 * @description This file includes the definition and functionality of the Modal Alert component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { useEffect, useRef, useState } from 'react';

import { StyleSheet, useWindowDimensions } from 'react-native';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	runOnJS,
} from 'react-native-reanimated';

import { Modal } from '@gluestack-ui/themed';
import { BlurView } from 'expo-blur';

import { useTranslationApp } from '@/locales/useTranslationApp';
import { Heading, Button, CheckIcon, CloseIcon } from '@/shared/ui';
import { Box } from '@/ui/Box';

import {
	BoxAlertAnimateStyle,
	BoxBarStyle,
	BoxBorderNotificationStyle,
	BoxContainerNotificationStyle,
	BoxContentNotificationStyle,
	BoxNotificationStyle,
	GestureHandlerRootViewStyle,
	ModalBackdropStyle,
	ModalBodyStyle,
	ModalFooterStyle,
	ModalHeaderStyle,
} from './modalAlertStyles';
import { ModalAlertProps } from './types';

/**
 * ModalAlert component to encapsulate the functionality of app.
 * @param {ModalAlertProps} props - Props for the ModalAlert component.
 * @returns {JSX.Element} - The rendered ModalAlert element.
 */
const ModalAlert: React.FC<ModalAlertProps> = ({
	title,
	children,
	actions = 'error',
	onClose,
	openModal,
}): React.JSX.Element => {
	const { height } = useWindowDimensions();
	const translateY = useSharedValue(0);
	const [showModal, setShowModal] = useState<boolean>(openModal);

	useEffect(() => {
		// Animate the modal to slide up when it's first rendered
		translateY.value = withTiming(-5, { duration: 100 });
	}, [translateY]);

	// Icons should be added to the actions button when the actions are defined
	const actionsIcons = {
		primary: <CheckIcon />,
		secondary: <CheckIcon />,
		success: <CheckIcon />,
		error: <CloseIcon />,
		warning: <CheckIcon />,
		info: <CheckIcon />,
	};

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: translateY.value }],
			opacity: withTiming(translateY.value > height ? 0 : 1, { duration: 200 }),
		};
	});

	const closeOverlay = () => {
		'worklet';
		translateY.value = withTiming(height, { duration: 200 }, () => {
			runOnJS(setShowModal)(false);
			onClose && runOnJS(onClose)();
		});
	};

	const gesture = Gesture.Pan()
		.onUpdate((event) => {
			'worklet';
			if (event.translationY > 0) {
				translateY.value = event.translationY;
			}
		})
		.onEnd((event) => {
			'worklet';
			if (event.translationY > height * 0.25) {
				closeOverlay();
			} else {
				translateY.value = withTiming(0, { duration: 200 });
			}
		});

	const ref = useRef(null);
	const {
		actions: { t },
	} = useTranslationApp();
	return (
		<Modal
			isOpen={showModal}
			onClose={closeOverlay}
			finalFocusRef={ref}
			size={'full'}
			h={height}>
			<ModalBackdropStyle onPress={closeOverlay}>
				<BlurView tint="dark" intensity={50} style={StyleSheet.absoluteFill} />
			</ModalBackdropStyle>
			<GestureHandlerRootViewStyle>
				<GestureDetector gesture={gesture}>
					<BoxAlertAnimateStyle style={[animatedStyle]}>
						<ModalHeaderStyle>
							<BoxBarStyle />
							<BoxNotificationStyle>
								<BoxContainerNotificationStyle>
									<BoxBorderNotificationStyle actions={actions} />
									<BoxContentNotificationStyle actions={actions}>
										{actionsIcons[actions]}
									</BoxContentNotificationStyle>
								</BoxContainerNotificationStyle>
							</BoxNotificationStyle>
							{title && (
								<Box my={'$2'}>
									<Heading size="lg">{title}</Heading>
								</Box>
							)}
						</ModalHeaderStyle>
						<ModalBodyStyle>{children}</ModalBodyStyle>
						<ModalFooterStyle>
							<Button
								variant="link"
								size="sm"
								action={actions || 'success'}
								mr="$3"
								onPress={closeOverlay}
								text={t('alerts.ok')}
							/>
						</ModalFooterStyle>
					</BoxAlertAnimateStyle>
				</GestureDetector>
			</GestureHandlerRootViewStyle>
		</Modal>
	);
};

export default ModalAlert;
