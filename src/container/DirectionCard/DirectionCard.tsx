import ReactStars from 'react-rating-star-with-type';
import { TiTick } from 'react-icons/ti';
import { AiOutlineHeart } from 'react-icons/ai';
import './DirectionCard.scss';

type DirectionCardPropsType = {
	id?: number;
	img: string;
	hotel: string;
	stars: number;
	country: string | undefined;
	city: string;
	price: number;
	date: string;
	lastMinute: boolean;
};

function DirectionCard({
	img,
	hotel,
	stars,
	country,
	city,
	price,
	date,
	lastMinute,
}: DirectionCardPropsType) {
	return (
		<div className='direction-card'>
			<div className='container'>
				<AiOutlineHeart className='icon-heart' size={35} />
				{lastMinute && (
					<div className='offer-label'>
						<p>Last Minute!</p>
					</div>
				)}
				<img src={img} alt='' className='img' />
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
					<p className='date'>{date}</p>
					<div className='price-box'>
						<p className='price'>{price}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default DirectionCard;
