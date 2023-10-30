import { createContext, useState } from 'react';

// type UserType = {
// 	name: string;
// 	email: string;
// 	logIn?: boolean;
// 	bestTravels?: string[] | null;
// 	reservation?: {
// 		travel: string;
// 		country: string;
// 		airPort: string;
// 		price: number;
// 		insurance: string;
// 		insurancePrice: number;
// 		dateEnd: string;
// 		dateStart: string;
// 		food: string;
// 		amountPersons: number;
// 	} | null;
// };
// type UsersRegistrationType = {
// 	name: string;
// 	email: string;
// 	password: string;
// 	confirmPassword: string;
// };
// type UserContextProviderProps = {
// 	children: React.ReactNode;
// };
// type UserContextType = {
// 	user: UserType | null | undefined;
// 	setUser: React.Dispatch<React.SetStateAction<UserType | null | undefined>>;
// 	usersRegistration: UsersRegistrationType[] | [];
// 	setUsersRegistration: React.Dispatch<
// 		React.SetStateAction<UsersRegistrationType[] | []>
// 	>;
// };
// export const UserContext = createContext<UserContextType | null>(null);

// export const UserContextProvider = ({ children }: UserContextProviderProps) => {
// 	const [user, setUser] = useState<UserType | null | undefined>(null);
// 	const [usersRegistration, setUsersRegistration] = useState<
// 		UsersRegistrationType[] | []
// 	>([
// 		{
// 			name: 'Daniel',
// 			email: 'hysiu07@gmail.com',
// 			password: '11111!',
// 			confirmPassword: '11111!',
// 		},
// 	]);
// 	return (
// 		<UserContext.Provider
// 			value={{ user, setUser, usersRegistration, setUsersRegistration }}
// 		>
// 			{children}
// 		</UserContext.Provider>
// 	);
// };
