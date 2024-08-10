import React from 'react';

import CheckSvg from '@/assets/icons/check.svg';

import { BaseIcon } from './BaseIcon';

const CheckIcon = ({ ...props }) => {
	return <BaseIcon as={CheckSvg} {...props} />;
};

export default React.memo(CheckIcon);
