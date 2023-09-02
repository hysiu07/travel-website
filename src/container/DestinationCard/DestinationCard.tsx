import './DestinationCard.scss';
import { Link } from 'react-router-dom';

type DestinationProps = {
	country: string;
	img: string;
};
function DestinationCard({ country, img }: DestinationProps) {
	return (
		<div className='card'>
			<Link to={`/destination/${country}`} onClick={() => {}}>
				<img src={img} className='card-img' />
				<h4 className='card-country'>{country}</h4>
			</Link>
		</div>
	);
}
export default DestinationCard;
