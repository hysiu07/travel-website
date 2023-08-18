import './DestinationCard.scss';

import { tomorrowDate } from '../Hooks/tomorrowDate';

type DestinationProps = {
	text: string;
	country: string;
	img: string;
};
function DestinationCard({ text, country, img }: DestinationProps) {
	console.log(tomorrowDate());

	return (
		<div className='card'>
			<img src={img} className='card-img' />
			<h3 className='card-country'>{country}</h3>
			{/* <div className='card-text'>{text}</div>
			<button className='card-button'>Check directions!</button> */}
		</div>
	);
}
export default DestinationCard;
