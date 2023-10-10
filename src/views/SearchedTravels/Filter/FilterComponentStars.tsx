import { useState, useContext } from 'react';
import { FilteredTravelsContext } from '../../../context/FilteredTravelsContext';
import './FilterComponentStars.scss';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';



type PropsFiltersType = {
	choices: number[];
	title: string;
};

function FilterComponentStars({ choices, title }: PropsFiltersType) {
	const { setSearchFilters } = useContext(
		FilteredTravelsContext
	);

	
	const [showChoices, setShowChoices] = useState<boolean>(true);
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
					onClick={() => setShowChoices(!showChoices)}
				/>
			</div>
			{showChoices && (
				<div className='choices'>
					{choices.map((choice) => {
						return (
							<div className='choices__box'>
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
export default FilterComponentStars;
