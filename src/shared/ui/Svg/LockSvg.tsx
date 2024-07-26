import React from 'react';

import Locked from '@/assets/svg/lock.svg';

import { BaseSvg } from './BaseSvg';

const LockSvg = ({ ...props }) => {
	return <BaseSvg as={Locked} {...props} />;
};

export default React.memo(LockSvg);
