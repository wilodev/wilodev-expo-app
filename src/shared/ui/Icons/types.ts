import React from 'react';

import { SvgProps } from 'react-native-svg';

import { Box, Icon } from '@gluestack-ui/themed';

// Definir el tipo para las propiedades del componente Icon
// type GIconProps = React.ComponentProps<typeof Box> &
// 	SvgProps &
// 	Omit<typeof Icon, 'children' | 'forwardRef'>;
type GIconProps = Omit<React.ComponentProps<typeof Box>, 'children'> &
	SvgProps &
	Omit<React.ComponentType<typeof Icon>, 'children' | 'as'>;

// Combina las propiedades del Icon con las propiedades adicionales
export interface IconProps extends GIconProps {
	isOutline?: boolean;
	as: unknown;
}
