import { useEffect, useState, useContext } from 'react';
import './TravelOfferComponent.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BsAirplane } from 'react-icons/bs';
import { GiMeal } from 'react-icons/gi';
import ReactStars from 'react-rating-star-with-type';
import { OfferModal } from '../../../container/OfferModal';
import { UserContext } from '../../../context/UserContext';
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
	const userContext = useContext(UserContext);
	const [liked, setLiked] = useState(false);

	const firstLetter = country.charAt(0).toUpperCase();
	const restOfLetters = country.slice(1);
	const formatedTravelCountry = firstLetter + restOfLetters;

	const [showOfferModal, setShowOfferModal] = useState<boolean>(false);

	useEffect(() => {
		if (userContext && userContext.user && userContext.user.bestTravels) {
			const userBestTravels = userContext.user.bestTravels;
			const hasLiked = userBestTravels.includes(hotel);
			setLiked(hasLiked);
		}
	}, [liked]);
	const handlAddBestTravel = () => {
		userContext?.setUser((prevUser) => {
			if (!prevUser) return null;
			const updatedBestTravels = Array.isArray(prevUser.bestTravels)
				? [...prevUser.bestTravels, hotel]
				: [hotel];
			const updatedUser = {
				...prevUser,
				bestTravels: updatedBestTravels,
			};
			localStorage.setItem('user', JSON.stringify(updatedUser));
			return updatedUser;
		});
	};
	const handlRemoveBestTravel = () => {
		userContext?.setUser((prevUser) => {
			if (!prevUser) return null;

			if (Array.isArray(prevUser.bestTravels)) {
				const updatedBestTravels = prevUser.bestTravels.filter(
					(travel) => travel !== hotel
				);
				const updatedUser = {
					...prevUser,
					bestTravels: updatedBestTravels,
				};
				localStorage.setItem('user', JSON.stringify(updatedUser));
				return updatedUser;
			}
		});
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
								handlRemoveBestTravel();
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
								handlAddBestTravel();
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
