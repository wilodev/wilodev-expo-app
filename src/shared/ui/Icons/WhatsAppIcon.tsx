import React from 'react';

import WhatsAppSVG from '@/assets/icons/whatsapp.svg';

import { BaseIcon } from './BaseIcon';

const WhatsAppIcon = ({ ...props }) => {
	return <BaseIcon as={WhatsAppSVG} {...props} />;
};

export default React.memo(WhatsAppIcon);
