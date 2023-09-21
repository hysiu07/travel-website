import { useContext, useEffect, useState } from 'react';
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
	// const [userLogged, setUserLogged] = useState();
	useEffect(() => {
		const userLocalStorage = localStorage.getItem('user');
		if (typeof userLocalStorage === 'string') {
			const user2 = JSON.parse(userLocalStorage);
			userContext?.setUser(user2);
			
		}
	}, []);
	console.log(userContext?.user);
	// pozniej to ogarnac
	// console.log(userContext?.user, ' zalogowany do contextu ');
	// console.log(userLogged, ' zalogowany ze State ');

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
