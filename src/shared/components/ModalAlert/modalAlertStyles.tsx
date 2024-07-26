/**
 * @fileOverview Styles for Alert Component
 * @description This file provides style definitions for the Alert component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the Alert component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { styled } from '@gluestack-style/react';
import {
	ModalBackdrop,
	ModalBody,
	ModalCloseButton,
	ModalFooter,
	ModalHeader,
} from '@gluestack-ui/themed';

import { Box, AnimateBox, Heading } from '@/shared/ui';

/**
 * Retrieves the default style for Alert.
 */
export const GestureHandlerRootViewStyle = styled(GestureHandlerRootView, {
	position: 'absolute',
	width: '100%',
	height: '$1/2',
	alignItems: 'center',
	zIndex: 1000,
	bottom: 0,
});

export const BoxAlertAnimateStyle = styled(AnimateBox, {
	borderTopLeftRadius: 20,
	borderTopRightRadius: 20,
	height: '$full',
	bottom: 0,
	width: '100%',
	position: 'absolute',
	justifyContent: 'center',
	alignContent: 'center',
	alignItems: 'center',
	left: 0,
	zIndex: 1004,
	backgroundColor: '$backgroundLight',
	_dark: {
		backgroundColor: '$backgroundDark',
	},
});

export const ModalBackdropStyle = styled(ModalBackdrop, {
	backgroundColor: 'black',
	opacity: 0.5,
	position: 'absolute',
	width: '100%',
	height: '100%',
	zIndex: 1000,
});

export const ModalHeaderStyle = styled(ModalHeader, {
	justifyContent: 'center',
	position: 'relative',
	flexDirection: 'column',
});

export const ModalCloseButtonStyle = styled(ModalCloseButton, {
	position: 'absolute',
	right: 10,
	top: 10,
});

export const BoxBarStyle = styled(Box, {
	width: 40,
	height: 5,
	backgroundColor: '$grayLight',
	borderRadius: 2.5,
	alignSelf: 'center',
	marginVertical: 10,
	position: 'absolute',
	top: 0,
});

export const HeadingStyle = styled(Heading, {
	fontSize: 20,
	fontWeight: 'bold',
	marginBottom: 10,
	color: '$textLight',
	_dark: {
		color: '$textDark',
	},
});

export const ModalBodyStyle = styled(ModalBody, {
	padding: 20,
	width: '100%',
	height: '100%',
	flex: 1,
	borderBottomWidth: 1,
	borderBottomColor: '$borderLight',
	_dark: {
		borderBottomColor: '$borderDark',
	},
});

export const ModalFooterStyle = styled(ModalFooter, {
	marginBottom: '$4',
});

export const BoxNotificationStyle = styled(Box, {
	my: '$6',
});

export const BoxContainerNotificationStyle = styled(Box, {
	rounded: '$full',
	w: '$16',
	h: '$16',
	position: 'relative',
	justifyContent: 'center',
	alignItems: 'center',
});

export const BoxBorderNotificationStyle = styled(Box, {
	rounded: '$full',
	w: '$full',
	h: '$full',
	opacity: 0.5,
	position: 'absolute',
	top: 0,
	left: 0,
	variants: {
		actions: {
			primary: {
				backgroundColor: '$primaryLight',
				_dark: {
					backgroundColor: '$primaryDark',
				},
			},
			secondary: {
				backgroundColor: '$secondaryLight',
				_dark: {
					backgroundColor: '$secondaryDark',
				},
			},
			success: {
				backgroundColor: '$successLight',
				_dark: {
					backgroundColor: '$successDark',
				},
			},
			warning: {
				backgroundColor: '$warningLight',
				_dark: {
					backgroundColor: '$warningDark',
				},
			},
			error: {
				backgroundColor: '$errorLight',
				_dark: {
					backgroundColor: '$errorDark',
				},
			},
			info: {
				backgroundColor: '$infoLight',
				_dark: {
					backgroundColor: '$infoDark',
				},
			},
		},
	},
});

export const BoxContentNotificationStyle = styled(Box, {
	rounded: '$full',
	w: '$12',
	h: '$12',
	justifyContent: 'center',
	alignItems: 'center',
	variants: {
		actions: {
			primary: {
				backgroundColor: '$primaryLight',
				_dark: {
					backgroundColor: '$primaryDark',
				},
			},
			secondary: {
				backgroundColor: '$secondaryLight',
				_dark: {
					backgroundColor: '$secondaryDark',
				},
			},
			success: {
				backgroundColor: '$successLight',
				_dark: {
					backgroundColor: '$successDark',
				},
			},
			warning: {
				backgroundColor: '$warningLight',
				_dark: {
					backgroundColor: '$warningDark',
				},
			},
			error: {
				backgroundColor: '$errorLight',
				_dark: {
					backgroundColor: '$errorDark',
				},
			},
			info: {
				backgroundColor: '$infoLight',
				_dark: {
					backgroundColor: '$infoDark',
				},
			},
		},
	},
});
