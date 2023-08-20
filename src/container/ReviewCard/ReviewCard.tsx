import './ReviewCard.scss';

type ReviewsType = {
	id: number;
	name: string;
	review: string;
	rating: number;
	img: string;
};

function ReviewCard({ id, img, name, review, rating }: ReviewsType) {
	return (
		<div className='reviews__card' key={id}>
			<div
				className='img'
				style={{
					backgroundImage: `url('${img}')`,
				}}
			></div>
			<span className='name'>{name}</span>
			<span className='rating'>{rating}</span>
			<p className='review'>{review}</p>
		</div>
	);
}
export default ReviewCard;
