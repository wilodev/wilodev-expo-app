/**
 * @fileOverview ChildrenBaseLayout Component
 * @description This file includes the definition and functionality of the ChildrenBaseLayout component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import { styled } from '@gluestack-style/react';
import { Box } from '@gluestack-ui/themed';

/**
 * Retrieves the default style for ChildrenBaseLayout and variants.
 */
export const ChildrenBaseLayout = styled(Box, {
	flex: 1,
	maxWidth: 400,
	width: '$full',
	minWidth: '$80',
});
