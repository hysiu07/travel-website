import './WeatherApp.scss';
import WithData from './withData';
function WeatherApp(props: any) {
	// console.log(props,'WeatherApp sooonn :)');
	return <div className='weather-app'></div>;
}
export default WithData(WeatherApp)
