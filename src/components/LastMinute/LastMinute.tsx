import { LastMinuteCard } from '../../container/LastMinuteCard';
import { travels } from '../../data/travels';
import './LastMinute.scss';
import Slider from 'react-slick';
import useWindowWidth from '../../container/Hooks/useWindowWidth';
import { useEffect, useState } from 'react';
function LastMinute() {
	const [countCard, setCountCard] = useState<number>(3);
	const [style, setStyle] = useState<string>('80%');
	const { width } = useWindowWidth();

	useEffect(() => {
		if (width > 1400) {
			setCountCard(4)
		}else if(width > 1300) {
			setCountCard(3)
		} else if (width > 900) {
			setCountCard(2)
		} else {
			setCountCard(1)
		}
	}, [width]);
	console.log(countCard);
	// const resize = () => {
	// 	if (width > 800) {
	// 		setStyle('80px');
	// 	} else if (width < 800) {
	// 		setStyle('200px');
	// 	}
	// };

	// window.addEventListener('resize', () => {
	// 	resize()
	// });
	
	const settings = {
		infinite: true,
		slidesToShow: countCard,
		slidesToScroll: 1,
		autoplay: true,
		speed: 6000,
		autoplaySpeed: 3000,
		cssEase: 'linear',
		pauseOnHover: true,
		style: {
			width: style,
		},
	};
	return (
		<div id='last-minute'>
			<h2 className='last-minute__title'>LastMinute</h2>
			<div className='last-minute__container'>
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
