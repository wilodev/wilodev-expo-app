import React from 'react';

import NotificationSvg from '@/assets/icons/notification.svg';

import { BaseIcon } from './BaseIcon';

const NotificationIcon = ({ ...props }) => {
	return <BaseIcon as={NotificationSvg} {...props} />;
};

export default React.memo(NotificationIcon);
