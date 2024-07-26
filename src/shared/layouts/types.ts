/**
 * @fileOverview Types for Layout Components
 * @description This file contains type definitions and interfaces for the Layout components used in the application.
 *              It defines the props for components like AuthLayout and MainLayout, ensuring type safety and enhancing
 *              the development experience. These types play a crucial role in maintaining consistency and predictability
 * in the behavior of the layout components across different screens and modules of the application.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
// Import the BoxProps type from the correct file
import { Box, Text, Heading, Image } from '@gluestack-ui/themed';

type BoxHeaderProps = Omit<
	React.ComponentProps<typeof Box>,
	'children' | 'ref' | 'forwardRef'
>;
type TextHeaderProps = Omit<
	React.ComponentProps<typeof Text>,
	'children' | 'ref' | 'forwardRef'
>;
type HeadingHeaderProps = Omit<
	React.ComponentProps<typeof Heading>,
	'children' | 'ref' | 'forwardRef'
>;
type ImageHeaderProps = Omit<
	React.ComponentProps<typeof Image>,
	'children' | 'ref' | 'forwardRef'
>;

export interface ACLLayoutProps {
	children: React.ReactNode;
	title?: string;
	subtitle?: string;
	image?: React.ReactNode;
	header?: {
		Box?: BoxHeaderProps;
		Heading?: HeadingHeaderProps;
		Text?: TextHeaderProps;
		Image?: ImageHeaderProps;
	};
	footer?: React.ReactNode;
	showButtonBack?: boolean;
	onBack?: () => void;
}

export interface MainLayoutProps {
	backgroundColorStatusBar?: string;
	children: React.ReactNode;
	showButtonBack?: boolean;
	onBack?: () => void;
}
export interface BaseLayoutProps {
	backgroundColorStatusBar?: string;
	children: React.ReactNode;
}

export interface ModalLayoutProps {
	children: React.ReactNode;
}
