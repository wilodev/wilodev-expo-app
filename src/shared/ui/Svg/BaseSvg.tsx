import React from 'react';

import { Icon } from '@gluestack-ui/themed';

import { IconProps } from '../Icons/types';

export const BaseSvg = ({
	as,
	w,
	h,
	width = 24,
	height = 24,
	fill = '$white',
	stroke = 'none',
	...props
}: IconProps) => {
	const iconWidth = w || width;
	const iconHeight = h || height;
	return (
		<Icon
			as={as}
			w={iconWidth}
			h={iconHeight}
			fill={fill}
			stroke={stroke}
			{...props}
		/>
	);
};
