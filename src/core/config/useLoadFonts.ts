/**
 * @file useLoadFonts.ts
 * @description Initial configuration setup for the application including font loading.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { useFonts } from 'expo-font';

export const useLoadFonts = (): { loaded: boolean; error: Error | null } => {
	const [loaded, error] = useFonts({
		'Poppins-Black': require('@/assets/fonts/Poppins-Black.ttf'),
		'Poppins-BlackItalic': require('@/assets/fonts/Poppins-BlackItalic.ttf'),
		'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
		'Poppins-BoldItalic': require('@/assets/fonts/Poppins-BoldItalic.ttf'),
		'Poppins-ExtraBold': require('@/assets/fonts/Poppins-ExtraBold.ttf'),
		'Poppins-ExtraBoldItalic': require('@/assets/fonts/Poppins-ExtraBoldItalic.ttf'),
		'Poppins-ExtraLight': require('@/assets/fonts/Poppins-ExtraLight.ttf'),
		'Poppins-ExtraLightItalic': require('@/assets/fonts/Poppins-ExtraLightItalic.ttf'),
		'Poppins-Italic': require('@/assets/fonts/Poppins-Italic.ttf'),
		'Poppins-Light': require('@/assets/fonts/Poppins-Light.ttf'),
		'Poppins-LightItalic': require('@/assets/fonts/Poppins-LightItalic.ttf'),
		'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.ttf'),
		'Poppins-MediumItalic': require('@/assets/fonts/Poppins-MediumItalic.ttf'),
		'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
		'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
		'Poppins-SemiBoldItalic': require('@/assets/fonts/Poppins-SemiBoldItalic.ttf'),
		'Poppins-Thin': require('@/assets/fonts/Poppins-Thin.ttf'),
		'Poppins-ThinItalic': require('@/assets/fonts/Poppins-ThinItalic.ttf'),
		'Quicksand-Bold': require('@/assets/fonts/Quicksand-Bold.ttf'),
		'Quicksand-Light': require('@/assets/fonts/Quicksand-Light.ttf'),
		'Quicksand-Medium': require('@/assets/fonts/Quicksand-Medium.ttf'),
		'Quicksand-Regular': require('@/assets/fonts/Quicksand-Regular.ttf'),
		'Quicksand-SemiBold': require('@/assets/fonts/Quicksand-SemiBold.ttf'),
	});

	return { loaded, error };
};
