import React from 'react';

import EyeSlashSvg from '@/assets/icons/eye-slash.svg';

import { BaseIcon } from './BaseIcon';

const EyeSlashIcon = ({ ...props }) => {
	return <BaseIcon as={EyeSlashSvg} {...props} />;
};

export default React.memo(EyeSlashIcon);
