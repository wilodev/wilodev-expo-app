import { MainTabParamList } from '@/navigation/Authenticated/MainTabNavigator/MainTabNavigator';
import { HomeIcon, SettingsIcon, NotificationIcon } from '@/shared/ui';
import { IconProps } from '@/shared/ui/Icons/types';

export const iconMap: Record<
	keyof MainTabParamList,
	React.ComponentType<IconProps>
> = {
	HomeAccount: HomeIcon,
	UserAccount: NotificationIcon,
	DataAccount: NotificationIcon,
	SettingAccount: SettingsIcon,
};
