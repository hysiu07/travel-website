import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { directionInfo } from '../../data/directionInfo';
import { Destinations, Nav } from '../../components';
import { SnackBar } from '../../container/SnackBar';
import CountryInfo from './CountryInfo/CountryInfo';
import { SliderCards } from '../../container/SliderCards';
import { travels } from '../../data/travels';
import { DirectionCard } from '../../container/DirectionCard';
import { Weather } from '../../container/Weather';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
	const [snackBar, setSnackBar] = useState<boolean>(false);
	const [snackBarInfo, setSnackBarInfo] = useState<string>('');

	async function handleShowSnackBar(info: string) {
		await setSnackBarInfo(info);
		await setSnackBar(true);
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(setSnackBar(false));
			}, 2000);
		});
	}

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
			<SnackBar
				text={snackBarInfo}
				position={
					snackBar
						? { right: '50px', position: 'fixed' }
						: { right: '-300px', position: 'fixed' }
				}
			/>
			<Nav />

			<Carousel
				className='carousel-destination'
				showThumbs={false}
				showStatus={false}
				autoPlay={true}
				interval={2000}
			>
				{destinationInfo.imgArray?.map((img4, index) => {
					return (
						<div className='carousel-destination-img' key={index}>
							<img src={img4} alt='destination-img' />
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
					if (
						direction.country === destinationInfo.country.toLocaleLowerCase()
					) {
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
								airPort={direction.airPort}
								handleShowSnackBar={handleShowSnackBar}
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
