
import './Weather.scss';

function Weather() {

	return (
        <div className='weather'>
            <div className='weather__shadow'></div>
			<div className='weather__content-container'>
				<h3 className='title'>Weater</h3>
				<div className='weather-position-box'>
					<div className='weather-position-box__name-box'>
						<h4>London</h4>
					</div>
					<div className='weather-position-box__img'>dfd</div>
				</div>
				<div className='weather-info-box'>
					<div className='box'>
						<h5>Weather:</h5>
						<p>cv</p>
					</div>
					<div className='box'>
						<h5>Temperature:</h5>
						<p>vcv</p>
					</div>
					<div className='box'>
						<h5>Humidity:</h5>
						<p>cc</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Weather;
