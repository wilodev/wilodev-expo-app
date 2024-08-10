import React from 'react';

import LockSvg from '@/assets/icons/lock.svg';

import { BaseIcon } from './BaseIcon';

const LockIcon = ({ ...props }) => {
	return <BaseIcon as={LockSvg} {...props} />;
};

export default React.memo(LockIcon);
