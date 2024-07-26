import React from 'react';

import ArrowLeftSvg from '@/assets/icons/arrow-left.svg';

import { BaseIcon } from './BaseIcon';

const ArrowLeftIcon = ({ ...props }) => {
	return <BaseIcon as={ArrowLeftSvg} {...props} />;
};

export default React.memo(ArrowLeftIcon);
