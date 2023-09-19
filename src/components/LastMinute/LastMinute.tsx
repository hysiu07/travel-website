import { SliderCards } from '../../container/SliderCards';
import './LastMinute.scss';
import { DirectionCard } from '../../container/DirectionCard';
import { travels } from '../../data/travels';

function LastMinute() {
	return (
		<div id='last-minute' className='last-minute'>
			<h2 className='last-minute__title'>LastMinute</h2>

			<SliderCards>
				{travels.map((direction) => {
					if (direction.lastMinute) {
						return (
							<DirectionCard
								key={direction.id}
								img={direction.img}
								hotel={direction.hotel}
								stars={direction.stars}
								country={direction.country}
								city={direction.city}
								dateStart={direction.dateStart}
								dateEnd={direction.dateEnd}
								price={direction.price}
								lastMinute={direction.lastMinute}
							/>
						);
					}
				})}
			</SliderCards>
		</div>
	);
}
export default LastMinute;
