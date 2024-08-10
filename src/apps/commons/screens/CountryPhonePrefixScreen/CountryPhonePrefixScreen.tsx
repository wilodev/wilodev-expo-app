/**
 * @fileOverview CountryPhonePrefixScreen Component
 * @description This screen component is responsible for displaying the CountryPhonePrefix user interface.
 *              It serves as a container for specific components related to the CountryPhonePrefix functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React, { useCallback } from 'react';

import { Platform, FlatList } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SearchInput } from '@/components/Form';
import { ModalLayout } from '@/layouts/index';
import { Button, Text } from '@/shared/ui';
import { Box } from '@/ui/Box';

import {
	CountryVirtualizedItem,
	ICountry,
} from '../../components/CountryVirtualizedList';
import { useCountryPhonePrefix } from '../../hooks/useCountryPhonePrefix';

const CountryPhonePrefix: React.FC = () => {
	const {
		state: { searchText, filteredCountries, selectedCountry },
		actions: {
			t,
			handleSearch,
			handleClearSearch,
			handleSelectCountry,
			handleClose,
		},
	} = useCountryPhonePrefix();
	const renderItem = useCallback(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		({ item, index }: { item: ICountry; index: number }) => {
			console.log('🚀 ~ file: CountryPhonePrefixScreen.tsx:40 ~ index:', index);
			return (
				<CountryVirtualizedItem
					key={item.code}
					{...item}
					onPress={() => handleSelectCountry(item.code)}
					isSelected={selectedCountry === item.code}
				/>
			);
		},
		[handleSelectCountry, selectedCountry]
	);
	const insets = useSafeAreaInsets();

	return (
		<ModalLayout>
			<Box w={'$full'} h={'$full'} mt={Platform.OS === 'ios' ? 0 : insets.top}>
				<Box
					justifyContent="center"
					alignItems="center"
					px={'$6'}
					mb={'$4'}
					mt={Platform.OS === 'ios' ? '-$10' : '$4'}
					flexDirection="row">
					<Box w={'$24'} />
					<Text flex={1} textAlign="center">
						{t('commonsMessages.country.title')}
					</Text>
					<Button
						onPress={handleClose}
						variant="link"
						text={t('commonsMessages.country.buttons.cancel')}
						w={'$24'}
						action="secondary"
						$dark-action="primary"
					/>
				</Box>
				<Box px={'$6'}>
					<SearchInput
						value={searchText}
						onChangeText={handleSearch}
						endIconHandler={handleClearSearch}
					/>
				</Box>
				{filteredCountries.length > 0 && (
					<Box w={'$full'} h={'$full'} px={'$6'}>
						<FlatList<ICountry>
							data={filteredCountries}
							initialNumToRender={10}
							renderItem={renderItem}
							keyExtractor={(_, index) => index.toString()}
							maxToRenderPerBatch={5}
							windowSize={5}
						/>
					</Box>
				)}
			</Box>
		</ModalLayout>
	);
};

export default CountryPhonePrefix;
