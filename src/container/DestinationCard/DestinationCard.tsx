import './DestinationCard.scss'
type DestinationProps = {
	text: string;
	country: string;
	img: string;
};
function DestinationCard({ text, country, img }: DestinationProps) {
	console.log(img);
	return (
		<div className='destinations__card'>
			<div
				className='card-img'
				// style={{
				// 	backgroundImage: `url('../../img/cyprus-direction.jpeg')`,
				// }}
			></div>
			<h3 className='card-country'>{country}</h3>
			<div className='card-text'>{text}</div>
			<button className='card-button'>Check directions!</button>
		</div>
	);
}
export default DestinationCard;
