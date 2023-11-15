import {
	Nav,
	Header,
	Destinations,
	LastMinute,
	About,
	Insurance,
	Reviews,
	Contact,
} from '../components';
import { FavPanel } from '../container/FavoritesPanel';
import { Chat } from '../container/ChatComponent';
import ScrollUpComponent from '../container/ScrollUp/ScrollUpComponent';
import { WeatherApp } from '../container/WeatherApp';
import { connect } from 'react-redux';

function MainView({ showWeatherApp }: any) {
	console.log(showWeatherApp);
	return (
		<div>
			<Nav />
			<Header />
			<Destinations />
			<LastMinute />
			<About />
			<Insurance />
			<Reviews />
			<Contact />
			<FavPanel />
			<ScrollUpComponent />
			<Chat />
			
		</div>
	);
}


export default MainView;
