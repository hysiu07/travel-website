import './Destinations.scss';
import { directionInfo } from '../../data/directionInfo';
import { DestinationCard } from '../../container/DestinationCard';

function Destinations() {
	return (
		<div className='destinations' id='destinations'>
			<div className='destinations__text-container'>
				<h2>Destinations</h2>
			</div>
			<div className='destinations__cards-container'>
				{directionInfo.map((direction) => {
					return (
						<DestinationCard
							key={direction.id}
							text={direction.info}
							country={direction.country}
							img={direction.img}
						/>
					);
				})}
			</div>
		</div>
	);
}
export default Destinations;
