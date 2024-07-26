import React from 'react';

import ArrowDownSvg from '@/assets/icons/down.svg';

import { BaseIcon } from './BaseIcon';

const ArrowDownIcon = ({ ...props }) => {
	return <BaseIcon as={ArrowDownSvg} {...props} />;
};

export default React.memo(ArrowDownIcon);
