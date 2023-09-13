import './TravelOfferComponent.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BsAirplane } from 'react-icons/bs';
import { GiMeal } from 'react-icons/gi';
import ReactStars from 'react-rating-star-with-type';
type PropsTravelType = {
	img: string;
	stars: number;
	country: string;
	city: string;
	dateStart: string;
	dateEnd: string;
	airPort: string;
	price: number;
	hotel: string;
};

function TravelOfferComponent({
	img,
	stars,
	country,
	city,
	dateStart,
	dateEnd,
	airPort,
	price,
	hotel,
}: PropsTravelType) {
	
	const firstLetter = country.charAt(0).toUpperCase();
	const restOfLetters = country.slice(1);
	const formatedTravelCountry = firstLetter + restOfLetters;
	return (
		<div className='travel-offer'>
			<div className='travel-offer__img-box'>
				<img src={img} alt='' />
				<AiOutlineHeart className='heart-icon' size={40} />
			</div>
			<div className='travel-offer__travel-content'>
				<h5>{hotel}</h5>
				<ReactStars count={stars} size={24} inactiveColor='gold' />
				<p>
					{formatedTravelCountry} / {city}
				</p>

				<div className='date-box'>
					<SlCalender size={20} />
					<span>
						{dateStart} / {dateEnd}
					</span>
				</div>
				<div className='airport-box'>
					<BsAirplane size={20} />
					<span>{airPort}</span>
				</div>
				<div className='meal-options-box'>
					<GiMeal size={20} />
					<span>All Inclusive</span>
				</div>
			</div>
			<div className='travel-offer__asside-info'>
				<p className='price'>
					{price}$ <span>one person</span>
				</p>
				<button className='show-offer-btn'>See offer</button>
			</div>
		</div>
	);
}
export default TravelOfferComponent;
