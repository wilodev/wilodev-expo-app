/**
 * @fileOverview ButtonBack Component
 * @description This file includes the definition and functionality of the ButtonBack component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for .
 *             .
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */

import React from 'react';

import { TouchableWithoutFeedback } from '@/shared/ui/TouchableWithoutFeedback';

import { ButtonBackIconStyle, ButtonBackStyle } from './buttonBackStyles';
import { ButtonBackProps } from './types';

/**
 * ButtonBack component to encapsulate the functionality of app.
 * @param {ButtonBackProps} props - Props for the button back component.
 * @returns {JSX.Element} - The rendered button back element.
 */
const ButtonBack: React.FC<ButtonBackProps> = ({
	onPress,
}): React.JSX.Element => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<ButtonBackStyle>
				<ButtonBackIconStyle fill="$iconLight" stroke="$iconLight" />
			</ButtonBackStyle>
		</TouchableWithoutFeedback>
	);
};

export default ButtonBack;
