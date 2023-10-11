import { useContext, useEffect, useState } from 'react';
import { FilteredTravelsContext } from '../../context/FilteredTravelsContext';
import { UserContext } from '../../context/UserContext';
import { Nav } from '../../components';
import {
	FilterComponentRatingHotel,
	FilterComponentDinerOptions,
	FilterComponentLastMinute,
	FilterComponentAirPort,
} from './Filter';
import { TravelOfferComponent } from './TravelComponent';
import { SnackBar } from '../../container/SnackBar';
import { TravelType } from '../../data/travels';
import { travels } from '../../data/travels';
import { tomorrowDate } from '../../container/Hooks/tomorrowDate';
import './SearchedTravels.scss';

function SearchedTravels() {
	const {
		filteredTravels,
		setFilteredTravels,
		searchFilters,
		setSearchFilters,
	} = useContext(FilteredTravelsContext);
	useEffect(() => {
		console.log(searchFilters);
	}, [searchFilters]);
	const userContext = useContext(UserContext);
	const userLogged = userContext?.user?.logIn;

	const [snackBar, setSnackBar] = useState<boolean>(false);
	const [snackBarInfo, setSnackBarInfo] = useState<string>('');

	const [sortBy, setSortBy] = useState<string>('priceLowToHigh');

	const handleFilterTravel = () => {
		if (searchFilters) {
			const filteredTravels2 = travels.filter((travel) => {
				const selectedDate = new Date(travel.dateStart);
				const travelStartDate =
					typeof searchFilters.filters.dateStart === 'string' &&
					new Date(searchFilters.filters.dateStart);
				const countryMatch =
					typeof searchFilters.filters.country === 'string' &&
					travel.country.includes(searchFilters.filters.country);
				const priceMatch =
					typeof searchFilters.filters.price === 'number' &&
					searchFilters.filters.price >= travel.price;
				const dateMatch = selectedDate >= travelStartDate;

				const starsMatch =
					typeof searchFilters.filters.stars !== 'undefined'
						? searchFilters.filters.stars <= travel.stars
						: true;

				const dinerOptionsMatch =
					typeof searchFilters.filters.diningOptions !== 'undefined'
						? searchFilters.filters.diningOptions === travel.diningOptions
						: true;
				const lastMinuteMatch =
					typeof searchFilters.filters.lastMinute !== 'undefined'
						? searchFilters.filters.lastMinute === travel.lastMinute
						: true;
				const airPortMatch =
					typeof searchFilters.filters.airPort !== 'undefined'
						? searchFilters.filters.airPort === travel.airPort
						: true;
				return (
					countryMatch &&
					dateMatch &&
					priceMatch &&
					starsMatch &&
					dinerOptionsMatch &&
					lastMinuteMatch &&
					airPortMatch
				);
			});
			setFilteredTravels(filteredTravels2);
		}
	};
	const handleRemoveFilters = async () => {
		await setSearchFilters({
			filters: {
				country: '',
				dateStart: tomorrowDate(),
				price: 5000,
			},
		});
	};
	useEffect(() => {
		handleFilterTravel();
	}, [searchFilters]);
	useEffect(() => {
		const travelsLocalStorage = localStorage.getItem('travels');
		if (typeof travelsLocalStorage === 'string') {
			const travels = JSON.parse(travelsLocalStorage);
			setFilteredTravels(travels);
		}
		const filtersLocalStorage = localStorage.getItem('filters');
		if (typeof filtersLocalStorage === 'string') {
			const filters = JSON.parse(filtersLocalStorage);
			setSearchFilters(filters);
		}
		return () => {
			localStorage.removeItem('filters');
		};
	}, []);

	const sortTravels = (travels: TravelType[], sortBy: string): TravelType[] => {
		if (sortBy === 'priceLowToHigh') {
			return [...travels].sort((a, b) => a.price - b.price);
		} else if (sortBy === 'priceHightToLow') {
			return [...travels].sort((a, b) => b.price - a.price);
		} else if (sortBy === 'nameAZ') {
			return [...travels].sort((a, b) => a.hotel.localeCompare(b.hotel));
		} else if (sortBy === 'nameZA') {
			return [...travels].sort((a, b) => b.hotel.localeCompare(a.hotel));
		} else {
			return travels;
		}
	};

	const handleSortChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
		const newSortBy = e.target.value;
		const sortedTravels = sortTravels(filteredTravels, newSortBy);
		setFilteredTravels(sortedTravels);
		setSortBy(newSortBy);
	};

	async function handleShowSnackBar(info: string) {
		await setSnackBarInfo(info);
		await setSnackBar(true);
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(setSnackBar(false));
			}, 2000);
		});
	}

	const [showChoicesFilters, setShowChoicesFilters] = useState({
		filterComponentAirPort: false,
		filterComponentDinerOptions: false,
		filterComponentLastMinute: false,
		filterComponentStars: false,
	});
	return (
		<div className='searched-travels'>
			<SnackBar
				text={snackBarInfo}
				position={snackBar ? { right: '50px' } : { right: '-300px' }}
			/>
			<Nav />
			<div className='searched-travels__container'>
				<div className='searched-travels__filter-panel'>
					<FilterComponentDinerOptions
						showChoices={showChoicesFilters.filterComponentDinerOptions}
						setShowChoices={setShowChoicesFilters}
						choices={[
							'All-Inclusive',
							'3 Meals',
							'Breakfasts',
							'Without Meals',
						]}
						title='Dining Options'
					/>
					<FilterComponentRatingHotel
						showChoices={showChoicesFilters.filterComponentStars}
						setShowChoices={setShowChoicesFilters}
						choices={[1, 2, 3, 4, 5]}
						title='Hotel Rating'
					/>
					<FilterComponentLastMinute
						showChoices={showChoicesFilters.filterComponentLastMinute}
						setShowChoices={setShowChoicesFilters}
						title='Last Minute'
						choices={['Yes', 'No', 'All']}
					/>
					<FilterComponentAirPort
						showChoices={showChoicesFilters.filterComponentAirPort}
						setShowChoices={setShowChoicesFilters}
						title='AirPort'
						choices={['Krakow', 'Warsaw', 'Poznan', 'Gdansk']}
					/>

					<div className='container-btns'>
						<button
							onClick={() => {
								handleRemoveFilters();
								setShowChoicesFilters({
									filterComponentAirPort: false,
									filterComponentDinerOptions: false,
									filterComponentLastMinute: false,
									filterComponentStars: false,
								});
							}}
							className='filter-panel-btn'
						>
							Reset filters!
						</button>
					</div>
				</div>
				<div className='searched-travels__filtered-travels'>
					<div className='sort-input'>
						<h3>We found {filteredTravels.length} offers</h3>
						<div>
							<label htmlFor='sort travels'> Sort:</label>
							<select
								name='sort travels'
								id='sort-travels'
								value={sortBy}
								onChange={handleSortChange}
							>
								<option value='priceLowToHigh'>Price Low to High</option>
								<option value='priceHightToLow'>Price High to Low</option>
								<option value='nameAZ'>Name A-Z</option>
								<option value='nameZA'>Name Z-A</option>
							</select>
						</div>
					</div>

					{filteredTravels.map((travel) => {
						return (
							<TravelOfferComponent
								key={travel.id}
								img={travel.img}
								stars={travel.stars}
								country={travel.country}
								city={travel.city}
								dateStart={travel.dateStart}
								dateEnd={travel.dateEnd}
								airPort={travel.airPort}
								price={travel.price}
								hotel={travel.hotel}
								lastMinute={travel.lastMinute}
								userLogged={userLogged}
								handleShowSnackBar={handleShowSnackBar}
								dinerOptions={travel.diningOptions}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default SearchedTravels;
