import { useEffect, useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { Map } from '../../../container/Map';
import './CountryInfo.scss';


type PropsCountryInfoType = {
	img: string;
	imgArray?: string[];
	country: string;
	info: string;
	attractions: string[];
	position: [number, number];
};
function CountryInfo({
	country,
	info,
	attractions,
	position,
	imgArray,
}: PropsCountryInfoType) {
	useEffect(() => {

	}, [imgArray]);
	return (
		<div className='country-info'>
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
