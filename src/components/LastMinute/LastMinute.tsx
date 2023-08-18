import { LastMinuteCard } from '../../container/LastMinuteCard';
import { travels } from '../../data/travels';
import './LastMinute.scss';
import Slider from 'react-slick';

function LastMinute() {
	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 6000,
		autoplaySpeed: 3000,
		cssEase: 'linear',
		pauseOnHover: true,
	};
	return (
		<div id='last-minute'>
			<h2 className='last-minute__title'>LastMinute</h2>
			<div className='last-minute'>
				<Slider {...settings} className='last-minute__carousel'>
					{travels.map((direction) => {
						if (direction.lastMinute) {
							return (
								<LastMinuteCard
									key={direction.id}
									img={direction.img}
									hotel={direction.hotel}
									stars={direction.stars}
									country={direction.country}
									city={direction.city}
									date={direction.date}
									price={direction.price}
								/>
							);
						}
					})}
				</Slider>
			</div>
		</div>
	);
}
export default LastMinute;
