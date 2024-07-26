import { useCallback, useEffect, useRef, useState } from 'react';

import { TextInput } from 'react-native';

import {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

import { Tokens, useToken } from '@gluestack-style/react';

import { useColorMode } from '@/hooks/useColorMode';

import { useBaseInputColors } from './baseInputStyles';
import { BaseInputProps, GInputProps } from './types';

export function useBaseInput({ action, ...props }: BaseInputProps) {
	const { isDark } = useColorMode();
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const { placeholderTextColor, iconColor } = useBaseInputColors(action);
	const inputStyleProps: GInputProps = {};
	const inputRef = useRef<TextInput>(null);
	const [labelWidth, setLabelWidth] = useState<number>(0);

	const labelDefaultColor = useToken<keyof Tokens>(
		'colors',
		isDark ? 'inputLabelDark' : 'inputLabelLight'
	);

	const labelActiveColor = useToken<keyof Tokens>(
		'colors',
		isDark ? 'inputActiveLabelDark' : 'inputActiveLabelLight'
	);

	const colorsLabelGradient = [
		useToken<keyof Tokens>(
			'colors',
			isDark ? 'backgroundDark' : 'backgroundLight'
		),
		useToken<keyof Tokens>(
			'colors',
			isDark ? 'inputBackgroundDark' : 'inputBackgroundLight'
		),
	];

	if (props?.h || props?.height) {
		inputStyleProps.h = props.h || props.height;
	}
	if (props?.w || props?.width) {
		inputStyleProps.w = props.w || props.width;
	}

	const labelPosition = useSharedValue(16);
	const labelFontSize = useSharedValue(16);
	const labelColor = useSharedValue(labelDefaultColor);
	const showGradient = useSharedValue(0);

	useEffect(() => {
		if (!isFocused && props.value) {
			labelColor.value = withTiming(labelDefaultColor, { duration: 200 });
		} else if (isFocused || props.value) {
			labelPosition.value = withTiming(8, { duration: 200 });
			labelFontSize.value = withTiming(12, { duration: 200 });
			labelColor.value = withTiming(labelActiveColor, { duration: 200 });
		} else {
			labelPosition.value = withTiming(16, { duration: 200 });
			labelFontSize.value = withTiming(16, { duration: 200 });
			labelColor.value = withTiming(labelDefaultColor, { duration: 200 });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFocused, props.value]);

	const handleFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleBlur = useCallback(() => {
		props.onBlur && props.onBlur();
		setIsFocused(false);
	}, [props]);

	const animatedLabelStyle = useAnimatedStyle(() => {
		return {
			top: labelPosition.value,
			marginBottom: labelFontSize.value,
			fontSize: labelFontSize.value,
			color: labelColor.value,
		};
	});

	const handleLabelPress = useCallback(() => {
		inputRef.current?.focus();
	}, []);

	const handleLabelLayout = useCallback(
		(event: { nativeEvent: { layout: { width: number } } }) => {
			const { width } = event.nativeEvent.layout;
			setLabelWidth(width - 4);
		},
		[]
	);

	const gradientStyle = useAnimatedStyle(() => {
		return {
			opacity: showGradient.value,
		};
	});

	return {
		state: {
			isFocused,
			inputStyleProps,
			animatedLabelStyle,
			placeholderTextColor,
			iconColor,
			inputRef,
			colorsLabelGradient,
			labelWidth,
			gradientStyle,
		},
		actions: {
			handleFocus,
			handleBlur,
			handleLabelPress,
			handleLabelLayout,
		},
	};
}
