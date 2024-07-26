/**
 * @fileOverview AnimateCarousel Component
 * @description This file includes the definition and functionality of the AnimateCarousel component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { memo, useCallback } from 'react';

import Animated from 'react-native-reanimated';

import { CarouselItem } from './components/CarouselItem';
import { AnimateCarouselProps } from './types';
import { useAnimateCarousel } from './useAnimateCarousel';
import { Footer } from '../components/Footer';
import { Pagination } from '../components/Pagination';
import { ICarouselItemData } from '../types';

/**
 * AnimateCarousel component to encapsulate the functionality of app.
 * @param {AnimateCarouselProps} props - Props for the animate carousel component.
 * @returns {JSX.Element} - The rendered animate carousel element.
 */
const AnimateCarousel: React.FC<AnimateCarouselProps> = ({
	data,
	showDots = true,
	showPagination = true,
	showFooter = true,
	pagination,
	footer,
}) => {
	const {
		state: { flatListRef, x, flatListIndex },
		actions: { onViewableItemsChanged, onScroll },
	} = useAnimateCarousel();

	const renderItem = useCallback(
		({ item, index }: { item: ICarouselItemData; index: number }) => (
			<CarouselItem item={item} x={x} index={index} />
		),
		[x]
	);

	const keyExtractor = useCallback((item: ICarouselItemData) => item.id, []);

	return (
		<>
			<Animated.FlatList
				ref={flatListRef}
				onScroll={onScroll}
				data={data}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				scrollEventThrottle={16}
				horizontal
				bounces={false}
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				onViewableItemsChanged={onViewableItemsChanged}
				viewabilityConfig={{
					minimumViewTime: 300,
					viewAreaCoveragePercentThreshold: 10,
				}}
				initialNumToRender={3}
				maxToRenderPerBatch={5}
				windowSize={5}
			/>
			{showDots && showPagination && (
				<>{!pagination ? <Pagination items={data} x={x} /> : { pagination }}</>
			)}
			{showFooter && (
				<>
					{!footer ? (
						<Footer
							flatListRef={flatListRef}
							flatListIndex={flatListIndex}
							dataLength={data.length}
							x={x}
							text={'Pagination'}
							onPress={() => {}}
						/>
					) : (
						{ footer }
					)}
				</>
			)}
		</>
	);
};

export default memo(AnimateCarousel);
