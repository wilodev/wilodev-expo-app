import React from 'react';

import HomeSvg from '@/assets/icons/home.svg';

import { BaseIcon } from './BaseIcon';

const homeIcon = ({ ...props }) => {
	return <BaseIcon as={HomeSvg} {...props} />;
};

export default React.memo(homeIcon);
