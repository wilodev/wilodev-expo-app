import React from 'react';

import WelcomeImageSvg from '@/assets/svg/welcome.svg';

import { BaseSvg } from './BaseSvg';

const WelcomeSvg = ({ ...props }) => {
	return <BaseSvg as={WelcomeImageSvg} {...props} />;
};

export default React.memo(WelcomeSvg);
