/**
 * @fileOverview EventHeader Component
 * @description This file includes the definition and functionality of the EventHeader component.
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
	ColumnEventHeaderStyle,
	RowEventHeaderStyle,
} from './eventHeaderStyles';
import { EventHeaderProps } from './types';
import { Image } from '../Image';
import { Row } from '../Row';
import { Text } from '../Text';

/**
 * EventHeader component to encapsulate the functionality of app.
 * @param {EventHeaderProps} props - Props for the EventHeader component.
 * @returns {JSX.Element} - The rendered EventHeader element.
 */
const EventHeader: React.FC<EventHeaderProps> = ({
	competitionTitle,
	eventTitle,
	competitionImage,
	competitionAlt,
}): React.JSX.Element => {
	const image =
		typeof competitionImage === 'string'
			? { uri: competitionImage }
			: competitionImage;
	return (
		<ColumnEventHeaderStyle>
			<RowEventHeaderStyle>
				<Image source={image} alt={competitionAlt} width={40} height={40} />
			</RowEventHeaderStyle>
			<Row ml={8}>
				<Text size="xs">{competitionTitle}</Text>
				<Text size="xs" bold>
					{eventTitle}
				</Text>
			</Row>
		</ColumnEventHeaderStyle>
	);
};

export default EventHeader;
