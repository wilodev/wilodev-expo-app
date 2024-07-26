/**
 * @fileOverview useSplashScreen Hook
 * @description This custom hook is designed to Layouts.
 *              It is part of the wilodev-app project and follows the standard hook structure,
 *              providing both state and actions for Layouts.
 *              This hook is designed to be reusable across various parts of the application.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useEffect, useRef } from 'react';

import { Animated, Dimensions } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * SplashScreen component to encapsulate use case  splash screen.
 * @param {SplashScreenProps} props - Props for the splash screen component.
 * @returns {JSX.Element} - The rendered splash screen element.
 */
export const useSplashScreen = () => {
	// Background Color...
	const BGColor = '#4D4A95';
	// SafeArea Value...
	const edges = useSafeAreaInsets();

	// Animation Values....
	const startAnimation = useRef(new Animated.Value(0)).current;

	// Scaling Down Both logo and Title...
	const scaleLogo = useRef(new Animated.Value(1)).current;
	const scaleTitle = useRef(new Animated.Value(1)).current;

	// Offset Animation....
	const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
	const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

	// Animating COntent...
	const contentTransition = useRef(
		new Animated.Value(Dimensions.get('window').height)
	).current;

	// Animation Done....
	useEffect(() => {
		// Starting Animation after 500ms....
		setTimeout(() => {
			// Parallel Animation...
			Animated.parallel([
				Animated.timing(startAnimation, {
					// For same Height for non safe Area Devices...
					toValue: -Dimensions.get('window').height + (edges.top + 65),
					useNativeDriver: true,
				}),
				Animated.timing(scaleLogo, {
					// Scaling to 0.35
					toValue: 0.3,
					useNativeDriver: true,
				}),
				Animated.timing(scaleTitle, {
					// Scaling to 0.8
					toValue: 0.8,
					useNativeDriver: true,
				}),
				Animated.timing(moveLogo, {
					// Moving to Right Most...
					toValue: {
						x: Dimensions.get('window').width / 2 - 35,
						y: Dimensions.get('window').height / 2 - 5,
					},
					useNativeDriver: true,
				}),
				Animated.timing(moveTitle, {
					// Moving to Right Most...
					toValue: {
						x: 0,
						// Since image size is 100...
						y: Dimensions.get('window').height / 2 - 90,
					},
					useNativeDriver: true,
				}),
				Animated.timing(contentTransition, {
					toValue: 0,
					useNativeDriver: true,
				}),
			]).start();
		}, 500);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		BGColor,
		startAnimation,
		moveLogo,
		scaleLogo,
		moveTitle,
		scaleTitle,
		contentTransition,
	};
};
