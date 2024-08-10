import React from 'react';

import CloseSvg from '@/assets/icons/close.svg';

import { BaseIcon } from './BaseIcon';

const CloseIcon = ({ ...props }) => {
	return <BaseIcon as={CloseSvg} {...props} />;
};

export default React.memo(CloseIcon);
