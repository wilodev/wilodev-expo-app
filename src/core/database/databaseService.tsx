/**
 * @fileOverview DatabaseService
 * @description This service provides an abstracted interface to interact with specific business logic
 *              or external APIs. It encapsulates all the necessary operations and provides a clean,
 *              reusable set of methods that can be used throughout the application. This approach
 *              adheres to the principles of clean architecture, ensuring separation of concerns and
 *              maintainability.
 *
 *              Database Usage:
 *              const databaseService = new DatabaseService();
 *              databaseService.performAction(args);
 *
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import Realm from 'realm';

import { schema } from './schema';

export class DatabaseService {
	private static instance: Realm | null = null;

	static getInstance(): Realm {
		if (this.instance === null) {
			this.instance = new Realm({ schemaVersion: 1, schema: [...schema] });
		}
		return this.instance;
	}

	static async close() {
		if (this.instance !== null) {
			this.instance.close();
			this.instance = null;
		}
	}

	static async write<T>(writeFunc: (realm: Realm) => T): Promise<T> {
		const realm = this.getInstance();
		let result: T;
		realm.write(() => {
			result = writeFunc(realm);
		});
		return result!;
	}

	static async read<T>(readFunc: (realm: Realm) => T): Promise<T> {
		const realm = this.getInstance();
		return readFunc(realm);
	}
}

export default DatabaseService;
