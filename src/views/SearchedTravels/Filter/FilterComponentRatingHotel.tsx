import { useContext } from 'react';
import { Dispatch, SetStateAction } from 'react';
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
	const { setSearchFilters, searchFilters } = useContext(
		FilteredTravelsContext
	);
	console.log(searchFilters);
	const navigate = useNavigate();
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
										setSearchFilters((prevValue) => {
											return {
												...prevValue,
												filters: {
													...prevValue.filters,
													stars: choice,
												},
											};
										});
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
