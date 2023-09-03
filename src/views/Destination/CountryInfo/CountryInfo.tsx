import './CountryInfo.scss';
import { TiTick } from 'react-icons/ti';
import { Map } from '../../../container/Map';

type PropsCountryInfoType = {
	img: string;
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
}: PropsCountryInfoType) {
	return (
		<div className='country-info'>
			<div
				className='country-info__img'
				style={{ backgroundImage: `url(${img})` }}
			></div>
			<div className='country-info__content-container'>
				<h2>{country}</h2>
				<p className='country-info-text'>{info}</p>
				<div className='box'>
					<div className='attractions'>
						<h3>Main Attracions:</h3>
						<div>
							{attractions.map((attraction) => {
								return (
									<div className='attraction-box'>
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
