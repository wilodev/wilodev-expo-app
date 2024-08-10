/**
 * @fileOverview Checkbox Component
 * @description This file includes the definition and functionality of the Checkbox component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import {
	CheckboxIcon,
	CheckboxIndicator,
	CheckboxLabel,
} from '@gluestack-ui/themed';

import { Box } from '@/ui/Box';
import { CheckIcon } from '@/ui/Icons';
import { Text } from '@/ui/Text';

import { CheckboxInputStyle } from './checkboxInputStyles';
import { CheckboxInputProps } from './types';

/**
 * Checkbox component to encapsulate the functionality of app.
 * @param {CheckboxInputProps} props - Props for the checkbox component.
 * @returns {JSX.Element} - The rendered checkbox element.
 */
const Checkbox: React.FC<CheckboxInputProps> = ({
	label,
	children,
	error,
	...props
}): React.JSX.Element => {
	const handleChange = (isSelect: boolean) => {
		props.onChangeCheck(isSelect ? 'true' : '');
	};
	return (
		<>
			<CheckboxInputStyle
				{...props}
				onChange={handleChange}
				aria-label={label || 'checkbox'}
				isInvalid={!!error}>
				<CheckboxIndicator
					mr="$2"
					borderColor="$inputBorderDark"
					$dark-borderColor="$inputBorderLight">
					<CheckboxIcon as={CheckIcon} />
				</CheckboxIndicator>
				{label && <CheckboxLabel>{label}</CheckboxLabel>}
				{children && children}
			</CheckboxInputStyle>
			{error && (
				<Box>
					<Text size="sm" color="$error400" mt="$2">
						{error}
					</Text>
				</Box>
			)}
		</>
	);
};

export default Checkbox;
