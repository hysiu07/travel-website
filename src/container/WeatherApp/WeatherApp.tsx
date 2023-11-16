import { useEffect, useRef } from 'react';
import './WeatherApp.scss';
import { useState } from 'react';
import WithData from './withData';
import clouds from '../Weather/img/cloud.png';
import drizzle from '../Weather/img/drizzle.png';
import fog from '../Weather/img/fog.png';
import ice from '../Weather/img/ice.png';
import rain from '../Weather/img/rain.png';
import sun from '../Weather/img/sun.png';
import thunder from '../Weather/img/thunderstorm.png';
import unknown from '../Weather/img/unknown.png';

function WeatherApp(props: any) {
	const refInput = useRef<HTMLInputElement>(null);

	const [forecastPanel, showForecastPanel] = useState(false);
	const [photo, setPhoto] = useState<string>(unknown);
	const handle = () => {
		console.log(refInput.current?.value);
		props.setCity(refInput.current?.value);
	};
	useEffect(() => {
		if (props.cityForeCast) {
			console.log(props.cityForeCast.id);
			setPhoto(() => {
				if (props.cityForeCast.id >= 200 && props.cityForeCast.id < 300) {
					return thunder;
				} else if (
					props.cityForeCast.id >= 300 &&
					props.cityForeCast.id < 400
				) {
					return drizzle;
				} else if (
					props.cityForeCast.id >= 500 &&
					props.cityForeCast.id < 600
				) {
					return rain;
				} else if (
					props.cityForeCast.id >= 600 &&
					props.cityForeCast.id < 700
				) {
					return ice;
				} else if (
					props.cityForeCast.id >= 700 &&
					props.cityForeCast.id < 800
				) {
					return fog;
				} else if (props.cityForeCast.id === 800) {
					return sun;
				} else if (
					props.cityForeCast.id >= 800 &&
					props.cityForeCast.id < 900
				) {
					return clouds;
				} else {
					return unknown;
				}
			});
		}
	}, [props.cityForeCast]);
	return (
		<div className='weather-app-component'>
			<button
				className='btn '
				onClick={() => {
					showForecastPanel(true);
				}}
			>
				Weather Forecast
			</button>
			{forecastPanel && (
				<div className='weather-app'>
					<button
						className='btn btn-weather'
						onClick={() => {
							showForecastPanel(false);
						}}
					>
						X
					</button>
					<div className='weather-app__title-container'>
						<h1 className='title'>Forecast</h1>
						<form>
							<input type='text' ref={refInput} placeholder='Enter a City' />
							<button
								onClick={(e) => {
									e.preventDefault();
									handle();
								}}
							>
								Search...
							</button>
						</form>
					</div>

					<div className='weather-app__container-panels'>
						<div className='city-main-panel'>
							<h1>{props.city}</h1>
							<p>{props.cityForeCast.weather}</p>
							<p>{props.cityForeCast.temp}</p>
							<img src={photo} alt='weather-img' />
						</div>
						<div className='city-forecast-box'>
							<div className='city-forecast-panel'></div>
							<div className='city-future-forcast-panel'>
								{props.dailyForeCast.map((item: any) => {
									return <p>{item.dt_txt}</p>;
								})}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default WithData(WeatherApp);
