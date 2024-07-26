/**
 * @fileOverview useAnimateCarousel Hook
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

import { useCallback } from 'react';

import { FlatList, ViewToken } from 'react-native';

import {
	useAnimatedRef,
	useAnimatedScrollHandler,
	useSharedValue,
} from 'react-native-reanimated';

import { ICarouselItemData } from '../types';

/**
 * AnimateCarousel component to encapsulate use case  animate carousel.
 * @param {AnimateCarouselProps} props - Props for the animate carousel component.
 * @returns {JSX.Element} - The rendered animate carousel element.
 */
export const useAnimateCarousel = () => {
	const flatListRef = useAnimatedRef<FlatList<ICarouselItemData>>();
	const x = useSharedValue(0);
	const flatListIndex = useSharedValue(0);

	const onViewableItemsChanged = useCallback(
		({ viewableItems }: { viewableItems: ViewToken[] }) => {
			if (viewableItems[0].index !== null) {
				flatListIndex.value = viewableItems[0].index;
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const onScroll = useAnimatedScrollHandler({
		onScroll: (event) => {
			x.value = event.contentOffset.x;
		},
	});

	return {
		state: {
			flatListRef,
			x,
			flatListIndex,
		},
		actions: {
			onViewableItemsChanged,
			onScroll,
		},
	};
};
