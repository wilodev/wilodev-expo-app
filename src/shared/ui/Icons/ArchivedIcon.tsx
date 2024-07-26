import React from 'react';

import ArchivedSvg from '@/assets/icons/archive.svg';

import { BaseIcon } from './BaseIcon';

const ArchivedIcon = ({ ...props }) => {
	return <BaseIcon as={ArchivedSvg} {...props} />;
};

export default React.memo(ArchivedIcon);
