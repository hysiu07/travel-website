import { useContext } from 'react';
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

function FilterComponentDinerOptions({
	choices,
	title,
	showChoices,
	setShowChoices,
}: PropsFiltersType) {
	const { setSearchFilters } = useContext(FilteredTravelsContext);

	const handleAddFilter = (choice: string) => {
		setSearchFilters((prevValue) => {
			return {
				...prevValue,
				filters: {
					...prevValue.filters,
					diningOptions: choice,
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
								filterComponentDinerOptions: !showChoices,
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
									name='diningOption'
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
export default FilterComponentDinerOptions;
