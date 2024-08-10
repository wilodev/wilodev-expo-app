import { appConfig } from './config';

export type ThemeConfig = typeof appConfig;
export type { UIConfig, UIComponents } from '@gluestack-ui/themed';
export interface IConfig {}
export interface IComponents {}
declare module '@gluestack-ui/themed' {
	interface UIConfig extends Omit<ThemeConfig, keyof IConfig>, IConfig {}
}
