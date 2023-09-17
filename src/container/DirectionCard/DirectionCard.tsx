import { useContext, useState, useEffect } from 'react';
import ReactStars from 'react-rating-star-with-type';
import { TiTick } from 'react-icons/ti';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { UserContext } from '../../context/UserContext';
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

	const [liked, setLiked] = useState(false);

	return (
		<div className='direction-card'>
			<div className='container'>
				{liked ? (
					<AiFillHeart
						className='icon-heart'
						size={35}
						color='red'
						onClick={() => {
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
						{country}/{city}
					</h5>
					<p>
						<span>
							<TiTick size={15} />
						</span>
						Lorem ipsum dolor sit amet.
					</p>
					<p>
						<span>
							<TiTick size={15} />
						</span>
						Lorem ipsum dolor sit amet.
					</p>
					<p>
						<span>
							<TiTick size={15} />
						</span>
						Lorem ipsum dolor sit amet.
					</p>
					<p className='date'>
						{dateStart} / {dateEnd}
					</p>
					<div className='price-box'>
						<p className='price'>{price}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default DirectionCard;
