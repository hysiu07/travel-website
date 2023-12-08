import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FilteredTravelsContext } from '../../context/FilteredTravelsContext';
import { travels } from '../../data/travels';
import ReactStars from 'react-rating-star-with-type';
import { TiTick } from 'react-icons/ti';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

import { connect } from 'react-redux';
import { addBestTravels, removeBestTravel } from '../../redux/reduxUserInfo';

import './DirectionCard.scss';

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
	infoUser: any;
	setBestTravels: any;
	removeTravel: any;
	handleShowSnackBar: (info: string) => void;
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
	infoUser,
	setBestTravels,
	removeTravel,
	handleShowSnackBar,
}: DirectionCardPropsType) {
	const { setFilteredTravels } = useContext(FilteredTravelsContext);

	const userLogged: boolean = infoUser.isLoggIn;

	const firstLetter = country?.charAt(0).toUpperCase() || '';
	const restOfLetters = country?.slice(1);
	const formatedTravelCountry = firstLetter + restOfLetters;

	const [liked, setLiked] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (infoUser.bestTravels) {
			const userBestTravels = infoUser.bestTravels;
			const hasLiked = userBestTravels.includes(hotel);
			setLiked(hasLiked);
		}
	}, [liked]);
	const changePath = () => {
		navigate(
			'/travel-website/searchedTravels/All/2023-10-16/5000?lastMinute=Yes'
		);
	};

	const filterTravel = () => {
		const filteredTravels = travels.filter((travel) => {
			const directionLastMinute = travel.lastMinute === true;
			return directionLastMinute;
		});
		setFilteredTravels(filteredTravels);
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
							removeTravel(hotel);
							if (userLogged) {
								setLiked(!liked);
								handleShowSnackBar('You DisLiked');
							}
						}}
					/>
				) : (
					<AiOutlineHeart
						className='icon-heart'
						size={35}
						onClick={(e) => {
							e.stopPropagation();
							setBestTravels(hotel);

							if (userLogged) {
								setLiked(!liked);
								handleShowSnackBar('You Liked');
							} else {
								handleShowSnackBar('You have to SignIn');
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
		infoUser: state.userInfo.user,
	};
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		setBestTravels: (hotelName: any) => {
			dispatch(addBestTravels(hotelName));
		},
		removeTravel: (hotelName: string) => {
			dispatch(removeBestTravel(hotelName));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(DirectionCard);
