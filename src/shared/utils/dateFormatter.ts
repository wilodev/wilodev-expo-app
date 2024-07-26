/**
 * @fileOverview Date Formatter Utility
 * @description This module provides functions to format dates based on given criteria.
 *              It includes formatting dates relative to the current time (e.g., "5 minutes ago"),
 *              showing exact times within the same day, and displaying short date formats for older dates.
 * @module utils/dateFormatter
 * @category Utilities
 * @component Utility
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import {
	format,
	formatDistanceToNow,
	isToday,
	parseISO,
	differenceInHours,
	Locale,
} from 'date-fns';

import { useTranslationApp } from '@/locales/useTranslationApp';

/**
 * Function to format a date string based on the given criteria.
 * @param dateString - The date string in ISO format.
 * @returns The formatted date string.
 */
export const formatNotificationDate = (dateString: string): string => {
	const {
		actions: { it },
		// eslint-disable-next-line react-hooks/rules-of-hooks
	} = useTranslationApp();

	// Ensure the locale returned is of type Locale
	const currentLocale = it.getDataByLanguage(it.language)
		?.dateFns as unknown as Locale;
	const date = parseISO(dateString);
	const now = new Date();
	const hoursDifference = differenceInHours(now, date);

	if (isToday(date)) {
		if (hoursDifference < 1) {
			// If the difference is less than 1 hour, show "X minutes ago"
			return formatDistanceToNow(date, {
				locale: currentLocale,
				addSuffix: true,
			});
		} else {
			// If the difference is more than 1 hour, show the exact time in 24-hour format
			return format(date, 'HH:mm', { locale: currentLocale });
		}
	} else {
		// For older dates, show in short date format "d MMM"
		return format(date, 'd MMM', { locale: currentLocale });
	}
};
