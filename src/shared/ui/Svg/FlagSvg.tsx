import React from 'react';

import { BaseSvg } from './BaseSvg';
import { flagMap } from './dataFlag';
import { FlagKeys } from './types';

const FlagSvg = ({ ...props }) => {
	const flag = flagMap[(props.name as FlagKeys) || 'ES'];
	return <BaseSvg {...props} as={flag} />;
};

export default React.memo(FlagSvg);
