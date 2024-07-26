/**
 * @fileOverview useOTPInput Hook
 * @description Provides logic to handle focus and state management for an OTP input component.
 *              This hook manages an array of OTP values and focuses inputs appropriately.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useRef, useState } from 'react';

import { TextInput } from 'react-native';

export const useOTPInput = ({
	length,
	onChangeText,
}: {
	length: number;
	onChangeText: (text: string) => void;
}) => {
	const inputsRef = useRef<(TextInput | null)[]>(
		Array.from({ length }).map(() => null)
	);
	const [OTP, setOTP] = useState<string[]>(new Array(6).fill(''));

	const updateOTPValue = (index: number, value: string) => {
		const newOTP = [...OTP];
		newOTP[index] = value;
		setOTP(newOTP);
		onChangeText(newOTP.join(''));
	};

	const focusNext = (index: number, value: string) => {
		const isDigit = value.length === 1 && /^[0-9]$/.test(value);
		const isEmpty = value === '';

		// Permitir borrar el dígito
		if (isEmpty) {
			updateOTPValue(index, '');
			return; // No mover el foco automáticamente al borrar
		}

		// Permitir añadir el dígito si es un número válido
		if (isDigit) {
			updateOTPValue(index, value);

			// Mover el foco al siguiente input
			if (index < length - 1) {
				inputsRef.current[index + 1]?.focus();
			} else {
				inputsRef.current[index]?.blur(); // Desenfocar el último input
			}
		}
	};

	// const focusNext = (index: number, value: string) => {
	// 	const isDigit = value.length === 1 && /^[0-9]$/.test(value);
	// 	if (!isDigit) {
	// 		return;
	// 	}
	// 	const newOTP = [...OTP];
	// 	newOTP[index] = value;
	// 	setOTP(newOTP); // Actualizar el estado local

	// 	// Mover el foco al siguiente input
	// 	if (index < length - 1) {
	// 		inputsRef.current[index + 1]?.focus();
	// 	} else {
	// 		inputsRef.current[index]?.blur(); // Desenfocar el último input
	// 	}

	// 	onChangeText(newOTP.join(''));
	// };

	const focusPrevious = (key: string, index: number) => {
		if (key === 'Backspace' && index > 0 && !OTP[index]) {
			inputsRef.current[index - 1]?.focus();
		}
	};

	return { focusNext, focusPrevious, inputsRef, OTP };
};
