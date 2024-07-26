/**
 * @fileOverview PhoneInput Component
 * @description This component extends the BaseInput component specifically for email entry.
 *              It sets default properties appropriate for email input fields to enhance user experience
 *              and input accuracy on mobile devices.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { useEffect, useState } from 'react';

import { TouchableWithoutFeedback } from 'react-native';

import { useTranslationApp } from '@/locales/useTranslationApp';
import { ArrowDownIcon, Box, Text } from '@/shared/ui';

import { flagsData } from './data';
import { PhoneData, PhoneInputProps } from './types';
import { BaseInput } from '../BaseInput';

/**
 * PhoneInput component to encapsulate the functionality of app.
 * @param {PhoneInputProps} props - Props for the base input component.
 * @returns {JSX.Element} - The rendered base input element.
 */
const PhoneInput: React.FC<PhoneInputProps> = ({
	placeholder,
	onPressPrefix,
	currentPrefix,
	...props
}) => {
	const [currentFlag, setCurrentFlag] = useState<PhoneData>(flagsData[1]);
	const {
		actions: { t },
	} = useTranslationApp();
	const handleChange = (text: string) => {
		const phoneRegex = /^[+]?[0-9]*$/;
		if (phoneRegex.test(text) && text.length <= 15) {
			props.onChangeText?.(text);
		}
	};

	useEffect(() => {
		if (currentPrefix) {
			const flag = flagsData.find((value) => value.code === currentPrefix);
			setCurrentFlag(flag || flagsData[1]);
		}
	}, [currentPrefix]);

	const label = props.label || t('commons.phone.label');
	const helperText = props.helperText || 'Ejem: +593 999 999 999';
	const error = props.error || '';
	// Se elimina de las props el label si esta definido.
	delete props.label;
	delete props.helperText;
	delete props.error;
	return (
		<Box minHeight={103} maxHeight={132}>
			{label && (
				<Text size="sm" mb={'$2'}>
					{label as string}
				</Text>
			)}
			<Box flexDirection="row" h={56} minHeight={56}>
				<Box w={106} mr={'$1'} h={56} minHeight={56}>
					<TouchableWithoutFeedback onPress={onPressPrefix} style={{ flex: 1 }}>
						<Box
							h={56}
							minHeight={56}
							maxHeight={56}
							w={'$full'}
							bg="$inputBackgroundLight"
							$dark-bg="$inputBackgroundDark"
							borderWidth={1}
							borderColor="$inputBorderLight"
							$dark-borderColor="$inputBorderDark"
							rounded={'$md'}
							flexDirection="row"
							justifyContent="center"
							alignItems="center">
							<Text size={'sm'} mx={4}>
								{currentFlag ? currentFlag.code : ''}
							</Text>
							<Text size={'sm'} mr={4}>
								+{currentFlag ? currentFlag.calling_code : ''}
							</Text>
							<ArrowDownIcon
								w={14}
								h={14}
								fill="$iconLight"
								stroke="$iconDark"
							/>
						</Box>
					</TouchableWithoutFeedback>
				</Box>
				<Box flex={1} h={56} minHeight={56}>
					<BaseInput
						{...props}
						placeholder={placeholder}
						autoCapitalize="none"
						keyboardType="phone-pad"
						autoComplete="off"
						inputMode="tel"
						textContentType="telephoneNumber"
						maxLength={15}
						onChangeText={handleChange}
						w={'$full'}
					/>
				</Box>
			</Box>
			{helperText && (
				<Text size="sm" mt={'$2'} action="muted">
					{helperText}
				</Text>
			)}
			{error && (
				<Text size="sm" action="error" mt={'$2'}>
					{error}
				</Text>
			)}
		</Box>
	);
};

export default PhoneInput;
