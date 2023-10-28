import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { FilteredTravelsContext } from '../../context/FilteredTravelsContext';
import { travels } from '../../data/travels';
import ReactStars from 'react-rating-star-with-type';
import { TiTick } from 'react-icons/ti';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import './DirectionCard.scss';

import { connect } from 'react-redux';
import { addBestTravels,removeBestTravel } from '../../redux/reduxUserInfo';

type DirectionCardPropsType = {
	id?: number;
	img: string;
	hotel: string;
	stars: number;
	country: string;
	city: string;
	price: number;
	dateStart: string;
	dateEnd: string;
	lastMinute: boolean;
	airPort: string;
	bestTravels: any;
	setBestTravels: any;
	removeTravel: any
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
	bestTravels,
	setBestTravels,
	removeTravel
}: DirectionCardPropsType) {

	console.log(bestTravels);
	const { setFilteredTravels } = useContext(FilteredTravelsContext);
	const userContext = useContext(UserContext);
	const userLogged: boolean | undefined = userContext?.user?.logIn;

	const firstLetter = country?.charAt(0).toUpperCase() || '';
	const restOfLetters = country?.slice(1);
	const formatedTravelCountry = firstLetter + restOfLetters;

	const [liked, setLiked] = useState(false);

	const navigate = useNavigate();

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
	const changePath = () => {
		navigate(
			'/travel-website/searchedTravels/All/2023-10-16/5000?lastMinute=Yes'
		);
	};

	const filterTravel = () => {
		const filteredTravels2 = travels.filter((travel) => {
			const directionLastMinute = travel.lastMinute === true;
			return directionLastMinute;
		});
		setFilteredTravels(filteredTravels2);
		localStorage.setItem('travels', JSON.stringify(filteredTravels2));
		changePath();
	};

	return (
		<div className='direction-card'>
			<div className='container' onClick={filterTravel}>
				{liked ? (
					<AiFillHeart
						className='icon-heart'
						size={35}
						color='red'
						onClick={(e) => {
							e.stopPropagation();
							handlRemoveBestTravel();
							removeTravel(hotel)
							if (userLogged) {
								setLiked(!liked);
							}
						}}
					/>
				) : (
					<AiOutlineHeart
						className='icon-heart'
						size={35}
						onClick={(e) => {
							e.stopPropagation();
							handlAddBestTravel();
							setBestTravels(hotel);

							if (userLogged) {
								setLiked(!liked);
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
						<p className='price'>{price} $</p>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state: any) => {
	return {
		bestTravels: state.userInfo.user.bestTravels,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		setBestTravels: (hotelName: any) => {
			dispatch(addBestTravels(hotelName));
		},
		removeTravel: (hotelName:string) => {
			dispatch(removeBestTravel(hotelName))
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(DirectionCard);
