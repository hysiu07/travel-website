import MainView from '../views/MainView';
import { SignIn, Registration } from '../components';
import { Routes, Route } from 'react-router-dom';
import MyAccount from '../views/MyAccount/MyAccount';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<MainView />} />
			<Route path='/signIn' element={<SignIn />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/myAccount' element={<MyAccount />} />
		</Routes>
	);
};

export default AppRoutes