/**
 * @fileOverview Main Entry Point
 * @description This file serves as the main entry point for the React Native  application.
 *              It initializes and configures the core components and providers required for the app.
 *              This includes setting up the translation, store, UI, and safe area providers,
 *              which are essential for the app's functionality and UI consistency.
 *              The Main component is registered with AppRegistry for the app to start.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { Main } from 'src/Main';

import {
	AreaProvider,
	UIProvider,
	StoreProvider,
	TranslationProvider,
	ApiClientProvider,
} from './src/core/providers';

export default function App() {
	return (
		<StoreProvider>
			<ApiClientProvider>
				<TranslationProvider>
					<AreaProvider>
						<UIProvider>
							<Main />
						</UIProvider>
					</AreaProvider>
				</TranslationProvider>
			</ApiClientProvider>
		</StoreProvider>
	);
}
