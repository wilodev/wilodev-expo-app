/**
 * @fileOverview AnimateImage Component
 * @description This file includes the definition and functionality of the AnimateImage component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import Animated from 'react-native-reanimated';

import { styled } from '@gluestack-style/react';

/**
 * AnimateImage component to encapsulate the functionality of app.
 * @param {AnimateImageProps} props - Props for the box animate component.
 * @returns {JSX.Element} - The rendered box animate element.
 */
const AnimateImage = styled(Animated.Image, {});

export default AnimateImage;
