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
function MainView() { 
	const userContext = useContext(UserContext);
	const [userLogged, setUserLogged] = useState();
	useEffect(() => {
		const userLocalStorage = localStorage.getItem('user');
		if (typeof userLocalStorage === 'string') {
			const user2 = JSON.parse(userLocalStorage);
			setUserLogged(user2);
			userContext?.setUser(user2);
		}
	}, []);
	console.log(userLogged, ' zalogowany ');
	
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
		</div>
	);
}
export default MainView;
