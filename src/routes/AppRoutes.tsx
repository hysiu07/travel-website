import { Routes, Route } from 'react-router-dom';
import MainView from '../views/MainView';
import { SignIn, Registration } from '../components';
import { MyAccount } from '../views/MyAccount';
import { Destination } from '../views/Destination';
const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<MainView />} />
			<Route path='/signIn' element={<SignIn />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/myAccount' element={<MyAccount />} />
			<Route path='/destination/:id' element={<Destination />} />
		</Routes>
	);
};

export default AppRoutes;
