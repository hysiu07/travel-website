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
	const [user, setUser] = useState();

	useEffect(() => {
		const userLocalStorage = localStorage.getItem('user');
		if (typeof userLocalStorage === 'string') {
			const user2 = JSON.parse(userLocalStorage);
			setUser(user2);
		}
	}, []);
	console.log(user);
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
