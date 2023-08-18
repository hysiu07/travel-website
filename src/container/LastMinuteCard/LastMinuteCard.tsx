import ReactStars from 'react-rating-star-with-type';
import { TiTick } from 'react-icons/ti';
import { AiOutlineHeart } from 'react-icons/ai';
import './LastminuteCard.scss'

type LastMinuteCardPropsType = {
	id?: number;
	img: string;
	hotel: string;
	stars: number;
	country: string | undefined;
	city: string;
	price: number;
	date: string;
};

function LastMinuteCard({
	img,
	hotel,
	stars,
	country,
	city,
	price,
	date,
}: LastMinuteCardPropsType) {

	return (
		<div className='last-minute__card'>
			<div className='container'>
				<AiOutlineHeart className='icon-heart' size={35} />
				<div className='offer-label'>
					<p>Last Minute!</p>
				</div>
				<img src={img} alt='' className='img' />
				<div className='text-content'>
					<h3 className='title'>{hotel}</h3>
					<ReactStars count={stars} size={24} inactiveColor='gold' />
					<h4 className='city'>
						{country}/d{city}
					</h4>
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
export default LastMinuteCard;
