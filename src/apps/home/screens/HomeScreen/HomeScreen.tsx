/**
 * @fileOverview HomeScreen Component
 * @description This screen component is responsible for displaying the Home user interface.
 *              It serves as a container for specific components related to the Home functionality.
 * @version 1.0
 * @since 2024
 * @creator Wilson Fabian Pérez Sucuzhañay @wilodev
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @license For license details, see [License](https://github.com/wilodev/wilodev-expo-app/-/raw/develop/LICENSE.md)
 */
import React from 'react';

import { Box, Column, HorizontalCard, Text, VerticalCard } from '@/shared/ui';

const Home: React.FC = () => {
	return (
		<>
			<VerticalCard
				image={
					'https://ideasfarm.nyc3.digitaloceanspaces.com/farms/9b744860-60c7-4a7e-b90d-70182f35fa18/demo-ideasfarm-tim-photo_profile.jpg'
				}
				title="Demo"
				subtitle="Dairy Farming">
				<Column gap={'$2'}>
					<Text action="success" isBold>
						Animales:
					</Text>
					<Text action="success" isBold>
						124
					</Text>
				</Column>
				<Column gap={'$2'}>
					<Text isBold>Location:</Text>
					<Text>Quito - Ecuador</Text>
				</Column>
				<Column gap={'$2'}>
					<Text isBold>Owner</Text>
					<Text>Bernardo</Text>
				</Column>
			</VerticalCard>
			<Box
				mt={'$4'}
				w={'$full'}
				justifyContent="center"
				alignItems="center"
				gap={16}
				padding={16}>
				<HorizontalCard
					image={
						'https://ideasfarm.nyc3.digitaloceanspaces.com/farms/9b744860-60c7-4a7e-b90d-70182f35fa18/demo-ideasfarm-tim-photo_profile.jpg'
					}
					title="Vaca Uno">
					<Box>
						<Text>Hola</Text>
					</Box>
				</HorizontalCard>
			</Box>
		</>
	);
};
export default Home;
