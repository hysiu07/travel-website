import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { OfferModal } from '../OfferModal';
import ReactStars from 'react-rating-star-with-type';
import { TiTick } from 'react-icons/ti';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import './DirectionCard.scss';

type DirectionCardPropsType = {
	id?: number;
	img: string;
	hotel: string;
	stars: number;
	country: string | undefined;
	city: string;
	price: number;
	dateStart: string;
	dateEnd: string;
	lastMinute: boolean;
};

function DirectionCard({
	img,
	hotel,
	stars,
	country,
	city,
	price,
	dateStart,
	dateEnd,
	lastMinute,
}: DirectionCardPropsType) {
	const userContext = useContext(UserContext);
	const userLogged: boolean | undefined = userContext?.user?.logIn;

	const firstLetter = country?.charAt(0).toUpperCase() || '';
	const restOfLetters = country?.slice(1);
	const formatedTravelCountry = firstLetter + restOfLetters;

	const [liked, setLiked] = useState(false);
	const [showOfferModal, setShowOfferModal] = useState<boolean>(false);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(userContext?.user));
		if (userContext && userContext.user && userContext.user.bestTravels) {
			const userBestTravels = userContext.user.bestTravels ;
			const hasLiked = userBestTravels.includes(hotel);
			setLiked(hasLiked);
		}
	}, [userContext?.user, hotel]);

	const handlAddBestTravel = () => {
		userContext?.setUser((prevUser) => {
			if (!prevUser) return null;
			const updatedBestTravels = Array.isArray(prevUser.bestTravels)
				? [...prevUser.bestTravels, hotel]
				: [hotel];
			return {
				...prevUser,
				bestTravels: updatedBestTravels,
			};
		});
	};
	const handlRemoveBestTravel = () => {
		userContext?.setUser((prevUser) => {
			if (!prevUser) return null;

			if (Array.isArray(prevUser.bestTravels)) {
				const updatedBestTravels = prevUser.bestTravels.filter(
					(travel) => travel !== hotel
				);
				return {
					...prevUser,
					bestTravels: updatedBestTravels,
				};
			}
		});
	};

	return (
		<div className='direction-card'>
			{showOfferModal && <OfferModal closeModal={setShowOfferModal} />}
			<div
				className='container'
				onClick={() => {
					setShowOfferModal(true);
				}}
			>
				{liked ? (
					<AiFillHeart
						className='icon-heart'
						size={35}
						color='red'
						onClick={() => {
							handlRemoveBestTravel();
							if (userLogged) {
								setLiked(!liked);
							} else {
								console.log('niezalowany, zaloguj sie');
							}
						}}
					/>
				) : (
					<AiOutlineHeart
						className='icon-heart'
						size={35}
						onClick={() => {
							handlAddBestTravel();
							if (userLogged) {
								setLiked(!liked);
							} else {
								console.log('niezalowany, zaloguj sie');
							}
						}}
					/>
				)}

				{lastMinute && (
					<div className='offer-label'>
						<p>Last Minute!</p>
					</div>
				)}
				<img src={img} alt='direction-img' className='img' />
				<div className='text-content'>
					<h4 className='title'>{hotel}</h4>
					<ReactStars count={stars} size={24} inactiveColor='gold' />
					<h5 className='city'>
						{formatedTravelCountry}/{city}
					</h5>
					<p>
						<span>
							<TiTick size={15} />
						</span>
						<span>Lorem ipsum dolor sit amet.</span>
					</p>
					<p>
						<span>
							<TiTick size={15} />
						</span>
						<span>Lorem ipsum dolor sit amet.</span>
					</p>
					<p>
						<span>
							<TiTick size={15} />
						</span>
						<span>Lorem ipsum dolor sit amet.</span>
					</p>
					<p className='date'>
						{dateStart} / {dateEnd}
					</p>
					<div className='price-box btn'>
						<p className='price'>{price}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default DirectionCard;
