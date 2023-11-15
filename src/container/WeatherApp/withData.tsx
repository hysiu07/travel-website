import { useEffect, useState } from 'react';
import axios from 'axios';

export default function withData(WrappedComponent: React.ComponentType) {
	const WeatherForeCast = (props: any) => {
		const [city, setCity] = useState('London');
		const [cityForecast, setCityForecast] = useState<any>();
		const API = 'https://api.openweathermap.org/data/2.5/weather?q=';
		const API_16DAYS =
			'https://api.openweathermap.org/data/2.5/forecast/daily?';
		const API_KEY = 'c75220d8681be195d50609327ea95e12';

		useEffect(() => {
			axios
				.get(API + city + '&appid=' + API_KEY)
				.then((res) => {
					console.log(res);
					setCityForecast({
						temp: Math.floor(res.data.main.temp - 270),
						humidity: res.data.main.humidity,
						weather: res.data.weather[0].main,
						id: res.data.weather[0].id,
						lat: res.data.coord.lat,
						lon: res.data.coord.lon,
					});

					// return axios
					// 	.get(
					// 		API_16DAYS +
					// 			`${cityForecast.lat}` +
					// 			`&lon=` +
					// 			`${cityForecast.lon}` +
					// 			`&cnt=7` +
					// 			`&appid=${API_KEY}`
					// 	)
					// 	.then((res) => {
					// 		console.log(res, 'drugie api');
					// 	});
				})

				.catch((error) => {
					console.error(error);
				});
		}, [city]);

		useEffect(() => {
			// Sprawdź, czy cityForecast został zaktualizowany
			if (cityForecast && cityForecast.lat && cityForecast.lon) {
				axios
					.get(
					`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=c75220d8681be195d50609327ea95e12`
					)
					.then((res) => {
						console.log(res, 'drugie api');
					})
					.catch((error) => {
						console.error(error);
					});
			}
		}, [cityForecast]);

		return (
			<WrappedComponent
				{...props}
				city={city}
				foreCast={cityForecast}
				setCity={setCity}
			/>
		);
	};

	return WeatherForeCast;
}
