import { useState } from 'react';
import './TravelOfferComponent.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BsAirplane } from 'react-icons/bs';
import { GiMeal } from 'react-icons/gi';
import ReactStars from 'react-rating-star-with-type';
import { OfferModal } from '../../../container/OfferModal';
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
	lastMinute: boolean;
	userLogged: boolean | undefined;
	handleShowSnackBar: (info: string) => void;
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
	lastMinute,
	userLogged,
	handleShowSnackBar,
}: PropsTravelType) {
	const [liked, setLiked] = useState(false);

	const firstLetter = country.charAt(0).toUpperCase();
	const restOfLetters = country.slice(1);
	const formatedTravelCountry = firstLetter + restOfLetters;
	const [bestTravels, setBestTravel] = useState<{}[]>([]);
	const [showOfferModal, setShowOfferModal] = useState<boolean>(false);
	const handleAddLikedTravel = () => {
		if (liked) {
			setBestTravel([...bestTravels, { likedTravel: { hotel } }]);
		}
	};

	return (
		<div className='travel-offer'>
			{showOfferModal && <OfferModal closeModal={setShowOfferModal} />}
			<div className='travel-offer__img-box'>
				<img src={img} alt='' />
				{liked ? (
					<AiFillHeart
						className='icon-heart'
						size={35}
						color='red'
						onClick={() => {
							if (userLogged) {
								setLiked(!liked);
								handleShowSnackBar('You DisLiked!');
							} else {
								handleShowSnackBar('You have to sign in!');
							}
						}}
					/>
				) : (
					<AiOutlineHeart
						className='icon-heart'
						size={35}
						onClick={() => {
							if (userLogged) {
								setLiked(!liked);
								handleShowSnackBar('You Liked!');
								handleAddLikedTravel();
							} else {
								handleShowSnackBar('You have to sign in!');
							}
						}}
					/>
				)}
				{lastMinute && (
					<div className='last-minute-label'>
						<p>Last Minute</p>
					</div>
				)}
				O
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
				<p className='price'>{price}$</p>
				<button
					className='show-offer-btn btn'
					onClick={() => {
						setShowOfferModal(!showOfferModal);
					}}
				>
					See offer
				</button>
			</div>
		</div>
	);
}
export default TravelOfferComponent;
