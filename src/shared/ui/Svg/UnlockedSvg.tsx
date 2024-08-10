import React from 'react';

import Unlocked from '@/assets/svg/unlocked.svg';

import { BaseSvg } from './BaseSvg';

const UnlockedSvg = ({ ...props }) => {
	return <BaseSvg as={Unlocked} {...props} />;
};

export default React.memo(UnlockedSvg);
