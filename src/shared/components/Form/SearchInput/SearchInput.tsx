/**
 * @fileOverview SearchInput Component
 * @description This component extends the BaseInput component specifically for email entry.
 *              It sets default properties appropriate for email input fields to enhance user experience
 *              and input accuracy on mobile devices.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { Platform } from 'react-native';

import { SearchInputProps } from './types';
import { SearchIcon, CrossSquareIcon } from '../../../ui/Icons';
import { BaseInput } from '../BaseInput';

/**
 * SearchInput component to encapsulate the functionality of app.
 * @param {SearchInputProps} props - Props for the base input component.
 * @returns {JSX.Element} - The rendered base input element.
 */
const SearchInput: React.FC<SearchInputProps> = ({ placeholder, ...props }) => {
	return (
		<BaseInput
			placeholder={placeholder ?? 'Search...'}
			autoCapitalize="sentences"
			keyboardType={Platform.OS === 'ios' ? 'web-search' : 'default'}
			autoComplete="off"
			inputMode="search"
			textContentType="none"
			returnKeyType="search"
			enterKeyHint="search"
			startIcon={
				<SearchIcon
					fill="$iconLight"
					stroke="$iconLight"
					$dark-fill="$iconDark"
					$dark-stroke="$iconDark"
				/>
			}
			endIcon={
				props?.value ? (
					<CrossSquareIcon
						fill="$iconLight"
						stroke="$iconLight"
						$dark-fill="$iconDark"
						$dark-stroke="$iconDark"
					/>
				) : undefined
			}
			{...props}
		/>
	);
};

export default SearchInput;
