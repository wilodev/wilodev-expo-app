/**
 * @fileOverview Footer Component
 * @description This file includes the definition and functionality of the Footer component.
 *              It is part of the AnimateCarousel functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';

import { AnimateBox, AnimateImage, AnimateText } from '@/shared/ui';

import { FooterProps } from './types';
import { useFooter } from './useFooter';

/**
 * Footer component to encapsulate the functionality of app.
 * @param {FooterProps} props - Props for the footer component.
 * @returns {JSX.Element} - The rendered footer element.
 */
const Footer: React.FC<FooterProps> = ({
	flatListRef,
	x,
	dataLength,
	flatListIndex,
	text,
	onPress,
}): React.JSX.Element => {
	const {
		state: {
			buttonAnimationStyle,
			arrowAnimationStyle,
			textAnimationStyle,
			animatedColor,
		},
		actions: { handleButtonPress },
	} = useFooter({ flatListRef, x, dataLength, flatListIndex, text, onPress });
	return (
		<TouchableWithoutFeedback onPress={handleButtonPress}>
			<AnimateBox style={[buttonAnimationStyle, animatedColor]}>
				<AnimateText style={[textAnimationStyle]}>{text}</AnimateText>
				<AnimateImage
					source={require('@/assets/images/arrow.png')}
					style={[arrowAnimationStyle]}
				/>
			</AnimateBox>
		</TouchableWithoutFeedback>
	);
};

export default Footer;
