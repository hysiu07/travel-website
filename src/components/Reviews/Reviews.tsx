import { ReviewCard } from '../../container/ReviewCard';
import dataReviews from '../../data/reviews.json';
import './Reviews.scss';

function Reviews() {
	return (
		<div className='reviews' id='reviews'>
			<div className='reviews__container'>
				{dataReviews.map((review) => {
					return (
						<ReviewCard
							key={review.id}
							id={review.id}
							review={review.review}
							rating={review.rating}
							img={review.img}
							name={review.name}
						/>
					);
				})}
			</div>
		</div>
	);
}
export default Reviews;
