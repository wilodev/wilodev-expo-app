/**
 * @fileOverview CarouselItem Component
 * @description This file includes the definition and functionality of the CarouselItem component.
 *              It is part of the Init functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { AnimateBox, Heading, Text } from '@/shared/ui';
import { Box } from '@/ui/Box';

import { ICarouselItemProps } from './types';
import { useCarouselItem } from './useCarouselItem';

/**
 * CarouselItem component to encapsulate the functionality of app.
 * @param {CarouselItemProps} props - Props for the Carousel item component.
 * @returns {JSX.Element} - The rendered Carousel item element.
 */
const CarouselItem: React.FC<ICarouselItemProps> = ({
	index,
	x,
	item,
}): React.JSX.Element => {
	const {
		state: { width, height, animationStyle, circleAnimation },
	} = useCarouselItem({ index, x });
	return (
		<Box
			flex={1}
			justifyContent="space-around"
			alignItems="center"
			marginBottom={120}
			width={width}>
			<Box alignItems="center" justifyContent="flex-end">
				<AnimateBox
					width={width}
					height={height}
					borderRadius={width / 2}
					bg={item.backgroundColor}
					style={[circleAnimation]}
				/>
			</Box>
			<AnimateBox style={animationStyle}>
				<Box w={355} h={355} bg="$white" marginTop={36} marginBottom={42}></Box>
			</AnimateBox>
			<Heading
				fontSize={40}
				lineHeight={48}
				fontWeight={500}
				textAlign="center">
				{item.title}
			</Heading>
			<Text size="sm" lineHeight={22} textAlign="center">
				{item.description}
			</Text>
		</Box>
	);
};

export default CarouselItem;
