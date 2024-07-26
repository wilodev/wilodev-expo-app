/**
 * @fileOverview OnboardingScreen Component
 * @description This screen component is responsible for displaying the Onboarding user interface.
 *              It serves as a container for specific components related to the Onboarding functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { AnimateCarousel } from '@/components/Carousel';
import data from '@/init/constants/dataSlides';
import BaseLayout from '@/layouts/BaseLayout';

const Onboarding: React.FC = () => {
	return (
		<BaseLayout>
			<AnimateCarousel data={data} />
		</BaseLayout>
	);
};
export default Onboarding;
