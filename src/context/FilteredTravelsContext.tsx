import React, { createContext, useContext, useState } from 'react';
import { TravelType } from '../data/travels';

// Definicja typów
type ContextPropsType = {
	children: React.ReactNode;
};

type FilteredContextProviderType = {
	filteredTravels: TravelType[];
	setFilteredTravels: React.Dispatch<React.SetStateAction<TravelType[]>>;
};

// Początkowa pusta tablica
const initialFilteredTravels: TravelType[] = [];

// Utworzenie kontekstu
export const FilteredTravelsContext =
	createContext<FilteredContextProviderType>({
		filteredTravels: initialFilteredTravels,
		setFilteredTravels: () => {},
	});

// Dostawca kontekstu
export const FilteredTravelsContextProvider = ({
	children,
}: ContextPropsType) => {
	const [filteredTravels, setFilteredTravels] = useState(
		initialFilteredTravels
	);

	return (
		<FilteredTravelsContext.Provider
			value={{ filteredTravels, setFilteredTravels }}
		>
			{children}
		</FilteredTravelsContext.Provider>
	);
};
