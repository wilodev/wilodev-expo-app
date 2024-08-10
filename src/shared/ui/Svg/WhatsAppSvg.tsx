import React from 'react';

import WhatsApp from '@/assets/icons/whatsapp.svg';

import { BaseSvg } from './BaseSvg';

const WhatsAppSvg = ({ ...props }) => {
	return <BaseSvg as={WhatsApp} {...props} />;
};

export default React.memo(WhatsAppSvg);
