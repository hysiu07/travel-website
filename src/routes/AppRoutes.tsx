import MainView from '../views/MainView';
import { SignIn } from '../components';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<MainView />} />
			<Route path='/signIn' element={<SignIn />} />
		</Routes>
	);
};

export default AppRoutes