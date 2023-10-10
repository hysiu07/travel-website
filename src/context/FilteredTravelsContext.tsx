import React, { createContext, useContext, useState } from 'react';
import { TravelType } from '../data/travels';

type ContextPropsType = {
	children: React.ReactNode;
};

type FilteredContextProviderType = {
	filteredTravels: TravelType[];
	setFilteredTravels: React.Dispatch<React.SetStateAction<TravelType[]>>;
	searchFilters: SearchFiltersType;
	setSearchFilters: React.Dispatch<React.SetStateAction<SearchFiltersType>>;
};
type SearchFiltersType = {
	filters: {
		country?: string;
		dateStart?: Date | string;
		price?: number;
		stars?: number;
		diningOptions?: string;
		lastMinute?: boolean
		airPort?: string
	};
};

const initialFilteredTravels: TravelType[] = [];

export const FilteredTravelsContext =
	createContext<FilteredContextProviderType>({
		filteredTravels: initialFilteredTravels,
		setFilteredTravels: () => {},
		searchFilters: {
			filters: {},
		},
		setSearchFilters: () => {},
	});

export const FilteredTravelsContextProvider = ({
	children,
}: ContextPropsType) => {
	const [filteredTravels, setFilteredTravels] = useState(
		initialFilteredTravels
	);
	const [searchFilters, setSearchFilters] = useState<SearchFiltersType>({
		filters: {},
	});

	return (
		<FilteredTravelsContext.Provider
			value={{
				filteredTravels,
				setFilteredTravels,
				searchFilters,
				setSearchFilters,
			}}
		>
			{children}
		</FilteredTravelsContext.Provider>
	);
};
