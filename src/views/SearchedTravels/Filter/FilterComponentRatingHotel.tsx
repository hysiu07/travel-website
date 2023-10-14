import { useContext } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FilteredTravelsContext } from '../../../context/FilteredTravelsContext';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './FilterComponent.scss';

type PropsFiltersType = {
	choices: number[];
	title: string;
	showChoices: boolean;
	setShowChoices: Dispatch<
		SetStateAction<{
			filterComponentAirPort: boolean;
			filterComponentDinerOptions: boolean;
			filterComponentLastMinute: boolean;
			filterComponentStars: boolean;
		}>
	>;
};

function FilterComponentRatingHotel({
	choices,
	title,
	showChoices,
	setShowChoices,
}: PropsFiltersType) {
	const { setSearchFilters} = useContext(
		FilteredTravelsContext
	);
	const [searchParams, setSearchParams] = useSearchParams();

	const addSearchParams = (key: string, value: string) => {
		searchParams.set(key, value);
		setSearchParams(searchParams);
	};
	return (
		<div className='filter-component'>
			<div className='heading-box'>
				<h5 className='title'>{title}</h5>
				<MdOutlineKeyboardArrowDown
					className='arrow-icon'
					size={35}
					style={
						showChoices
							? { transform: 'none' }
							: { transform: 'rotate(180deg)' }
					}
					onClick={() =>
						setShowChoices((prevValue) => {
							return {
								...prevValue,
								filterComponentStars: !showChoices,
							};
						})
					}
				/>
			</div>
			{showChoices && (
				<div className='choices'>
					{choices.map((choice, index) => {
						return (
							<div className='choices__box' key={index}>
								<input
									type='radio'
									name='stars'
									onChange={() => {
										// setSearchFilters((prevValue) => {
										// 	return {
										// 		...prevValue,
										// 		filters: {
										// 			...prevValue.filters,
										// 			stars: choice,
										// 		},
										// 	};
										// });
										addSearchParams('hotelRating', choice.toString());
									}}
									value={choice}
								/>
								<label>From {choice} stars</label>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
export default FilterComponentRatingHotel;
