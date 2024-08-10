import { Box } from '@gluestack-ui/themed';

import { flagMap } from './dataFlag';

export type FlagKeys = keyof typeof flagMap;

type GIconProps = React.ComponentProps<typeof Box>;
export interface IconProps extends GIconProps {
	fill?: string;
	name?: FlagKeys;
	stroke?: string | undefined;
}
