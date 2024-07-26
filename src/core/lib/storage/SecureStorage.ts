/**
 * @fileOverview SecureStorage Utility Class
 * @description This file contains a utility class for securely storing, retrieving, and managing data and credentials
 *              using encrypted storage and secure storage on React Native  applications. The class provides static methods
 *              for setting, getting, and removing items and credentials securely.
 * @module core/storage
 * @category Core
 * @component Utility
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import * as SecureStore from 'expo-secure-store';

class SecureStorage {
	/**
	 * Sets a value in encrypted storage.
	 * @param {string} key - The key under which the value will be stored.
	 * @param {string} value - The value to be stored.
	 * @returns {Promise<void>} A promise that resolves when the value is set.
	 */
	static async setItem(key: string, value: string): Promise<void> {
		try {
			await SecureStore.setItem(key, value);
		} catch (error) {
			console.error(`Error setting item ${key} in encrypted storage`, error);
			throw error;
		}
	}

	/**
	 * Sets an object in encrypted storage.
	 * @param {string} key - The key under which the object will be stored.
	 * @param {T} value - The object to be stored.
	 * @returns {Promise<void>} A promise that resolves when the object is set.
	 */
	static async setObjectItem<T>(key: string, value: T): Promise<void> {
		try {
			const stringValue = JSON.stringify(value);
			await SecureStore.setItem(key, stringValue);
		} catch (error) {
			console.error(`Error setting object ${key} in encrypted storage`, error);
			throw error;
		}
	}

	/**
	 * Gets a value from encrypted storage.
	 * @param {string} key - The key under which the value is stored.
	 * @returns {Promise<string | null>} The retrieved value or null if not found.
	 */
	static async getItem(key: string): Promise<string | null> {
		try {
			const value = await SecureStore.getItem(key);
			return value;
		} catch (error) {
			console.error(`Error getting item ${key} from encrypted storage`, error);
			throw error;
		}
	}

	/**
	 * Gets an object from encrypted storage.
	 * @param {string} key - The key under which the object is stored.
	 * @returns {Promise<T | null>} The retrieved object or null if not found.
	 */
	static async getObjectItem<T>(key: string): Promise<T | null> {
		try {
			const value = await SecureStore.getItem(key);
			if (value) {
				const parsedValue = JSON.parse(value) as T;
				return parsedValue;
			} else {
				return null;
			}
		} catch (error) {
			console.error(
				`Error getting object ${key} from encrypted storage`,
				error
			);
			throw error;
		}
	}

	/**
	 * Removes a value from encrypted storage.
	 * @param {string} key - The key under which the value is stored.
	 * @returns {Promise<void>} A promise that resolves when the value is removed.
	 */
	static async removeItem(key: string): Promise<void> {
		try {
			await SecureStore.deleteItemAsync(key);
		} catch (error) {
			console.error(`Error removing item ${key} from encrypted storage`, error);
			throw error;
		}
	}

	/**
	 * Sets credentials in the secure storage.
	 * @param {string} username - The username to be stored.
	 * @param {string} password - The password to be stored.
	 * @returns {Promise<void>} A promise that resolves when the credentials are set.
	 */
	static async setCredentials(
		username: string,
		password: string
	): Promise<void> {
		try {
			const credentials = JSON.stringify({ username, password });
			await SecureStore.setItemAsync('user_credentials', credentials);
		} catch (error) {
			console.error('Error setting credentials in secure storage', error);
			throw error;
		}
	}

	/**
	 * Gets credentials from the secure storage.
	 * @returns {Promise<{ username: string; password: string } | null>} The retrieved credentials or null if not found.
	 */
	static async getCredentials(): Promise<{
		username: string;
		password: string;
	} | null> {
		try {
			const credentials = await SecureStore.getItemAsync('user_credentials');
			return credentials ? JSON.parse(credentials) : null;
		} catch (error) {
			console.error('Error getting credentials from secure storage', error);
			throw error;
		}
	}

	/**
	 * Removes credentials from the secure storage.
	 * @returns {Promise<void>} A promise that resolves when the credentials are removed.
	 */
	static async removeCredentials(): Promise<void> {
		try {
			await SecureStore.deleteItemAsync('user_credentials');
		} catch (error) {
			console.error('Error removing credentials from secure storage', error);
			throw error;
		}
	}
}

export default SecureStorage;
