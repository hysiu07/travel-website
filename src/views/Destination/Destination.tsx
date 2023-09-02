import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Destination.scss';
import { directionInfo } from '../../data/directionInfo';
import { Destinations, Nav } from '../../components';
import CountryInfo from './CountryInfo/CountryInfo';
import { Map } from '../../container/Map';

type DestinationType = {
	id?: number;
	country: string;
	info: string;
	img: string;
	attractions: string[];
	position: [number, number] ;
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
		directionInfo.forEach((destination) => {
			if (params.id === destination.country) {
				setDestinationInfo(destination);
			}
		});

	},[]);
	return (
		<div className='destination'>
			<Nav />
			<CountryInfo
				img={destinationInfo?.img}
				country={destinationInfo?.country}
				info={destinationInfo.info}
				attractions={destinationInfo.attractions}
			/>
			<Map position={destinationInfo.position} />
			<Destinations />
		</div>
	);
}
export default Destination;
