/**
 * @fileOverview Image Component
 * @description This file includes the definition and functionality of the Image component.
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

import { ImageStyle } from './imageStyles';
import { ImageProps } from './types';

/**
 * Image component to encapsulate the functionality of app.
 * @param {ImageProps} props - Props for the image component.
 * @returns {JSX.Element} - The rendered image element.
 */
const Image: React.FC<ImageProps> = ({ ...props }): React.JSX.Element => {
	return <ImageStyle {...props} />;
};

export default Image;
