import React from 'react';

import SearchSvg from '@/assets/icons/search.svg';

import { BaseIcon } from './BaseIcon';

const SearchIcon = ({ ...props }) => {
	return <BaseIcon as={SearchSvg} {...props} />;
};

export default React.memo(SearchIcon);
