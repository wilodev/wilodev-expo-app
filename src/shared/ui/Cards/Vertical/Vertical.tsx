/**
 * @fileOverview Card Component
 * @description This file includes the definition and functionality of the Card component.
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

import { CardProps } from './types';
import {
	VerticalContainerStyle,
	VerticalContentStyle,
	VerticalHeaderContentStyle,
	VerticalHeaderHeadingStyle,
	VerticalHeaderImageStyle,
	VerticalHeaderOverlayStyle,
	VerticalHeaderStyle,
	VerticalHeaderTextStyle,
} from './verticalStyles';
import { Box } from '../../Box';

/**
 * Card component to encapsulate the functionality of app.
 * @param children
 * @param {CardProps} props - Props for the Card component.
 * @returns {JSX.Element} - The rendered Card element.
 */
const Card: React.FC<CardProps> = ({
	children,
	image,
	title,
	subtitle,
}): React.JSX.Element => {
	const imageSource = typeof image === 'string' ? { uri: image } : image;
	return (
		<VerticalContainerStyle>
			<VerticalHeaderStyle>
				<VerticalHeaderImageStyle source={imageSource} resizeMode="cover" />
				<VerticalHeaderOverlayStyle />
				<VerticalHeaderContentStyle>
					<Box>
						<VerticalHeaderHeadingStyle>{title}</VerticalHeaderHeadingStyle>
					</Box>
					{subtitle && (
						<Box>
							<VerticalHeaderTextStyle>{subtitle}</VerticalHeaderTextStyle>
						</Box>
					)}
				</VerticalHeaderContentStyle>
			</VerticalHeaderStyle>
			<VerticalContentStyle>{children}</VerticalContentStyle>
		</VerticalContainerStyle>
	);
};

export default Card;
