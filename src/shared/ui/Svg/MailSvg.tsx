import React from 'react';

import MailImageSvg from '@/assets/svg/mail.svg';

import { BaseSvg } from './BaseSvg';

const MailSvg = ({ ...props }) => {
	return <BaseSvg as={MailImageSvg} {...props} />;
};

export default React.memo(MailSvg);
