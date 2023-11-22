import { useContext, useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { FilteredTravelsContext } from '../../context/FilteredTravelsContext';

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
import { FavPanel } from '../../container/FavoritesPanel';
import ScrollUpComponent from '../../container/ScrollUp/ScrollUpComponent';

import { connect } from 'react-redux';

import './SearchedTravels.scss';

function SearchedTravels({ infoUser }: any) {
	const { filteredTravels, setFilteredTravels } = useContext(
		FilteredTravelsContext
	);
	const [rectTop, setRectTop] = useState<number | undefined>(0);
	const titleRef = useRef<HTMLHeadingElement>(null);

	const params = useParams();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const userLogged = infoUser.isLoggIn;

	const [snackBar, setSnackBar] = useState<boolean>(false);
	const [snackBarInfo, setSnackBarInfo] = useState<string>('');

	const [sortBy, setSortBy] = useState<string>('deafaultOption');

	const handlescrollToTop = () => {
		if (titleRef.current) {
			titleRef.current.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};
	const handleFilterTravel = () => {
		const uppDateFiltersTravel = travels.filter((travel) => {
			const starsParams = searchParams.get('hotelRating');
			const dinerOptionParams = searchParams.get('dinerOptions');
			const airPortParams = searchParams.get('airPort');
			const lastMinuteParams = searchParams.get('lastMinute');
			const selectedDate = new Date(travel.dateStart);
			const travelStartDate =
				typeof params.date === 'string' && new Date(params.date);
			const countryMatch =
				params.country === 'All' ||
				(params.country && travel.country.includes(params.country));
			const priceMatch = params.price && Number(params.price) >= travel.price;
			const dateMatch = selectedDate >= travelStartDate;

			const starsMatch =
				starsParams !== null ? Number(starsParams) <= travel.stars : true;

			const dinerOptionsMatch =
				dinerOptionParams !== null
					? dinerOptionParams === travel.diningOptions
					: true;

			let lastMinuteType;
			if (lastMinuteParams === 'Yes') {
				lastMinuteType = true;
			} else if (lastMinuteParams === 'No') {
				lastMinuteType = false;
			} else {
				lastMinuteType = undefined;
			}
			const lastMinuteMatch =
				lastMinuteType !== undefined
					? lastMinuteType === travel.lastMinute
					: true;

			const airPortMatch =
				airPortParams !== null ? airPortParams === travel.airPort : true;

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
		setFilteredTravels(uppDateFiltersTravel);
	};
	const handleRemoveFilters = () => {
		navigate(`/travel-website/searchedTravels/All/${tomorrowDate()}/5000`);
		setSortBy('defaultOption');
	};

	useEffect(() => {
		handleFilterTravel();
	}, [params]);
	useEffect(() => {
		handleFilterTravel();
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
		filterComponentAirPort: true,
		filterComponentDinerOptions: true,
		filterComponentLastMinute: true,
		filterComponentStars: true,
	});
	
	return (
		<div className='searched-travels'>
			<ScrollUpComponent clientHeight={rectTop} scrollTop={handlescrollToTop} />
			<FavPanel />

			<SnackBar
				text={snackBarInfo}
				position={snackBar ? { right: '50px' } : { right: '-300px' }}
			/>
			<Nav />
			<div
				className='searched-travels__container'
				onScroll={() => {
					if (titleRef.current) {
						const rect = titleRef.current?.getBoundingClientRect();
						setRectTop(rect?.top);
					}
				}}
			>
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
						<h3 ref={titleRef}>We found {filteredTravels.length} offers</h3>
						<div>
							<label htmlFor='sort travels'> Sort:</label>
							<select
								name='sort-travels'
								id='sort-travels'
								value={sortBy}
								onChange={handleSortChange}
							>
								<option value='defaultOption'>Sort your Travles</option>
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
const mapStateToProps = (state: any) => {
	return {
		infoUser: state.userInfo.user,
	};
};
export default connect(mapStateToProps)(SearchedTravels);
