import React from 'react';

import ReadSvg from '@/assets/icons/read.svg';

import { BaseIcon } from './BaseIcon';

const ReadIcon = ({ ...props }) => {
	return <BaseIcon as={ReadSvg} {...props} />;
};

export default React.memo(ReadIcon);
