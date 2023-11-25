import { useEffect, useRef, useState } from 'react';

import { Map } from '../Map';
import WithData from './withData';

import clouds from '../Weather/img/cloud.png';
import drizzle from '../Weather/img/drizzle.png';
import fog from '../Weather/img/fog.png';
import ice from '../Weather/img/ice.png';
import rain from '../Weather/img/rain.png';
import sun from '../Weather/img/sun.png';
import thunder from '../Weather/img/thunderstorm.png';
import unknown from '../Weather/img/unknown.png';
import { WiHumidity } from 'react-icons/wi';
import { TiWeatherWindy } from 'react-icons/ti';
import { ThreeCircles } from 'react-loader-spinner';
import Switch from '@mui/material/Switch';
import './WeatherApp.scss';

function WeatherApp(props: any) {
	const refInput = useRef<HTMLInputElement>(null);
	const error = props.error;

	const [showLoader, setShowLoader] = useState<boolean>(false);
	const [color, setColor] = useState<boolean>(false);

	const [forecastPanel, showForecastPanel] = useState(false);
	const [photo, setPhoto] = useState<string>(unknown);
	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	async function handleSearch() {
		await props.setCity(refInput.current?.value);
		await setShowLoader(true);
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(setShowLoader(false));
			}, 2000);
		});
		if (refInput.current) {
			refInput.current.value = '';
		}
	}
	useEffect(() => {
		if (props.cityForeCast) {
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
	useEffect(() => {
		if (props.cityForeCast) {
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
	}, []);

	const handleChangeColor = () => {
		setColor(!color);
	};

	return (
		<div className='weather-app-component'>
			<button
				className='btn btn-show-weather-app'
				onClick={() => {
					showForecastPanel(true);
				}}
			>
				Weather Forecast
			</button>
			{forecastPanel && (
				<div
					className='weather-app'
					style={
						color
							? {
									backgroundImage: `linear-gradient(315deg, #aee1f9 0%, #f6ebe6 74%)`,
							  }
							: {
									backgroundImage: `linear-gradient(315deg, #ffffff 0%, #398ab9 74%)`,
							  }
					}
				>
					<Switch
						className='switch'
						color='default'
						checked={color}
						onChange={handleChangeColor}
					/>
					<button
						className='btn btn-weather-close'
						onClick={() => {
							showForecastPanel(false);
						}}
					>
						X
					</button>
					<div className='weather-app__title-container'>
						<h1 className='title'>Forecast</h1>
						<form>
							<input type='text' ref={refInput} placeholder='Enter a City' className='input-city-name'/>
							<button
								onClick={(e) => {
									e.preventDefault();
									handleSearch();
								}}
							>
								Search...
							</button>
						</form>
					</div>

					<div className='weather-app__container-panels'>
						{showLoader ? (
							<div className='city-main-panel'>
								<ThreeCircles
									height='150'
									width='150'
									color='#398AB9'
									wrapperStyle={{}}
									visible={true}
									ariaLabel='three-circles-rotating'
								/>
							</div>
						) : !error ? (
							<div className='city-main-panel'>
								<h4 className='current-day'>Today</h4>
								<img src={photo} alt='weather-img' />
								<div className='weather-main-info'>
									<h1>{props.city}</h1>
									<p>{props.cityForeCast.weather} </p>
									<p>{props.cityForeCast.temp} °C</p>
								</div>
								<div className='weather-info'>
									<div className='humidity-box'>
										<p>Humiditi:</p>
										<div>
											<WiHumidity size={30} />
											<span>{props.cityForeCast.humidity} %</span>
										</div>
									</div>
									<div className='wind-box'>
										<p>Wind Speed: </p>
										<div>
											<TiWeatherWindy size={30} />
											<span>{props.cityForeCast.wind.speed} km/h</span>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className='city-main-panel'>
								<p className='error-info'>
									City not found. Please enter it again.
								</p>
							</div>
						)}

						<div className='city-forecast-box'>
							{showLoader ? (
								<div className='city-forecast-panel-map'>
									<ThreeCircles
										height='150'
										width='150'
										color='#398AB9'
										wrapperStyle={{}}
										visible={true}
										ariaLabel='three-circles-rotating'
									/>
								</div>
							) : !error ? (
								<div className='city-forecast-panel-map'>
									<Map
										country={props.city}
										position={[props.cityForeCast.lat, props.cityForeCast.lon]}
									/>
								</div>
							) : (
								<div className='city-forecast-panel-map'>
									<p className='error-info'>
										City not found. Please enter it again.
									</p>
								</div>
							)}
							{showLoader ? (
								<div className='city-future-forcast-panel'>
									<ThreeCircles
										height='150'
										width='150'
										color='#398AB9'
										wrapperStyle={{}}
										visible={true}
										ariaLabel='three-circles-rotating'
									/>
								</div>
							) : !error ? (
								<div className='city-future-forcast-panel'>
									{props.dailyForeCast?.map((item: any, index: number) => {
										const dateString = item.dt_txt.toString().slice(0, 10);
										const date = new Date(dateString);
										const dayOfWeek = daysOfWeek[date.getDay()];

										let weatherIcon;
										if (item.weather[0].id >= 200 && item.weather[0].id < 300) {
											weatherIcon = thunder;
										} else if (
											item.weather[0].id >= 300 &&
											item.weather[0].id < 400
										) {
											weatherIcon = drizzle;
										} else if (
											item.weather[0].id >= 500 &&
											item.weather[0].id < 600
										) {
											weatherIcon = rain;
										} else if (
											item.weather[0].id >= 600 &&
											item.weather[0].id < 700
										) {
											weatherIcon = ice;
										} else if (
											item.weather[0].id >= 700 &&
											item.weather[0].id < 800
										) {
											weatherIcon = fog;
										} else if (item.weather[0].id === 800) {
											weatherIcon = sun;
										} else if (
											item.weather[0].id > 800 &&
											item.weather[0].id < 900
										) {
											weatherIcon = clouds;
										} else {
											weatherIcon = unknown;
										}

										return (
											<div className='weather-card' key={index}>
												<h4>{dayOfWeek}</h4>
												<img src={weatherIcon} alt='weather icon' />
												<p>{Math.floor(item.main.temp - 270)} °C</p>
											</div>
										);
									})}
								</div>
							) : (
								<div className='city-future-forcast-panel'>
									<p className='error-info'>
										City not found. Please enter it again.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default WithData(WeatherApp);
