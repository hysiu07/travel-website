import { useContext, useEffect } from 'react';
import './SearchedTravels.scss';
import { FilteredTravelsContext } from '../../context/FilteredTravelsContext';
import { Nav } from '../../components';

import { FilterComponent } from './Filter';
import { TravelOfferComponent } from './TravelComponent';
function SearchedTravels() {
	const { filteredTravels, setFilteredTravels } = useContext(
		FilteredTravelsContext
	);
	useEffect(() => {
		const travelsLocalStorage = localStorage.getItem('travels');
		if (typeof travelsLocalStorage === 'string') {
			const travels = JSON.parse(travelsLocalStorage);
			setFilteredTravels(travels);
		}
	}, []);

	return (
		<div className='searched-travels'>
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
					<h2>We find for you {filteredTravels.length} offers</h2>
					{filteredTravels.map((travel) => {
					
						return (
							<TravelOfferComponent
								img={travel.img}
								stars={travel.stars}
								country={travel.country}
								city={travel.city}
								dateStart={travel.dateStart}
								dateEnd={travel.dateEnd}
								airPort={travel.airPort}
								price={travel.price}
								hotel={travel.hotel}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default SearchedTravels;
