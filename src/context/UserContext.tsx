import { createContext, useState } from 'react';

type UserType = {
	name: string;
	email: string | null;
	password: string | null;
    logIn : boolean
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
		name: 'Daniel',
		email: 'user@user.com',
        password: '12345',
        logIn: false
	});
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
