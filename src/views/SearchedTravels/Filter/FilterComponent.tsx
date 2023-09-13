import { useState } from 'react';

import './FilterComponent.scss';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

type PropsFiltersType = {
	choices: string[];
	title: string;
};
function FilterComponent({ choices, title }: PropsFiltersType) {
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
								<input type='checkbox' name='food' />
								<label>{choice}</label>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
export default FilterComponent;
