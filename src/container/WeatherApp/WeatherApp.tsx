import { useRef } from 'react';
import './WeatherApp.scss';
import { useState } from 'react';
import WithData from './withData';

function WeatherApp(props: any) {
	const refInput = useRef<HTMLInputElement>(null);
	console.log(refInput.current?.value);
	console.log(props);

	const [forecastPanel, showForecastPanel] = useState(false);
	console.log();


	const handle = () => {
		console.log(refInput.current?.value);
		props.setCity(refInput.current?.value);
	}
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
									handle()
								}}
							>
								Search...
							</button>
						</form>
					</div>

					<div className='weather-app__container-panels'>
						<div className='city-main-panel'>
							<h1>{props.city}</h1>
							<p>{props.foreCast.weather}</p>
							<p>{props.foreCast.temp}</p>
						</div>
						<div className='city-forecast-box'>
							<div className='city-forecast-panel'></div>
							<div className='city-future-forcast-panel'></div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default WithData(WeatherApp);
