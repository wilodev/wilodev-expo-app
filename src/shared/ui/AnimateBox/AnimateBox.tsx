/**
 * @fileOverview AnimateBox Component
 * @description This file includes the definition and functionality of the AnimateBox component.
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
 * AnimateBox component to encapsulate the functionality of app.
 * @param {AnimateBoxProps} props - Props for the box animate component.
 * @returns {JSX.Element} - The rendered box animate element.
 */
const AnimateBox = styled(Animated.View, {
	alignItems: 'center',
	justifyContent: 'center',
});

export default AnimateBox;
