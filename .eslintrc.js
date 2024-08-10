/**
 * @fileOverview Eslint configuration
 * @description Configuring ESLint for React Native projects with TypeScript.
 *              This file contains rules to maintain a consistent and clean code style.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	extends: [
		'expo',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended', // TypeScript recommendations
	],
	plugins: ['prettier', '@typescript-eslint', 'unused-imports'],
	parser: '@typescript-eslint/parser',
	ignorePatterns: [
		'.eslintrc.js',
		'babel.config.js',
		'jest.config.js',
		'jest.setup.ts',
		'metro.config.js',
		'node_modules',
		'rn-cli.config.js',
		'react-native.config.js',
	],
	rules: {
		'prettier/prettier': 'error',
		// Rules for ordering imports
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external'], // Groups built-in Node.js imports and external module imports.
					'internal', // Refers to imports of internal modules of your project.
					['parent', 'sibling', 'index', 'object'], // Groups relative imports: from the parent directory, siblings, indexes and objects.
				],
				pathGroups: [
					// The following settings define how certain import patterns should be treated:
					{
						pattern: 'react', /// Pattern for React imports
						group: 'external', // Classifies them as external imports
						position: 'before', // Must appear before other external imports
					},
					{
						pattern: 'react-native', // Pattern for React Native imports
						group: 'external', // Classifies them as external imports
						position: 'before', // Must appear before other external imports
					},
					{
						pattern: 'react-*', // Pattern for any import that starts with 'react-'
						group: 'external', // Classifies them as external imports
						position: 'before', // Must appear before other external imports
					},
					{
						pattern: '@', // Pattern for imports from alias '@'
						group: 'external', // Classified as external
						position: 'before', // Before other externals
					},
					{
						pattern: '@/**', // Pattern for more specific imports from '@'
						group: 'internal', // Classified as internal
						position: 'before', // Before other internal imports
					},
				],
				pathGroupsExcludedImportTypes: ['builtin'], // Excludes builtin Node.js imports from pathGroups
				'newlines-between': 'always', // Requires a new line between import groups
				alphabetize: {
					// Sort imports within each group alphabetically
					order: 'asc', // Ascending
					caseInsensitive: true, // Not case sensitive
				},
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/first': 'error', // Ensures all imports are at the beginning of the file.
		'import/no-duplicates': 'error', // Prohibit repeated imports from the same module.
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], //
		'import/newline-after-import': 'error', // Requires an empty line after the last import block.
		'unused-imports/no-unused-imports': 'error', // Activate the plugin rule for unused imports
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'react-hooks/rules-of-hooks': 'error', // Uncomment after verifying versions
	},
};
