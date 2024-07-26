import React from 'react';

import Logo from '@/assets/svg/logo.svg';

import { BaseSvg } from './BaseSvg';

const LogoSvg = ({ ...props }) => {
	return <BaseSvg as={Logo} {...props} />;
};

export default React.memo(LogoSvg);
