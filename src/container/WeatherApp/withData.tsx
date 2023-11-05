import { useEffect, useState } from 'react';
import axios from 'axios';


export default function withData(WrappedComponent: React.ComponentType) {
	const WeatherForeCast = (props:any ) => {
		const [city, setCity] = useState('London');
		const [cityForecast, setCityForecast] = useState<any>();
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
				})
				.catch((error) => {
					console.error(error);
				});
		}, []);
		return <WrappedComponent {...props} city={city} foreCast={cityForecast} />;
	};

	return WeatherForeCast;
}
