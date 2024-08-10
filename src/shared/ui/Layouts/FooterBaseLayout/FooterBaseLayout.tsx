/**
 * @fileOverview FooterBaseLayout Component
 * @description This file includes the definition and functionality of the FooterBaseLayout component.
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
 * Retrieves the default style for FooterBaseLayout and variants.
 */
export const FooterBaseLayout = styled(Box, {
	maxWidth: '$80',
	width: '$full',
	minWidth: '$80',
	justifyContent: 'flex-end',
	marginTop: 'auto',
	mb: '$4',
});
