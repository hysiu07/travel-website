import { useState, useContext } from 'react';
import { FilteredTravelsContext } from '../../../context/FilteredTravelsContext';
import './FilterComponentDinerOptions.scss';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

type PropsFiltersType = {
	choices: string[];
	title: string;
};

function FilterComponentAirPort({ choices, title }: PropsFiltersType) {
	const { setSearchFilters } = useContext(FilteredTravelsContext);

	const [showChoices, setShowChoices] = useState<boolean>(true);

	const handleAddFilter = (choice: string) => {
		setSearchFilters((prevValue) => {
			return {
				...prevValue,
				filters: {
					...prevValue.filters,
					airPort: choice,
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
									name='airPort'
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
export default FilterComponentAirPort;
