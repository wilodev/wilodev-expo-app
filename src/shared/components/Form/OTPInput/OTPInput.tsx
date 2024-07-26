/**
 * @fileOverview OTPInput Component
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

import { OTPInputProps } from './types';
import { useOTPInput } from './useOTPInput';
import { Box } from '../../../ui/Box';
import { Text } from '../../../ui/Text';
import { BaseInput } from '../BaseInput';

/**
 * OTPInput component to encapsulate the functionality of app.
 * @param {OTPInputProps} props - Props for the base input component.
 * @returns {JSX.Element} - The rendered base input element.
 */
const OTPInput: React.FC<OTPInputProps> = ({
	label,
	placeholder = '-',
	OTPError,
	...props
}) => {
	const { focusNext, inputsRef, OTP } = useOTPInput({
		length: 6,
		onChangeText: props.onChangeText || (() => {}),
	});
	return (
		<Box>
			<Text size="sm" mb="$3">
				{label}
			</Text>
			<Box
				h={'auto'}
				flexDirection="row"
				justifyContent="space-between"
				rowGap={4}>
				{OTP.map((value, index) => {
					return (
						<BaseInput
							nativeID={`otp-input-${index}`}
							key={`${index}`}
							placeholder={placeholder || '*'}
							autoCapitalize="none"
							keyboardType="number-pad"
							maxLength={1}
							refCallback={(ref) => (inputsRef.current[index] = ref)}
							w={48}
							h={48}
							autoComplete="off"
							inputMode="numeric"
							textContentType="oneTimeCode"
							color="$white"
							textAlign="center"
							fontWeight={'$black'}
							{...props}
							onChangeText={(text) => focusNext(index, text)}
							value={value}
						/>
					);
				})}
			</Box>
			{OTPError && (
				<Text color="$red400" size="sm" mt="$2">
					{OTPError}
				</Text>
			)}
		</Box>
	);
};

export default OTPInput;
