import { useContext } from 'react';
import './SearchedTravels.scss';
import { FilteredTravelsContext } from '../../context/FilteredTravelsContext';
function SearchedTravels() {
	const { filteredTravels } = useContext(FilteredTravelsContext);
	console.log(filteredTravels);
	return <div></div>;
}
export default SearchedTravels;
