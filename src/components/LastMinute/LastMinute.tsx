import { useEffect, useState } from 'react';
import { DirectionCard } from '../../container/DirectionCard';
import { travels } from '../../data/travels';
import './LastMinute.scss';
import Slider from 'react-slick';
import useWindowWidth from '../../container/Hooks/useWindowWidth';

function LastMinute() {
	const [countCard, setCountCard] = useState<number>(3);

	const { width } = useWindowWidth();

	useEffect(() => {
		if (width < 850) {
			setCountCard(1);
		} else if (width > 850 && width < 1300) {
			setCountCard(2);
		} else if (width > 1300) {
			setCountCard(3);
		}
	}, []);

	const settings = {
		infinite: true,
		slidesToShow: countCard,
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
			<div className='last-minute__container'>
				<Slider {...settings} className='last-minute__carousel'>
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
