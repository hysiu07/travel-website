import {  useContext } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { FilteredTravelsContext } from '../../../context/FilteredTravelsContext';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './FilterComponent.scss';

type PropsFiltersType = {
	choices: string[];
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

function FilterComponentLastMinute({
	choices,
	title,
	showChoices,
	setShowChoices,
}: PropsFiltersType) {
	const { setSearchFilters } = useContext(FilteredTravelsContext);

	const handleAddFilter = (choice: string) => {
		let lastMinuteValue: boolean | undefined;
		if (choice === 'Yes') {
			lastMinuteValue = true;
		} else if (choice === 'No') {
			lastMinuteValue = false;
		} else if (choice === 'All') {
			lastMinuteValue = undefined;
		}

		setSearchFilters((prevValue) => {
			return {
				...prevValue,
				filters: {
					...prevValue.filters,
					lastMinute: lastMinuteValue,
				},
			};
		});
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
								filterComponentLastMinute: !showChoices,
							};
						})
					}
				/>
			</div>
			{showChoices && (
				<div className='choices'>
					{choices.map((choice) => {
						return (
							<div className='choices__box'>
								<input
									type='radio'
									name='lastMinute'
									onChange={() => {
										handleAddFilter(choice);
									}}
									value={choice}
								/>
								<label>{choice} </label>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
export default FilterComponentLastMinute;
