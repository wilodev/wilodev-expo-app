/**
 * @fileOverview BaseInput Component
 * @description This file includes the definition and functionality of the BaseInput component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React, { forwardRef } from 'react';

import { StyleProp, TextInput, TextInputProps, TextStyle } from 'react-native';

import { StyledComponentProps } from '@gluestack-style/react/lib/typescript/types';

import {
	InputStyle,
	InputSlotStyle,
	InputFieldStyles,
	BoxLabel,
	AnimatedLabel,
} from './baseInputStyles';
import { BaseInputProps } from './types';
import { useBaseInput } from './useBaseInput';
import { Box } from '../../../ui/Box';
import { Text } from '../../../ui/Text';
/**
 * BaseInput component to encapsulate the functionality of app.
 * @param {BaseInputProps} props - Props for the base input component.
 * @returns {JSX.Element} - The rendered base input element.
 */
const BaseInput = forwardRef<React.RefObject<TextInput>, BaseInputProps>(
	(
		{
			placeholder,
			isDisabled,
			isInvalid,
			isReadOnly,
			action = 'default',
			type,
			label,
			isFloating = false,
			showStartIcon = true,
			showEndIcon = true,
			startIconColor,
			endIconColor,
			startIconWidth,
			startIconHeight,
			endIconWidth,
			endIconHeight,
			startIcon,
			endIcon,
			startIconHandler,
			endIconHandler,
			error,
			helperText,
			...props
		},
		_ref
	): React.JSX.Element => {
		const {
			state: {
				isFocused,
				inputStyleProps,
				animatedLabelStyle,
				placeholderTextColor,
				iconColor,
				inputRef,
			},
			actions: { handleFocus, handleBlur, handleLabelPress, handleLabelLayout },
		} = useBaseInput({ action, ...props });
		return (
			<>
				{label && !isFloating ? (
					<Text size="sm" mb={'$2'}>
						{label as string}
					</Text>
				) : (
					<BoxLabel onPress={handleLabelPress} mt={'$0.5'}>
						<AnimatedLabel
							onLayout={handleLabelLayout}
							style={[animatedLabelStyle]}>
							{label}
						</AnimatedLabel>
					</BoxLabel>
				)}
				<InputStyle
					isDisabled={isDisabled}
					isInvalid={isInvalid}
					isReadOnly={isReadOnly}
					{...inputStyleProps}
					isFocused={isFocused}
					action={action}>
					{startIcon && showStartIcon && (
						<InputSlotStyle onPress={startIconHandler}>
							{React.cloneElement(startIcon, {
								fill: startIconColor ?? iconColor,
								stroke: startIconColor ?? iconColor,
								width: startIconWidth ?? 24,
								height: startIconHeight ?? 24,
							})}
						</InputSlotStyle>
					)}
					<InputFieldStyles
						ref={
							inputRef as unknown as React.LegacyRef<
								StyledComponentProps<
									StyleProp<TextStyle>,
									unknown,
									TextInputProps,
									'InputField',
									typeof TextInput
								>
							>
						}
						placeholder={!isFloating ? placeholder : undefined}
						placeholderTextColor={placeholderTextColor}
						color="$textLight"
						$dark-color="$textDark"
						size={'md'}
						type={type}
						mt={isFloating || isFocused ? '$4' : '$1'}
						{...props}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					{endIcon && showEndIcon && (
						<InputSlotStyle onPress={endIconHandler}>
							{React.cloneElement(endIcon, {
								fill: endIconColor ?? iconColor,
								width: endIconWidth ?? 24,
								height: endIconHeight ?? 24,
							})}
						</InputSlotStyle>
					)}
				</InputStyle>
				{error && (
					<Box>
						<Text size="sm" action="error" mt="$2">
							{error}
						</Text>
					</Box>
				)}
				{helperText && (
					<Box>
						<Text size="sm" action="muted" mt="$2">
							{helperText}
						</Text>
					</Box>
				)}
			</>
		);
	}
);
BaseInput.displayName = 'BaseInput';
export default BaseInput;
