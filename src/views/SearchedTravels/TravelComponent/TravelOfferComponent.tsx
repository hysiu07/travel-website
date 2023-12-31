import { useEffect, useState } from 'react';
import './TravelOfferComponent.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BsAirplane } from 'react-icons/bs';
import { GiMeal } from 'react-icons/gi';
import ReactStars from 'react-rating-star-with-type';
import { OfferModal } from '../../../container/OfferModal';

import { connect } from 'react-redux';
import { addBestTravels, removeBestTravel } from '../../../redux/reduxUserInfo';

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
	dinerOptions: string;
	userLogged: boolean | undefined;
	handleShowSnackBar: (info: string) => void;
	setHiddenNav?: React.Dispatch<React.SetStateAction<boolean>>;
	infoUser: any;
	setBestTravels: any;
	removeBestTravel: any;
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
	setHiddenNav,
	dinerOptions,
	infoUser,
	setBestTravels,
	removeBestTravel,
}: PropsTravelType) {
	const [liked, setLiked] = useState(false);

	const firstLetter = country.charAt(0).toUpperCase();
	const restOfLetters = country.slice(1);
	const formatedTravelCountry = firstLetter + restOfLetters;

	const [showOfferModal, setShowOfferModal] = useState<boolean>(false);

	useEffect(() => {
		if (infoUser.bestTravels) {
			const userBestTravels = infoUser.bestTravels;
			const hasLiked = userBestTravels.includes(hotel);
			setLiked(hasLiked);
		}
	}, [liked, infoUser.bestTravels]);

	return (
		<div className='travel-offer'>
			{showOfferModal && (
				<OfferModal
					closeModal={setShowOfferModal}
					img={img}
					hotel={hotel}
					dateStart={dateStart}
					dateEnd={dateEnd}
					airPort={airPort}
					price={price}
					country={country}
					userLogged={userLogged}
					setHiddenNav={setHiddenNav}
				/>
			)}
			<div className='travel-offer__img-box'>
				<img src={img} alt='travel picture' />
				{liked ? (
					<AiFillHeart
						className='icon-heart'
						size={35}
						color='red'
						onClick={() => {
							if (userLogged) {
								setLiked(!liked);
								handleShowSnackBar('You DisLiked!');
								removeBestTravel(hotel);
							} else {
								handleShowSnackBar('You have to SignIn!');
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
								setBestTravels(hotel);
							} else {
								handleShowSnackBar('You have to SignIn!');
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
					<span>{dinerOptions}</span>
				</div>
			</div>
			<div className='travel-offer__asside-info'>
				<p className='price'>{price}$</p>
				<button
					className='show-offer-btn'
					onClick={() => {
						if (userLogged) {
							setShowOfferModal(!showOfferModal);
							if (setHiddenNav) {
								setHiddenNav(true);
							}
						} else {
							handleShowSnackBar('You have to SignIn!');
						}
					}}
				>
					See offer
				</button>
			</div>
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		infoUser: state.userInfo.user,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		setBestTravels: (hotelName: any) => {
			dispatch(addBestTravels(hotelName));
		},
		removeBestTravel: (hotelName: string) => {
			dispatch(removeBestTravel(hotelName));
		},
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TravelOfferComponent);
