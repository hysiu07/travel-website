import './DestinationCard.scss';

import Img from '../../img/cyprus-direction.jpeg';

type DestinationProps = {
	text: string;
	country: string;
	img: string;
};
function DestinationCard({ text, country, img }: DestinationProps) {
	const image = img;
	console.log(image);
	return (
		<div className='destinations__card'>
			<img
				src={`${require("../../img/cyprus-direction.jpeg")}`}
				className='card-img'

				// style={{
				// 	backgroundImage: `url(${`'../../img/cyprus-direction.jpeg'`})`,
				// }}
			></img>
			<h3 className='card-country'>{country}</h3>
			<div className='card-text'>{text}</div>
			<button className='card-button'>Check directions!</button>
			{/* <div
				className='ex'
				style={{ backgroundImage: `${require('../../img/cyprus-direction.jpeg')}` }}
            ></div> */}
            <img src={img} alt=""  className='ex2'/>
		</div>
	);
}
export default DestinationCard;
