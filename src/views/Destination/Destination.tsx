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
import axios from 'axios';

type DestinationType = {
	id?: number;
	country: string;
	info: string;
	img: string;
	attractions: string[];
	position: [number, number];
};

function Destination() {
	const [destinationInfo, setDestinationInfo] = useState<DestinationType>({
		country: '',
		info: '',
		img: '',
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
	}, [params.id]);

	const API = 'https://api.openweathermap.org/data/2.5/weather?q=';
	const API_KEY = 'c75220d8681be195d50609327ea95e12';
	axios.get(API + 'Stavanger' + '&appid=' + API_KEY).then((res) => {
		console.log(res.data);
	});
	return (
		<div className='destination'>
			<Nav />
			<CountryInfo
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
			<Weather />
			<Destinations />
		</div>
	);
}
export default Destination;
