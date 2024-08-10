import React from 'react';

import CrossSquareSvg from '@/assets/icons/cross-square.svg';

import { BaseIcon } from './BaseIcon';

const CrossSquare = ({ ...props }) => {
	return <BaseIcon as={CrossSquareSvg} {...props} />;
};

export default React.memo(CrossSquare);
