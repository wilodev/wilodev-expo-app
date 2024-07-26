import React from 'react';

import TrapecioSvg from '@/assets/svg/trapecio.svg';

import { BaseSvg } from './BaseSvg';

const ReplaySvg = ({ ...props }) => {
	return <BaseSvg as={TrapecioSvg} {...props} />;
};

export default React.memo(ReplaySvg);
