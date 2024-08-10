/**
 * @fileOverview Pagination Component
 * @description This file includes the definition and functionality of the Pagination component.
 *              It is part of the AnimateCarousel functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { Box } from '@/ui/Box';

import { PaginationProps } from './types';
import { Dot } from '../Dot';

/**
 * Pagination component to encapsulate the functionality of app.
 * @param {PaginationProps} props - Props for the pagination component.
 * @returns {JSX.Element} - The rendered pagination element.
 */
const Pagination: React.FC<PaginationProps> = ({
	items,
	x,
}): React.JSX.Element => {
	return (
		<Box
			flexDirection="row"
			height={40}
			justifyContent="center"
			alignItems="center">
			{items.map((_, index) => (
				<Dot index={index} x={x} key={index} />
			))}
		</Box>
	);
};

export default Pagination;
