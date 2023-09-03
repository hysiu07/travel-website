import axios from "axios";

function Weather() {
	const API =
        'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=';
    const API_KEY = 'c75220d8681be195d50609327ea95e12';
    axios.get(API + API_KEY)
	return <div className='weather'></div>;
}
export default Weather;
