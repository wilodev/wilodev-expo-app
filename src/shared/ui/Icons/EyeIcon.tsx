import React from 'react';

import EyeSvg from '@/assets/icons/eye.svg';

import { BaseIcon } from './BaseIcon';

const EyeIcon = ({ ...props }) => {
	return <BaseIcon as={EyeSvg} {...props} />;
};

export default React.memo(EyeIcon);
