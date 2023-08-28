import { createContext, useState } from 'react';

type UserType = {
	name: string;
	email: string;
	password: string;
	logIn: boolean;
};
type UserContextProviderProps = {
	children: React.ReactNode;
};
type UserContextType = {
	user: UserType | null;
	setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};
export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<UserType | null>({
		name: '',
		email: '',
		password: '',
		logIn: false,
	});
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
