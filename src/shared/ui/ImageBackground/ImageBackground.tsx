/**
 * @fileOverview ImageBackground Component
 * @description This file includes the definition and functionality of the ImageBackground component.
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

import { ImageBackground as GImageBackground } from '@gluestack-ui/themed';

import { ImageBackgroundProps } from './types';

/**
 * ImageBackground component to encapsulate the functionality of app.
 * @param {ImageBackgroundProps} props - Props for the image background component.
 * @returns {JSX.Element} - The rendered image background element.
 */
const ImageBackground: React.FC<ImageBackgroundProps> = ({
	...props
}): React.JSX.Element => {
	return <GImageBackground {...props} />;
};

export default ImageBackground;
