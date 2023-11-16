import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Weather.scss';
import clouds from './img/cloud.png';
import drizzle from './img/drizzle.png';
import fog from './img/fog.png';
import ice from './img/ice.png';
import rain from './img/rain.png';
import sun from './img/sun.png';
import thunder from './img/thunderstorm.png';
import unknown from './img/unknown.png';

type PropsWeatherType = {
	city: string;
};
type CityForecastObjType = {
	temp: number;
	humidity: number;
	weather: string;
	id: number;
};
function Weather({ city }: PropsWeatherType) {
	const params = useParams();
	const [cityForecast, setCityForecast] = useState<CityForecastObjType>({
		temp: 0,
		humidity: 0,
		weather: '',
		id: 0,
	});
	const [photo, setPhoto] = useState<string>();
	const API = 'https://api.openweathermap.org/data/2.5/weather?q=';
	const API_KEY = 'c75220d8681be195d50609327ea95e12';

	useEffect(() => {
		axios
			.get(API + city + '&appid=' + API_KEY)
			.then((res) => {
				setCityForecast({
					temp: Math.floor(res.data.main.temp - 270),
					humidity: res.data.main.humidity,
					weather: res.data.weather[0].main,
					id: res.data.weather[0].id,
				});

				setPhoto(() => {
					if (cityForecast.id >= 200 && cityForecast.id < 300) {
						return thunder;
					} else if (cityForecast.id >= 300 && cityForecast.id < 400) {
						return drizzle;
					} else if (cityForecast.id >= 500 && cityForecast.id < 600) {
						return rain;
					} else if (cityForecast.id >= 600 && cityForecast.id < 700) {
						return ice;
					} else if (cityForecast.id >= 700 && cityForecast.id < 800) {
						return fog;
					} else if (cityForecast.id === 800) {
						return sun;
					} else if (cityForecast.id >= 800 && cityForecast.id < 900) {
						return clouds;
					} else {
						return unknown;
					}
				});
			})
			.catch(() => {});
	}, [params.id, city]);

	return (
		<div className='weather'>
			<div className='weather__shadow'></div>
			<div className='weather__content-container'>
				<div className='weather-position-box'>
					<div className='weather-position-box__name-box'>
						<h4>{city}</h4>
					</div>
					<div className='weather-position-box__img'>
						<img src={photo} alt='weather-img' />
					</div>
				</div>
				<div className='weather-info-box'>
					<div className='box'>
						<h5>Weather:</h5>
						<hr />
						<p>{cityForecast?.weather}</p>
					</div>
					<div className='box'>
						<h5>Temperature:</h5>
						<hr />
						<p>{cityForecast?.temp} °C</p>
					</div>
					<div className='box'>
						<h5>Humidity:</h5>
						<hr />
						<p>{cityForecast?.humidity} %</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Weather;
