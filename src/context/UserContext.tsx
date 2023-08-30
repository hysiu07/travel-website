import { createContext, useState } from 'react';

type UserType = {
	name: string;
	email: string;
	logIn?: boolean;
};
type UsersRegistrationType = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};
type UserContextProviderProps = {
	children: React.ReactNode;
};
type UserContextType = {
	user: UserType | null;
	setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
	usersRegistration: UsersRegistrationType[] | [];
	setUsersRegistration: React.Dispatch<
		React.SetStateAction<UsersRegistrationType[] | []>
	>;
};
export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<UserType | null>(null);
	const [usersRegistration, setUsersRegistration] = useState<
		UsersRegistrationType[] | []
	>([
		{
			name: 'Daniel',
			email: 'hysiu07@gmail.com',
			password: '11111!',
			confirmPassword: '11111!',
		},
	]);
	return (
		<UserContext.Provider
			value={{ user, setUser, usersRegistration, setUsersRegistration }}
		>
			{children}
		</UserContext.Provider>
	);
};
