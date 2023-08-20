
import './Reviews.scss';
import dataReviews from '../../data/reviews.json';
import { ReviewCard } from '../../container/ReviewCard';

function Reviews() {
	return (
		<div className='reviews'>
			<div className='reviews__container'>
				{dataReviews.map((review) => {
					return (
						<ReviewCard
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
