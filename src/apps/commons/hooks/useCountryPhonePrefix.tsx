/**
 * @fileOverview useCountryPhonePrefix Hook
 * @description This custom hook is designed to manage the selection of country phone prefixes.
 *              It is part of the wilodev-app project and follows the standard hook structure,
 *              providing both state and actions for country phone prefix functionality.
 * @module Hooks
 * @category Hooks
 * @component HOOK
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useEffect, useState } from 'react';

import { PhoneData } from '@/components/Form';
import { flagsData } from '@/components/Form/PhoneInput/data';
import { useTranslationApp } from '@/locales/useTranslationApp';
import { ACLStackParamList } from '@/navigation/ACL/type';
import { useAuthNavigation, useAuthRoute } from '@/navigation/hooks';

type OriginScreens = keyof ACLStackParamList;

/**
 * CountryPhonePrefix component to encapsulate use case country phone prefix.
 * @returns {object} - The state and actions for country phone prefix.
 */
export const useCountryPhonePrefix = () => {
	const {
		actions: { t },
	} = useTranslationApp();
	const route = useAuthRoute<'CountryPhonePrefixScreen'>();
	const [searchText, setSearchText] = useState<string>('');
	const [filteredCountries, setFilteredCountries] =
		useState<PhoneData[]>(flagsData);
	const [selectedCountry, setSelectedCountry] = useState<string>(
		route?.params.currentPrefix || ''
	);
	const navigation = useAuthNavigation();
	const originScreen = route.params?.originScreen as OriginScreens;

	useEffect(() => {
		setSelectedCountry(route?.params.currentPrefix);
	}, [route?.params.currentPrefix]);

	const handleSearch = (text: string) => {
		setSearchText(text);
		const filtered = flagsData.filter((country) =>
			country.name.toLowerCase().includes(text.toLowerCase())
		);
		setFilteredCountries(filtered);
	};

	const handleClose = () => {
		navigation.goBack();
	};

	const handleClearSearch = () => {
		setSearchText('');
		setFilteredCountries(flagsData);
	};

	const handleSelectCountry = (prefix: string) => {
		setSelectedCountry(prefix);
		if (originScreen) {
			switch (originScreen) {
				case 'ForgotPasswordWhatsAppScreen':
					navigation.navigate('ForgotPasswordWhatsAppScreen', {
						selectedPrefix: prefix,
					});
					break;
				case 'RegisterScreen':
					navigation.navigate('RegisterScreen', {
						selectedPrefix: prefix,
					});
					break;
				default:
					navigation.goBack();
					break;
			}
		} else {
			navigation.goBack();
		}
	};

	return {
		state: {
			searchText,
			filteredCountries,
			selectedCountry,
		},
		actions: {
			t,
			handleSearch,
			handleClearSearch,
			handleSelectCountry,
			handleClose,
		},
	};
};
