import { useContext, useEffect } from 'react';
import './SearchedTravels.scss';
import { FilteredTravelsContext } from '../../context/FilteredTravelsContext';
import { Nav } from '../../components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import ReactStars from 'react-rating-star-with-type';
function SearchedTravels() {
	const { filteredTravels, setFilteredTravels } = useContext(
		FilteredTravelsContext
	);
	useEffect(() => {
		const travelsLocalStorage = localStorage.getItem('travels');
		if (typeof travelsLocalStorage === 'string') {
			const travels = JSON.parse(travelsLocalStorage);
			setFilteredTravels(travels);
		}
	}, []);

	return (
		<div className='searched-travels'>
			<Nav />

			<div className='searched-travels__container'>
				<div className='searched-travels__filter-panel'>
					<div className='filter-component'>
						<div className='heading-box'>
							<h5 className='title'>Wyzywienie</h5>
							<MdOutlineKeyboardArrowDown className='arrow-icon' size={35} />
						</div>
						<div className='solutions'>
							<div className='solutions__box'>
								<input type='checkbox' name='food' />
								<label>All Inclusive</label>
							</div>
							<div className='solutions__box'>
								<input type='checkbox' name='food' />
								<label>All Inclusive</label>
							</div>
							<div className='solutions__box'>
								<input type='checkbox' name='food' />
								<label>All Inclusive</label>
							</div>
							<div className='solutions__box'>
								<input type='checkbox' name='food' />
								<label>All Inclusive</label>
							</div>
						</div>
					</div>
				</div>
				<div className='searched-travels__filtered-travels'>
					<h2>We find for you {filteredTravels.length} offers</h2>
					{filteredTravels.map((travel) => {
						const country = travel.country
						return (
							<div className='travel-offer'>
								<div className='travel-offer__img-box'>
									<img src={travel.img} alt='' />
									<AiOutlineHeart className='heart-icon' size={40} />
								</div>
								<div className='travel-offer__travel-content'>
									<h5>{travel.hotel}</h5>
									<ReactStars
										count={travel.stars}
										size={24}
										inactiveColor='gold'
									/>
									<p>
										{travel.country} / {travel.city}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default SearchedTravels;
