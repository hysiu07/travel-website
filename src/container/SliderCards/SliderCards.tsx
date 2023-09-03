import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './SliderCards.scss';
import useWindowWidth from '../../container/Hooks/useWindowWidth';

type PropsSliderCardsType = {
	children: React.ReactNode;
};

function SliderCards({ children }: PropsSliderCardsType) {
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
		<div>
			<Slider {...settings} className='carousel'>
				{children}
			</Slider>
		</div>
	);
}
export default SliderCards;
