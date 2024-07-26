import React from 'react';

import FaceSvg from '@/assets/icons/face-ID.svg';

import { BaseIcon } from './BaseIcon';

const FaceIcon = ({ ...props }) => {
	return <BaseIcon as={FaceSvg} {...props} />;
};

export default React.memo(FaceIcon);
