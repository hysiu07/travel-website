import { Routes, Route } from 'react-router-dom';
import MainView from '../views/MainView';
import { SignIn, Registration } from '../components';
import { MyAccount } from '../views/MyAccount';
import { Destination } from '../views/Destination';
import { SearchedTravels } from '../views/SearchedTravels';
import { FilteredTravelsContextProvider } from '../context/FilteredTravelsContext';
const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<MainView />} />
			<Route path='/signIn' element={<SignIn />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/myAccount' element={<MyAccount />} />
			<Route path='/destination/:id' element={<Destination />} />
			<Route
				path='/searchedTravels'
				element={
					<FilteredTravelsContextProvider>
						<SearchedTravels />
					</FilteredTravelsContextProvider>
				}
			/>
		</Routes>
	);
};

export default AppRoutes;
