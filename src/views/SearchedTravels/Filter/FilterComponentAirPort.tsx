import { useContext } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FilteredTravelsContext } from '../../../context/FilteredTravelsContext';
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
	const { setSearchFilters } = useContext(FilteredTravelsContext);
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	// console.log(params);
	// const currentURL = window.location.href;
	// console.log(currentURL);
	const navigate = useNavigate();
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
										handleAddFilter(choice);
										// navigate(
										// 	`/travel-website/searchedTravels/${params.country}/${
										// 		params.dateStart
										// 	}/${params.price}${
										// 		params.amountStars ? '/' + params.amountStars : ''
										// 	}/${choice}`
										// );
										// setSearchParams((prevState) => {
										// 	const newState = {
										// 		...prevState,
										// 		stars: choice.toString(),
										// 	};
										// 	return newState;
										// });
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
