import React from 'react';

import UnreadSvg from '@/assets/icons/unread.svg';

import { BaseIcon } from './BaseIcon';

const UnreadIcon = ({ ...props }) => {
	return <BaseIcon as={UnreadSvg} {...props} />;
};

export default React.memo(UnreadIcon);
