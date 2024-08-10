import React from 'react';

import MailSvg from '@/assets/icons/mail.svg';

import { BaseIcon } from './BaseIcon';

const MailIcon = ({ ...props }) => {
	return <BaseIcon as={MailSvg} {...props} />;
};

export default React.memo(MailIcon);
