import './ReviewCard.scss';
import ReactStars from 'react-rating-star-with-type';
type ReviewsType = {
	id?: number;
	name: string;
	review: string;
	rating: number;
	img: string;
};

function ReviewCard({ img, name, review, rating }: ReviewsType) {
	return (
		<div className='card-review' >
			<div
				className='img'
				style={{
					backgroundImage: `url('${img}')`,
				}}
			></div>
			<span className='name'>{name}</span>
			<span className='rating'>
				<ReactStars count={rating} size={24} inactiveColor='gold' />
			</span>
			<p className='review'>{review}</p>
		</div>
	);
}
export default ReviewCard;
