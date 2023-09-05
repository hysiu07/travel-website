import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Destination.scss';
import { directionInfo } from '../../data/directionInfo';
import { Destinations, Nav } from '../../components';
import CountryInfo from './CountryInfo/CountryInfo';
import { SliderCards } from '../../container/SliderCards';
import { travels } from '../../data/travels';
import { DirectionCard } from '../../container/DirectionCard';
import { Weather } from '../../container/Weater';

type DestinationType = {
	id?: number;
	country: string;
	capital: string;
	info: string;
	img: string;
	imgArray?: string[] | [];
	attractions: string[];
	position: [number, number];
};

function Destination() {
	const [destinationInfo, setDestinationInfo] = useState<DestinationType>({
		country: '',
		capital: '',
		info: '',
		img: '',
		imgArray:[],
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
	}, [params.id]);

	return (
		<div className='destination'>
			<Nav />
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
					if (direction.country === destinationInfo.country) {
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
