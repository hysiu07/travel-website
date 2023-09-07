import { useState, useRef, useEffect } from 'react';
import './SearchPanel.scss';
import { ThreeCircles } from 'react-loader-spinner';
import { tomorrowDate } from '../Hooks/tomorrowDate';
type FilterType = {
	country?: string;
	date: Date;
	price: number;
};
function SearchPanel() {
	const search: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		console.log('dziala');
	};
	const inputRef = useRef<HTMLInputElement>(null);
	const inputData = useRef<HTMLInputElement>(null);
	console.log(inputRef.current?.value);
	console.log(inputRef.current?.value);
	const [showLoader, setShowLoader] = useState<boolean>(false);
	// const date = new Date(inputData.current?.value)
	console.log(tomorrowDate());

	const [filterTours, setFilterTours] = useState<FilterType>({
		country: inputRef.current?.value,
		date: new Date(tomorrowDate()),
		price: 1000,
	});
	const info: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const target = e.target;
		const name = target.name;
		setFilterTours({ ...filterTours, [name]: target.value });
	};
	useEffect(() => {
		console.log(filterTours);
	}, []);
	return (
		<div>
			<form
				action='Search Your Destination'
				className='search-panel'
				onSubmit={search}
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
					/>
				</div>
				<div className='search-panel__box-item'>
					<label htmlFor='select your date' className='search-panel__label'>
						Select your date:
					</label>
					<input
						type='date'
						name='date'
						className='search-panel__input'
						defaultValue={tomorrowDate()}
						ref={inputData}
						onChange={() => {
							console.log(inputData.current?.value);
							console.log(new Date());
						}}
					/>
				</div>
				<div className='search-panel__box-item'>
					<label htmlFor='price range' className='search-panel__label'>
						Max price:
						<span>max 5000$</span>
					</label>
					<input
						type='range'
						name='price'
						className='search-panel__input range'
						ref={inputRef}
						max={5000}
						min={1000}
						onChange={() => {
							console.log(inputRef.current?.value);
						}}
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
