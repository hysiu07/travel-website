import { useEffect, useState } from 'react';
import axios from 'axios';

export default function withData(WrappedComponent: React.ComponentType) {
	const WeatherForeCast = (props: any) => {
		const [city, setCity] = useState('London');
		const [cityForecast, setCityForecast] = useState<any>();
		const API = 'https://api.openweathermap.org/data/2.5/weather?q=';
		const API_KEY = 'c75220d8681be195d50609327ea95e12';
		const [filteredDailyForecast, setFilteredDailyForecast] = useState();
		console.log(filteredDailyForecast);
		useEffect(() => {
			axios
				.get(API + city + '&appid=' + API_KEY)
				.then((res) => {
					console.log(res);
					setCityForecast({
						temp: Math.floor(res.data.main.temp - 270),
						humidity: res.data.main.humidity,
						weather: res.data.weather[0].main,
						wind: res.data.wind,
						id: res.data.weather[0].id,
						lat: res.data.coord.lat,
						lon: res.data.coord.lon,
					});
				})

				.catch((error) => {
					console.error(error);
				});
		}, [city]);

		useEffect(() => {
			if (cityForecast && cityForecast.lat && cityForecast.lon) {
				axios
					.get(
						`https://api.openweathermap.org/data/2.5/forecast?lat=${cityForecast.lat}&lon=${cityForecast.lon}&appid=c75220d8681be195d50609327ea95e12`
					)
					.then((res) => {
						const filterTime = res.data.list.filter((item: any) => {
							return item.dt_txt.includes('12:00:00');
						});

						const todayDateString = new Date().toISOString().slice(0, 10);

						const filterDate = filterTime.filter((item: any) => {
							return !item.dt_txt.includes(todayDateString);
						});

						setFilteredDailyForecast(filterDate);
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
				cityForeCast={cityForecast}
				dailyForeCast={filteredDailyForecast}
				setCity={setCity}
			/>
		);
	};

	return WeatherForeCast;
}
