/**
 * @fileOverview Styles for DynamicColumn Component
 * @description This file provides style definitions for the DynamicColumn component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the DynamicColumn component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import { createComponents, styled } from '@gluestack-style/react';
import { Box } from '@gluestack-ui/themed';

import { ColProps, ColumnsProps } from './types';

/**
 */
const DynamicColumnStyle = styled(Box, {
	flexDirection: 'row',
	flexWrap: 'wrap',
	variants: {
		columns: {
			1: { width: '100%' },
			2: { width: '50%' },
			3: { width: '33.333%' },
			4: { width: '25%' },
			5: { width: '20%' },
			6: { width: '16.666%' },
			7: { width: '14.285%' },
			8: { width: '12.5%' },
			9: { width: '11.111%' },
			10: { width: '10%' },
			11: { width: '9.09%' },
			12: { width: '8.333%' },
		},
	},
	defaultProps: {
		columns: '1' as const,
	},
}) as React.ComponentType<React.PropsWithChildren<ColumnsProps>>;

const ColumnStyle = styled(Box, {
	flexGrow: 1,
	flexShrink: 0,
	flexBasis: '0%',
});

export const Columns = createComponents({
	Container: DynamicColumnStyle,
	Column: ColumnStyle,
});

export const ColStyle = styled(Box, {
	flexGrow: 1,
	flexShrink: 1,
	flexBasis: '0%',
	'@md': {
		flexBasis: '33%',
	},
}) as React.ComponentType<React.PropsWithChildren<ColProps>>;
