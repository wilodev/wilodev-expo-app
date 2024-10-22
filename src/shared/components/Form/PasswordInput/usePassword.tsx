import { useState } from 'react';

export const usePassword = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const toggleShowPassword = () => setShowPassword((prev) => !prev);
	return { showPassword, toggleShowPassword };
};
