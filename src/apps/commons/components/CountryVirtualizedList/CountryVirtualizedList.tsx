/**
 * @fileOverview CountryVirtualizedList Component
 * @description This file includes the definition and functionality of the CountryVirtualizedList component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { memo } from 'react';

import { GestureResponderEvent } from 'react-native';

import { CheckIcon, Text, TouchableWithoutFeedback } from '@/shared/ui';
import { Box } from '@/ui/Box';

import { CountryVirtualizedListProps, ICountry } from './types';

export const getCountry = (_data: unknown, index: number): ICountry => {
	const data = (_data as ICountry[])[index];
	return {
		name: data.name,
		code: data.code,
		calling_code: data.calling_code,
		flag_class: data.flag_class,
		flag: data.flag,
	};
};

export const getCountryCount = (_data: ICountry[]) => _data.length;

/**
 * CountryVirtualizedList component to encapsulate the functionality of app.
 * @param {CountryVirtualizedListProps} props - Props for the country virtualized list component.
 * @returns {JSX.Element} - The rendered country virtualized list element.
 */
const CountryVirtualizedItem: React.FC<CountryVirtualizedListProps> = ({
	isSelected,
	...props
}): React.JSX.Element => {
	const handlePress = (event: GestureResponderEvent) => {
		event.preventDefault();
		props.onPress(props.code);
	};
	return (
		<TouchableWithoutFeedback
			flex={1}
			onPress={handlePress}
			backgroundColor="red">
			<Box
				key={props.code}
				borderBottomWidth={1}
				borderColor="$borderLight"
				$dark-borderColor="$borderDark"
				justifyContent="space-between"
				alignItems="center"
				flexDirection="row"
				py={'$4'}
				px={'$4'}>
				<Box flexDirection="row" justifyContent="center" alignItems="center">
					<Text isTruncated bold={isSelected}>
						{props.name}
					</Text>
				</Box>
				<Box
					flexDirection="row"
					justifyContent="center"
					alignItems="center"
					w={'$12'}>
					<Text w={'$full'} bold={isSelected}>
						+{props.calling_code}
					</Text>
					<Box
						w={'$2'}
						minWidth={'$2'}
						ml={'$2'}
						mr={'$1'}
						justifyContent="center"
						alignItems="center">
						{isSelected && (
							<CheckIcon
								fill="$successLight"
								stroke="$successLight"
								$dark-fill="$successLight"
								$dark-stroke="$successLight"
							/>
						)}
					</Box>
				</Box>
			</Box>
		</TouchableWithoutFeedback>
	);
};

export default memo(CountryVirtualizedItem);
