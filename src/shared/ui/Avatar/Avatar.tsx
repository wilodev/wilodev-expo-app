/**
 * @fileOverview Avatar Component
 * @description This file includes the definition and functionality of the Avatar component.
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

import { ImageSourcePropType } from 'react-native';

import { AvatarFallbackText, AvatarImage } from '@gluestack-ui/themed';

import { AvatarStyle } from './avatarStyles';
import { AvatarProps } from './types';

/**
 * Avatar component to encapsulate the functionality of app.
 * @param {AvatarProps} props - Props for the avatar component.
 * @returns {JSX.Element} - The rendered avatar element.
 */
const Avatar: React.FC<AvatarProps> = ({
	imageSource,
	alt,
	text,
	...props
}): React.JSX.Element => {
	let source: ImageSourcePropType | undefined;
	if (imageSource) {
		source =
			typeof imageSource === 'string' ? { uri: imageSource } : imageSource;
	}

	return (
		<AvatarStyle w={props.w ?? '$4'} h={props.h ?? '$4'} {...props}>
			{imageSource && source ? (
				<AvatarImage
					source={source}
					alt={alt}
					w={props.w ?? '$4'}
					h={props.h ?? '$4'}
				/>
			) : (
				<AvatarFallbackText size="xs">{text}</AvatarFallbackText>
			)}
		</AvatarStyle>
	);
};

export default Avatar;
