import './CountryInfo.scss';
import { TiTick } from 'react-icons/ti';
import { Map } from '../../../container/Map';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

type PropsCountryInfoType = {
	img: string;
	imgArray?: string[];
	country: string;
	info: string;
	attractions: string[];
	position: [number, number];
};
function CountryInfo({
	img,
	country,
	info,
	attractions,
	position,
	imgArray,
}: PropsCountryInfoType) {
	console.log(imgArray);
	return (
		<div className='country-info'>
			{/* <div
				className='country-info__img'
				style={{ backgroundImage: `url(${img})` }}
			></div> */}

			<Carousel>
				{imgArray?.map((img, index) => {
					return (
						<Carousel.Item key={index}>
							<div
								className='country-info__img'
								style={{ backgroundImage: `url(${img})` }}
							></div>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}

				{/* <Carousel.Item>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item> */}
			</Carousel>
			<div className='country-info__content-container'>
				<h2>{country}</h2>
				<p className='country-info-text'>{info}</p>
				<div className='box'>
					<div className='attractions'>
						<h3>Main Attracions:</h3>
						<div>
							{attractions.map((attraction, index) => {
								return (
									<div className='attraction-box' key={index}>
										<div>
											<TiTick size={30} />
										</div>
										<div>
											<p>{attraction}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='map-box'>
						<Map position={position} country={country} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CountryInfo;
