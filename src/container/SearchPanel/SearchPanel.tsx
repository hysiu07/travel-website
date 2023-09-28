import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPanel.scss';
import { ThreeCircles } from 'react-loader-spinner';
import { tomorrowDate } from '../Hooks/tomorrowDate';
import { travels } from '../../data/travels';

import { FilteredTravelsContext } from '../../context/FilteredTravelsContext';

type SearchType = {
	country: string;
	dateStart: string | Date;
	price: number;
};
function SearchPanel() {
	const { setFilteredTravels } = useContext(FilteredTravelsContext);

	const navigate = useNavigate();

	const changePath = () => {
		navigate('/travel-website/searchedTravels');
	};

	// search yours travels
	const handleSearch: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		setShowLoader(true);

		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
				filterTravel();
			}, 3000);
		});
		changePath();
	};

	const [showLoader, setShowLoader] = useState<boolean>(false);

	// default search travel value
	const [searchTours, setSearchTours] = useState<SearchType>({
		country: '',
		dateStart: tomorrowDate(),
		price: 5000,
	});

	// handle to find yours travel
	const handleChangeSearchValues: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => {
		const target = e.target;
		const name = target.name;

		setSearchTours({
			...searchTours,
			[name]: target.value.toLocaleLowerCase(),
		});
	};
	// function filter your travel
	const filterTravel = () => {
		const filteredTravels2 = travels.filter((travel) => {
			const selectedDate = new Date(travel.dateStart);
			const travelStartDate = new Date(searchTours.dateStart);
			const countryMatch = travel.country.includes(searchTours.country);
			const priceMatch = searchTours.price >= travel.price;
			const dateMatch = selectedDate >= travelStartDate;
			return countryMatch && dateMatch && priceMatch;
		});

		setFilteredTravels(filteredTravels2);
		localStorage.setItem('travels', JSON.stringify(filteredTravels2));
	};

	return (
		<div>
			<form
				action='Search Your Destination'
				className='search-panel'
				onSubmit={handleSearch}
			>
				<div className='search-panel__box-item'>
					<label htmlFor='search destination' className='search-panel__label'>
						Search your destination:
					</label>
					<input
						type='text'
						name='country'
						className='search-panel__input'
						placeholder='Enter country'
						onChange={handleChangeSearchValues}
					/>
				</div>
				<div className='search-panel__box-item'>
					<label htmlFor='select your date' className='search-panel__label'>
						Select your date:
					</label>
					<input
						type='date'
						name='dateStart'
						className='search-panel__input'
						onChange={handleChangeSearchValues}
						defaultValue={tomorrowDate()}
					/>
				</div>
				<div className='search-panel__box-item'>
					<div className='search-panel__label-container'>
						<label htmlFor='price range' className='search-panel__label'>
							Price:
						</label>
						<span>max {searchTours.price}$</span>
					</div>
					<input
						type='range'
						name='price'
						className='search-panel__input range'
						max={5000}
						min={1000}
						defaultValue={5000}
						onChange={handleChangeSearchValues}
					/>
				</div>
				<button
					className='search-panel__button btn'
					type='submit'
					onClick={() => {
						setShowLoader(!showLoader);
					}}
				>
					{showLoader ? (
						<ThreeCircles
							height='30'
							width='30'
							color='#398AB9'
							wrapperStyle={{}}
							visible={true}
							ariaLabel='three-circles-rotating'
						/>
					) : (
						'Search!'
					)}
				</button>
			</form>
		</div>
	);
}
export default SearchPanel;
