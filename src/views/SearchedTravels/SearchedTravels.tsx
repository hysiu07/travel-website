import { useContext, useEffect, useState } from 'react';
import './SearchedTravels.scss';
import { FilteredTravelsContext } from '../../context/FilteredTravelsContext';
import { Nav } from '../../components';
import { UserContext } from '../../context/UserContext';
import { FilterComponent } from './Filter';
import { TravelOfferComponent } from './TravelComponent';
import { SnackBar } from '../../container/SnackBar';
import { TravelType } from '../../data/travels';
function SearchedTravels() {
	const { filteredTravels, setFilteredTravels } = useContext(
		FilteredTravelsContext
	);
	const userContext = useContext(UserContext);

	const userLogged = userContext?.user?.logIn;

	const [snackBar, setSnackBar] = useState<boolean>(false);
	const [snackBarInfo, setSnackBarInfo] = useState<string>('');

	const [sortBy, setSortBy] = useState<string>('priceLowToHigh');

	useEffect(() => {
		const travelsLocalStorage = localStorage.getItem('travels');
		if (typeof travelsLocalStorage === 'string') {
			const travels = JSON.parse(travelsLocalStorage);
			setFilteredTravels(travels);
		}
		const userLocalStorage = localStorage.getItem('user');
		if (typeof userLocalStorage === 'string') {
			const user2 = JSON.parse(userLocalStorage);
			userContext?.setUser(user2);
		}
	}, []);
	console.log(userContext?.user);

	const sortTravels = (travels: TravelType[], sortBy: string): TravelType[] => {
		if (sortBy === 'priceLowToHigh') {
			return [...travels].sort((a, b) => a.price - b.price);
		} else if (sortBy === 'priceHightToLow') {
			return [...travels].sort((a, b) => b.price - a.price);
		} else if (sortBy === 'nameAZ') {
			return [...travels].sort((a, b) => a.country.localeCompare(b.country));
		} else if (sortBy === 'nameZA') {
			return [...travels].sort((a, b) => b.country.localeCompare(a.country));
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
	return (
		<div className='searched-travels'>
			<SnackBar
				text={snackBarInfo}
				position={snackBar ? { right: '50px' } : { right: '-300px' }}
			/>
			<Nav />
			<div className='searched-travels__container'>
				<div className='searched-travels__filter-panel'>
					<FilterComponent
						choices={[
							'All-Inclusive',
							'3 Meals',
							'Breakfasts',
							'Without Meals',
						]}
						title='Dining Options'
					/>
					<FilterComponent
						choices={[
							'Any',
							'1 star *',
							'2 stars **',
							'3 stars ***',
							'4 stars ****',
							'5 stars *****',
						]}
						title='Hotel Rating'
					/>
					<FilterComponent
						choices={[
							'Sandy beach',
							'Sunbeds and umbrellas included',
							'Playground',
							'Kids menu',
							'Spa',
							'Indoor pool',
							'Adults-only',
							'Gluten-free menu',
							'Facilities for people with disabilities',
							'City Break hotels',
							'Adult entertainment',
							'Children entertainment',
							'Intimate hotels',
						]}
						title='Amenities'
					/>
					<FilterComponent
						choices={[
							'Suite',
							'Bungalow',
							'Double Room',
							'Family Room',
							'Apartment',
							'Studio',
						]}
						title='Room Type'
					/>
					<FilterComponent
						choices={['Any', 'Up to 50m', 'Up to 250m', 'Up to 500m']}
						title='Beach Distances'
					/>
					<FilterComponent
						choices={['Free in the hotel', 'Free in the lobby']}
						title='WiFi'
					/>
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
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default SearchedTravels;
