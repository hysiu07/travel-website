import { useSearchParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Dispatch, SetStateAction } from 'react';
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

function FilterComponentAirPort({
	choices,
	title,
	showChoices,
	setShowChoices,
}: PropsFiltersType) {
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
								filterComponentAirPort: !showChoices,
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
									name='airPort'
									onChange={() => {
										addSearchParams('airPort', choice);
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
