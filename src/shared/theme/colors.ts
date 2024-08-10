/**
 * Colors.ts
 * Location: src/theme/colors.ts
 * Description: Defines the color palette for the application, following best practices and standards similar to those of Google.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

// Definición de los colores primarios y secundarios
export const appColors = {
	// Colores de fondo
	backgroundLight: '#FEFFFE',
	backgroundDark: '#191B1D',
	backgroundSecondaryLight: '#F4F4F7',
	backgroundSecondaryDark: '#2E2E33',

	primaryLight: '#EE8E1F',
	primaryActiveLight: '#EE8E1F',
	primaryOpacityLight: '#FADCBA',
	primaryDark: '#EE8E1F',
	primaryActiveDark: '#EE8E1F',
	primaryOpacityDark: '#643C0D',

	secondaryLight: '#1c9647',
	secondaryActiveLight: '#1c9647',
	secondaryDark: '#1c9647',
	secondaryActiveDark: '#1c9647',

	// Estados de feedback
	successLight: '#4CAF50',
	successActiveLight: '#4CAF50',
	successDark: '#4CAF50',
	successActiveDark: '#4CAF50',

	errorLight: '#F44336',
	errorActiveLight: '#F44336',
	errorDark: '#F44336',
	errorActiveDark: '#F44336',

	warningLight: '#FF9800',
	warningActiveLight: '#FF9800',
	warningDark: '#FF9800',
	warningActiveDark: '#FF9800',

	infoLight: '#0d6efd',
	infoActiveLight: '#0d6efd',
	infoDark: '#2196F3',
	infoActiveDark: '#2196F3',

	grayLight: '#6c757d',
	grayActiveLight: '#f0fff5',
	grayDark: '#6c757d',
	grayActiveDark: '#76827a',

	// Colores de títulos
	headingLight: '#1F1F1F',
	headingActiveLight: '#1F1F1F',
	headingDark: '#FFFFFF',
	headingActiveDark: '#ffffff',

	// Colores de texto
	textLight: '#656565',
	textActiveLight: '#1F1F1F',
	textDark: '#D2D2D2',
	textActiveDark: '#ffffff',
	textMutedLight: '#8F8F8F',
	textMutedDark: '#8F8F8F',

	// Colores de borde
	borderLight: '#E0E0E0',
	borderActiveLight: '#DEDEDE',
	borderDark: '#323639',
	borderActiveDark: '#4A5156',

	// Colores de input
	// background
	inputBackgroundLight: '#F6F6F6',
	inputActiveBackgroundLight: '#F6F6F6',
	inputBackgroundDark: '#191B1D',
	inputActiveBackgroundDark: '#191B1D',
	// border
	inputBorderLight: '#E8E8E8',
	inputBorderDark: '#323639',
	inputActiveBorderLight: '#D2D2D2',
	inputActiveBorderDark: '#4A5156',
	// placeholder
	inputPlaceholderLight: '#8F8F8F',
	inputPlaceholderDark: '#8F8F8F',
	inputActivePlaceholderLight: '#1F1F1F',
	inputActivePlaceholderDark: '#FFFFFF',
	// label
	inputLabelLight: '#8F8F8F',
	inputLabelDark: '#A0A0A0',
	inputActiveLabelLight: '#000000',
	inputActiveLabelDark: '#FFFFFF',

	// Colores de input
	cardBackgroundLight: '#F4F4F7',
	cardActiveBackgroundLight: '#FDF4E9',
	cardBackgroundDark: '#2E2E33',
	cardActiveBackgroundDark: '#A96516',
	cardBorderLight: '#D6D6D6',
	cardBorderDark: '#263238',
	cardActiveBorderLight: '#1c9647',
	cardActiveBorderDark: '#1c9647',

	// Colores de icons
	iconLight: '#555556',
	iconActiveLight: '#1c9647',
	iconDark: '#000000',
	iconActiveDark: '#000000',

	// Colores neutrales
	white: '#FFFFFF',
	black: '#000000',

	// Variantes adicionales (ejemplo con diferentes tonos)
	// primary50: string;
	// primary100: string;
	// primary200: string;
	// primary300: string;
	// primary400: string;
	// primary500: string;
	// primary600: string;
	// primary700: string;
	// primary800: string;
	// primary900: string;
} as const;

export type AppColors = typeof appColors;

/**
 * Note:
 * - Variants are named using a numeric scale (50-950) to indicate different shades.
 * - Colors are defined for both light and dark modes.
 * - This structure ensures consistency and scalability across the application.
 */
