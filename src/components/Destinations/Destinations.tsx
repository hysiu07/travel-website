import { useState, useEffect, useRef } from 'react';
import './Destinations.scss';
import { directionInfo } from '../../data/directionInfo';
import { DestinationCard } from '../../container/DestinationCard';

import MovingText from 'react-moving-text';

function Destinations() {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [animate, setAnimate] = useState<boolean>(false);

	const isElementInViewport = () => {
		if (sectionRef.current) {
			const rect = sectionRef.current.getBoundingClientRect();
			return rect.top < window.innerHeight && rect.bottom >= 0;
		}
		return false;
	};

	useEffect(() => {
		const handleScroll = () => {
			if (isElementInViewport()) {
				setAnimate(true);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='destinations' id='destinations' ref={sectionRef}>
			<div className='destinations__text-container'>
				<h2>Destinations</h2>
			</div>

			{animate && (
				<MovingText
					type='fadeInFromBottom'
					duration='1200ms'
					delay='0s'
					direction='normal'
					timing='linear'
					iteration='1'
					fillMode='none'
				>
					<div className='destinations__cards-container'>
						{directionInfo.map((direction) => {
							return (
								<DestinationCard
									key={direction.id}
									country={direction.country}
									img={direction.img}
								/>
							);
						})}
					</div>
				</MovingText>
			)}

			{/* <div className='destinations__cards-container'>
				{directionInfo.map((direction) => {
					return (
						<DestinationCard
							key={direction.id}
							country={direction.country}
							img={direction.img}
						/>
					);
				})}
			</div> */}
		</div>
	);
}
export default Destinations;
