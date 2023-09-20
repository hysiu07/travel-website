import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { directionInfo } from '../../data/directionInfo';
import { Destinations, Nav } from '../../components';
import CountryInfo from './CountryInfo/CountryInfo';
import { SliderCards } from '../../container/SliderCards';
import { travels } from '../../data/travels';
import { DirectionCard } from '../../container/DirectionCard';
import { Weather } from '../../container/Weather';

import svgMap from '../../img/map-svg.png'
import iconPoint from '../../img/icon-point.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Destination.scss';
type DestinationType = {
	id?: number;
	country: string;
	capital: string;
	info: string;
	img: string;
	imgArray?: string[];
	attractions: string[];
	position: [number, number];
};

function Destination() {
	const [destinationInfo, setDestinationInfo] = useState<DestinationType>({
		country: '',
		capital: '',
		info: '',
		img: '',
		imgArray: [],
		attractions: [],
		position: [28.877147, -9.697155],
	});

	const params = useParams();
	
	useEffect(() => {
		directionInfo.map((destination) => {
			if (params.id === destination.country) {
				setDestinationInfo(destination);
			}
		});
		window.scrollTo(0, 0);
	}, [params.id, destinationInfo.imgArray]);

	return (
		<div className='destination'>
			<img src={svgMap} alt="svg-map" className='icon-map' />
			<img src={iconPoint} alt="point-icon" className='icon-point' />
			<Nav />

			<Carousel
				className='www'
				showThumbs={false}
				showStatus={false}
				autoPlay={true}
				interval={2000}
			>
				{destinationInfo.imgArray?.map((img4) => {
					return (
						<div className='aaa'>
							<img src={img4} alt='' />
						</div>
					);
				})}
			</Carousel>
			<CountryInfo
				imgArray={destinationInfo.imgArray}
				img={destinationInfo?.img}
				country={destinationInfo?.country}
				info={destinationInfo.info}
				attractions={destinationInfo.attractions}
				position={destinationInfo.position}
			/>
			<SliderCards>
				{travels.map((direction) => {
					if (direction.country === destinationInfo.country.toLocaleLowerCase()) {
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
			<Weather city={destinationInfo.capital} />
			<Destinations />
		</div>
	);
}
export default Destination;
