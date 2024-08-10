/**
 * @fileOverview Contact Utility
 * @description This file contains utility functions for managing contacts in the device's contact list.
 *              It includes functions for checking if a contact exists, requesting read/write permissions,
 *              providing a default app contact, and adding the app contact if it doesn't already exist.
 *              It uses the react-native-contacts library to access and manage contacts.
 * @module core/utils
 * @category Core
 * @component Utility
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';

import * as Contacts from 'expo-contacts';

/**
 * Checks if the contact already exists in the device's contacts.
 * @param {string} email - The email address to check.
 * @param {string} phone - The phone number to check.
 * @returns {Promise<boolean>} - Returns true if the contact exists, false otherwise.
 */
export const checkContactExists = async (
	email: string,
	phone: string
): Promise<boolean> => {
	const contacts: Contacts.ContactResponse = await Contacts.getContactsAsync();
	return contacts.data.some(
		(contact) =>
			contact.emails?.some((e) => e.email === email) ||
			contact.phoneNumbers?.some((p) => p.number === phone)
	);
};

/**
 * Requests read contacts permission for Android.
 * @param {function} t - Translation function.
 * @returns {Promise<boolean>} - Returns true if permission is granted, false otherwise.
 */
export const requestReadContactsPermissionAndroid = async (
	t: (key: string, options?: Record<string, unknown>) => string
): Promise<boolean> => {
	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
			{
				title: t('contacts.permissionTitle'),
				message: t('contacts.permissionMessage', {
					action: t('contacts.readAction'),
				}),
				buttonPositive: t('contacts.buttonAccept'),
			}
		);
		return granted === PermissionsAndroid.RESULTS.GRANTED;
	} catch (err) {
		console.warn(err);
		return false;
	}
};

/**
 * Requests write contacts permission for Android.
 * @param {function} t - Translation function.
 * @returns {Promise<boolean>} - Returns true if permission is granted, false otherwise.
 */
export const requestWriteContactsPermissionAndroid = async (
	t: (key: string, options?: Record<string, unknown>) => string
): Promise<boolean> => {
	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
			{
				title: t('contacts.permissionTitle'),
				message: t('contacts.permissionMessage', {
					action: t('contacts.writeAction'),
				}),
				buttonPositive: t('contacts.buttonAccept'),
			}
		);
		return granted === PermissionsAndroid.RESULTS.GRANTED;
	} catch (err) {
		console.warn(err);
		return false;
	}
};

/**
 * Provides the app contact for the application.
 * @returns {Contact} - The app contact object.
 */
export const getAppContact = (): Contacts.Contact => {
	return {
		id: 'default',
		name: 'App Contact',
		addresses: [],
		company: '',
		department: '',
		contactType: 'person',
		phoneNumbers: [
			{
				id: 'default',
				label: 'mobile',
				number: '+1234567890',
			},
		],
		emails: [
			{
				id: 'default',
				email: 'user@example.com',
				label: 'work',
			},
		],
	};
};

/**
 * Directs user to app settings if permission is denied.
 */
const openAppSettings = () => {
	Linking.openSettings().catch(() => {
		Alert.alert(
			'Error',
			'Unable to open app settings. Please open them manually.'
		);
	});
};

/**
 * Checks if the app contact exists and requests necessary permissions to add it if not.
 * @param {function} t - Translation function.
 * @returns {Promise<boolean>} - Returns true if the contact exists or is created, false otherwise.
 */
export const checkAppContact = async (
	t: (key: string, options?: Record<string, unknown>) => string
): Promise<boolean> => {
	const defaultContact = getAppContact();
	const email = defaultContact?.emails?.find((e) => e.email);
	const phone = defaultContact?.phoneNumbers?.find((p) => p.number);
	let hasReadPermission = false;

	try {
		if (Platform.OS === 'android') {
			hasReadPermission = await PermissionsAndroid.check(
				PermissionsAndroid.PERMISSIONS.READ_CONTACTS
			);
			if (!hasReadPermission) {
				const granted = await requestReadContactsPermissionAndroid(t);
				if (!granted) {
					Alert.alert(
						t('contacts.permissionDeniedTitle'),
						t('contacts.permissionDeniedMessage', {
							action: t('contacts.readAction'),
						})
					);
					return false;
				}
			}
		} else if (Platform.OS === 'ios') {
			const permission: Contacts.PermissionResponse =
				await Contacts.requestPermissionsAsync();
			if (permission.status === 'undetermined') {
				const { granted } = await Contacts.requestPermissionsAsync();
				if (!granted) {
					Alert.alert(
						t('contacts.permissionDeniedTitle'),
						t('contacts.permissionDeniedMessage', {
							action: t('contacts.readAction'),
						})
					);
					return false;
				}
			} else if (permission.status === 'denied') {
				Alert.alert(
					t('contacts.permissionDeniedTitle'),
					t('contacts.permissionDeniedMessage', {
						action: t('contacts.readAction'),
					}),
					[
						{
							text: t('contacts.openSettings'),
							onPress: openAppSettings,
						},
						{
							text: t('contacts.cancel'),
							style: 'cancel',
						},
					]
				);
				return false;
			}
		}

		const contactExists = await checkContactExists(
			email?.email || '',
			phone?.number || ''
		);
		if (!contactExists) {
			if (Platform.OS === 'android') {
				const hasWritePermission = await PermissionsAndroid.check(
					PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS
				);

				if (!hasWritePermission) {
					const granted = await requestWriteContactsPermissionAndroid(t);
					if (!granted) {
						Alert.alert(
							t('contacts.permissionDeniedTitle'),
							t('contacts.permissionDeniedMessage', {
								action: t('contacts.writeAction'),
							})
						);
						return false;
					}
				}
			}

			await Contacts.addContactAsync(defaultContact);
			Alert.alert(
				t('contacts.contactAddedTitle'),
				t('contacts.contactAddedMessage', {
					name: defaultContact.name,
				})
			);
			return true;
		} else {
			Alert.alert(
				t('contacts.contactExistsTitle'),
				t('contacts.contactExistsMessage', {
					name: defaultContact.name,
				})
			);
			return true;
		}
	} catch (error) {
		console.warn('Error checking app contact:', error);
		Alert.alert(
			t('contacts.permissionDeniedTitle'),
			t('contacts.permissionDeniedMessage', {
				action: t('contacts.readAction'),
			})
		);
		return false;
	}
};
