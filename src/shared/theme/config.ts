import { FontResolver } from '@gluestack-style/react';
import { config as gluestackUIConfig } from '@gluestack-ui/config';
import { DefaultTheme } from '@react-navigation/native';

import { appColors } from './colors';
import { spaces } from './utils/spaces';

const customFontResolver = new FontResolver({
	mapFonts: (style) => {
		// Revisa si el fontFamily actual está en el mapa
		const fontFamilyMap: { [key: string]: string } = {
			'Poppins-Black': 'Poppins-Black',
			'Poppins-BlackItalic': 'Poppins-BlackItalic',
			'Poppins-Bold': 'Poppins-Bold',
			'Poppins-BoldItalic': 'Poppins-BoldItalic',
			'Poppins-ExtraBold': 'Poppins-ExtraBold',
			'Poppins-ExtraBoldItalic': 'Poppins-ExtraBoldItalic',
			'Poppins-ExtraLight': 'Poppins-ExtraLight',
			'Poppins-ExtraLightItalic': 'Poppins-ExtraLightItalic',
			'Poppins-Italic': 'Poppins-Italic',
			'Poppins-Light': 'Poppins-Light',
			'Poppins-LightItalic': 'Poppins-LightItalic',
			'Poppins-Medium': 'Poppins-Medium',
			'Poppins-MediumItalic': 'Poppins-MediumItalic',
			'Poppins-Regular': 'Poppins-Regular',
			'Poppins-SemiBold': 'Poppins-SemiBold',
			'Poppins-SemiBoldItalic': 'Poppins-SemiBoldItalic',
			'Poppins-Thin': 'Poppins-Thin',
			'Poppins-ThinItalic': 'Poppins-ThinItalic',
			'Quicksand-Bold': 'Quicksand-Bold',
			'Quicksand-Light': 'Quicksand-Light',
			'Quicksand-Medium': 'Quicksand-Medium',
			'Quicksand-Regular': 'Quicksand-Regular',
			'Quicksand-SemiBold': 'Quicksand-SemiBold',
		};

		const mappedFont = fontFamilyMap[style.fontFamily];
		if (mappedFont) {
			style.fontFamily = mappedFont;

			style.fontWeight = style.fontWeight || 'normal';
			style.fontStyle = undefined;
		}
	},
});
export const appConfig = {
	...gluestackUIConfig,
	tokens: {
		...gluestackUIConfig.tokens,
		colors: {
			...appColors,
		},
		breakpoints: {
			xs: 0,
			sm: 390,
			md: 768,
			lg: 992,
			xl: 1280,
		},
		spaces: {
			...spaces,
		},
		mediaQueries: {
			base: '@media screen and (min-width: 480)',
			xs: '@media screen and (min-width: 300px)',
			sm: '@media screen and (min-width: 390px)',
			md: '@media screen and (min-width: 768px)',
			lg: '@media screen and (min-width: 992px)',
			xl: '@media screen and (min-width: 1280px)',
		},
		fonts: {
			body: 'Poppins-Regular',
			heading: 'Quicksand-SemiBold',
			mono: undefined,
		},
	},
	plugins: [...gluestackUIConfig.plugins, customFontResolver],
};

export const DefaultThemeNavigation = {
	...DefaultTheme,
	colors: {
		//...DefaultTheme.colors,
		primary: 'transparent',
		background: 'transparent',
		card: 'transparent',
		text: 'blue',
		border: 'transparent',
		notification: 'transparent',
	},
};
