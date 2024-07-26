import React from 'react';

import { Icon } from '@gluestack-ui/themed';

import { IconProps } from './types';

export const BaseIcon: React.FC<IconProps> = (props) => {
	const {
		as,
		w,
		h,
		width = 24,
		height = 24,
		fill = '$white',
		stroke = '$white',
		isOutline = false,
	} = props;
	const iconWidth = w || width;
	const iconHeight = h || height;
	return (
		<Icon
			w={iconWidth}
			h={iconHeight}
			fill={isOutline ? 'none' : fill}
			stroke={stroke}
			{...props}
			as={as}
		/>
	);
};
