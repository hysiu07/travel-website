import React, { createContext, useState } from 'react';
import { TravelType } from '../data/travels';

type ContextPropsType = {
	children: React.ReactNode;
};

type FilteredContextProviderType = {
	filteredTravels: TravelType[];
	setFilteredTravels: React.Dispatch<React.SetStateAction<TravelType[]>>;
};

const initialFilteredTravels: TravelType[] = [];

export const FilteredTravelsContext =
	createContext<FilteredContextProviderType>({
		filteredTravels: initialFilteredTravels,
		setFilteredTravels: () => {},
	});

export const FilteredTravelsContextProvider = ({
	children,
}: ContextPropsType) => {
	const [filteredTravels, setFilteredTravels] = useState(
		initialFilteredTravels
	);

	return (
		<FilteredTravelsContext.Provider
			value={{
				filteredTravels,
				setFilteredTravels,
			}}
		>
			{children}
		</FilteredTravelsContext.Provider>
	);
};
