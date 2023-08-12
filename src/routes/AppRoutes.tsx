import MainView from '../views/MainView';
import { Routes, Route } from 'react-router-dom'
type RoutesType = {
    children: React.ReactNode
}

const AppRoutes = ({children}: RoutesType) => {
	return (
		<Routes>
			<Route path='/' element={<MainView />} />
			<Route path='/signIn' /> 
		</Routes>
	);
};
