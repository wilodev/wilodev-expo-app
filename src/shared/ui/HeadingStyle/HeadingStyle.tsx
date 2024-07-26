/**
 * @fileOverview HeadingStyle Component
 * @description This file includes the definition and functionality of the HeadingStyle component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { RowHeadingStyle, RowTextStyle } from './headingStyleStyles';
import { HeadingStyleProps } from './types';

/**
 * HeadingStyle component to encapsulate the functionality of app.
 * @param {HeadingStyleProps} props - Props for the HeadingStyle component.
 * @returns {JSX.Element} - The rendered HeadingStyle element.
 */
const HeadingStyle: React.FC<HeadingStyleProps> = ({
	title,
	isActive,
	...props
}): React.JSX.Element => {
	return (
		<RowHeadingStyle
			h={'$full'}
			px={10}
			borderEndWidth={0.5}
			borderColor={'$gray600'}
			justifyContent="center"
			isActive={isActive}
			{...props}>
			<RowTextStyle
				isActive={(isActive as boolean) || false}
				children={title ? title : ''}
			/>
		</RowHeadingStyle>
	);
};

export default HeadingStyle;
