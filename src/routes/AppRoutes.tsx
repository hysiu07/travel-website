import MainView from '../views/MainView';
import { SignIn, Registration } from '../components';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<MainView />} />
			<Route path='/signIn' element={<SignIn />} />
			<Route path='/registration' element={<Registration />} />
		</Routes>
	);
};

export default AppRoutes