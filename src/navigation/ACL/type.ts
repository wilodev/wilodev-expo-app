import { RouteProp } from '@react-navigation/native';

export type ACLStackParamList = {
	ActivationCodeScreen: {
		email: string;
		phone?: string;
		externalCode?: string;
	};
	ForceChangePasswordScreen: { email: string };
	ForgotPasswordScreen: undefined;
	ForgotPasswordOptionsScreen: undefined;
	ForgotPasswordWhatsAppScreen: { selectedPrefix?: string };
	LoginScreen: undefined;
	RegisterScreen: { selectedPrefix?: string };
	ResetCodeScreen: { email?: string; phone?: string; externalCode?: string };
	ResetPasswordScreen: { email: string };
	PasswordResetSuccessfulScreen: { email: string };
	WelcomeScreen: undefined;
	CountryPhonePrefixScreen: {
		currentPrefix: string;
		originScreen: string;
	};
	TermsAndConditionsScreen: undefined;
};

export type AuthRouteProp<T extends keyof ACLStackParamList> = RouteProp<
	ACLStackParamList,
	T
>;
