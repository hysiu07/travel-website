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

function MainView() {
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
