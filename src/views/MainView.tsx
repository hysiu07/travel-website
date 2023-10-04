import { useContext, useEffect} from 'react';
import { UserContext } from '../context/UserContext';

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

function MainView() {
	const userContext = useContext(UserContext);

	useEffect(() => {
		const userLocalStorage = localStorage.getItem('user');
		if (typeof userLocalStorage === 'string') {
			const user2 = JSON.parse(userLocalStorage);
			userContext?.setUser(user2);
		}
	}, []);

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
		</div>
	);
}
export default MainView;
