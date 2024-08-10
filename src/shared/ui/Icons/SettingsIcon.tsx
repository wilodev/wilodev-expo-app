import React from 'react';

import SettingsSvg from '@/assets/icons/setting.svg';

import { BaseIcon } from './BaseIcon';

const SettingsIcon = ({ ...props }) => {
	return <BaseIcon as={SettingsSvg} {...props} />;
};

export default React.memo(SettingsIcon);
