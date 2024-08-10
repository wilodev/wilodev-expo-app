/**
 * @fileOverview Horizontal Component
 * @description This file includes the definition and functionality of the Horizontal component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import {
	CardContent,
	CardDescription,
	CardImage,
	CardTitle,
	HorizontalContainerStyle,
} from './horizontalStyles';
import { HorizontalProps } from './types';

/**
 * Horizontal component to encapsulate the functionality of app.
 * @param {HorizontalProps} props - Props for the horizontal component.
 * @returns {JSX.Element} - The rendered horizontal element.
 */
const Horizontal: React.FC<HorizontalProps> = ({
	title,
	image,
	children,
}): React.JSX.Element => {
	const imageSource = typeof image === 'string' ? { uri: image } : image;
	return (
		<HorizontalContainerStyle>
			<CardImage source={imageSource} />
			<CardContent>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{children}</CardDescription>
			</CardContent>
		</HorizontalContainerStyle>
	);
};

export default Horizontal;
