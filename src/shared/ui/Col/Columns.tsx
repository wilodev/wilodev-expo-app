/**
 * @fileOverview Columns Component
 * @description This file includes the definition and functionality of the Columns component.
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

import { StyleProp, ViewStyle } from 'react-native';

import { VALID_COLUMNS } from '@/shared/config/layoutConfig';
import { calculateChildWidth } from '@/shared/utils/viewUtils';

import { Columns as ColumnsStyle } from './columnsStyles';
import { ColumnsProps } from './types';

/**
 * Columns component to encapsulate the functionality of app.
 * @param children
 * @param {ColumnsProps} props - Props for the Columns component.
 * @returns {JSX.Element} - The rendered Columns element.
 */
const Columns: React.FC<ColumnsProps> = ({
	children,
	columns = 1,
}): React.JSX.Element => {
	const validColumns = VALID_COLUMNS.includes(columns) ? columns : 1;
	// Filtra y calcula el ancho total de los hijos con ancho fijo
	const childWidth = calculateChildWidth(validColumns);
	// Aplicar ancho a cada hijo y manejar el wrap automáticamente
	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			// Calcular el ancho final del child
			const childFinalWidth =
				child.props.style?.width ||
				child.props.w ||
				child.props.width ||
				childWidth;
			// Determinar si el childFinalWidth es un porcentaje
			const isPercentageWidth =
				typeof childFinalWidth === 'string' && childFinalWidth.endsWith('%');

			return React.cloneElement(child, {
				style: {
					width: childFinalWidth,
					flexBasis: isPercentageWidth ? 'auto' : '0%',
					flexGrow: isPercentageWidth ? 1 : 0,
					flexShrink: isPercentageWidth ? 1 : 0,
					...(child.props.style as React.CSSProperties),
				},
			} as React.HTMLAttributes<unknown> & { style?: StyleProp<ViewStyle> });
		}
		return child;
	});
	return <ColumnsStyle.Container>{childrenWithProps}</ColumnsStyle.Container>;
};

export default Columns;
