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
import Slider from 'react-slick';
import img3 from '../../img/cyprus-direction-3.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
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
	console.log(destinationInfo.country);
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
			<Nav />

			{/* <Slider {...settings} className='www'>
				{destinationInfo.imgArray?.map((img2) => {
					return (
						<div className='aaa'>
							<img src={img2} alt='' />
						</div>
					);
				})}
				<div className='aaa'>
					<img src={img3} alt='' />
				</div>
				
			</Slider> */}
			<Carousel className='www' showThumbs={false} showStatus={false}>
				{destinationInfo.imgArray?.map((img4) => {
					return (
						<div className='aaa'>
							<img src={img4} alt='' />
						</div>
					);
				})}
				{/* <div>
					<img src='assets/1.jpeg' />
					<p className='legend'>Legend 1</p>
				</div>
				<div>
					<img src='assets/2.jpeg' />
					<p className='legend'>Legend 2</p>
				</div>
				<div>
					<img src='assets/3.jpeg' />
					<p className='legend'>Legend 3</p>
				</div> */}
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
