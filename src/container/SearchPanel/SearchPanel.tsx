import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { tomorrowDate } from '../Hooks/tomorrowDate';
import './SearchPanel.scss';

type SearchType = {
	country: string;
	dateStart: string | Date;
	price: number;
};
function SearchPanel() {
	const navigate = useNavigate();

	const [showLoader, setShowLoader] = useState<boolean>(false);

	const changePath = () => {
		navigate(
			`/travel-website/searchedTravels/${searchTours.country}/${searchTours.dateStart}/${searchTours.price}`
		);
	};

	// search yours travels
	const handleSearch: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		setShowLoader(true);

		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
				changePath();
			}, 3000);
		});
	};

	// default search travel value
	const [searchTours, setSearchTours] = useState<SearchType>({
		country: 'All',
		dateStart: tomorrowDate(),
		price: 5000,
	});
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
					className='search-panel__button'
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
