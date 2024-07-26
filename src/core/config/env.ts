/**
 * @fileOverview Configuration File
 * @description This file provides a centralized point for managing environment variables and configurations using react-native process.env.EXPO_
 *              It simplifies the process of accessing global settings such as API URLs and keys, ensuring consistency and ease of maintenance
 *              across the application. This approach enhances scalability and adaptability, allowing for swift changes in configuration
 *              without affecting multiple areas of the codebase.
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [https://cintanegra.net/license](https://raw.githubusercontent.com/wilodev/cintanegra.net/master/LICENSE)
 *
 * @example
 * import { APP_BASE_URL, OAUTH_BASE_URL} from '@/core/config';
 *
 * Use APP_BASE_URL in application
 * console.log(APP_BASE_URL);
 */

/**
 * @constant {string} APP_BASE_URL - The base URL for the application API.
 */
export const APP_BASE_URL = process.env.EXPO_APP_BASE_URL || '';

/**
 * @constant {string} OAUTH_BASE_URL - The base URL for the OAuth2 server.
 */
export const OAUTH_BASE_URL = process.env.EXPO_OAUTH_BASE_URL || '';

/**
 * @constant {string} API_TOKEN - The API token used before obtaining an OAuth2 token.
 */
export const API_TOKEN = process.env.EXPO_API_TOKEN || '';

/**
 * @constant {string} OAUTH_CLIENT_ID - The client ID for OAuth2 authentication.
 */
export const OAUTH_CLIENT_ID = process.env.EXPO_OAUTH_CLIENT_ID || '';

/**
 * @constant {string} OAUTH_CLIENT_SECRET - The client secret for OAuth2 authentication.
 */
export const OAUTH_CLIENT_SECRET = process.env.EXPO_OAUTH_CLIENT_SECRET || '';

/**
 * @constant {string} OAUTH_SCOPE - The scope for OAuth2 authentication.
 */
export const OAUTH_SCOPE = process.env.EXPO_OAUTH_SCOPE || '';

/**
 * @constant {string} OAUTH_GRANT_TYPE - The grant type for OAuth2 authentication.
 */
export const OAUTH_GRANT_TYPE = process.env.EXPO_OAUTH_GRANT_TYPE || '';
