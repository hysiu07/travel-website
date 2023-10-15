import { Link } from 'react-router-dom';
import './DestinationCard.scss';

type DestinationProps = {
	country: string;
	img: string;
};
function DestinationCard({ country, img }: DestinationProps) {
	return (
		<div className='card'>
			<Link to={`/destination/${country}`}>
				<img src={img} className='card-destination-img' />
				<h4 className='card-country'>{country}</h4>
			</Link>
		</div>
	);
}
export default DestinationCard;
