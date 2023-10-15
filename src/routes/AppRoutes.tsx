import { Routes, Route } from 'react-router-dom';
import MainView from '../views/MainView';
import { SignIn, Registration } from '../components';
import { MyAccount } from '../views/MyAccount';
import { Destination } from '../views/Destination';
import { SearchedTravels } from '../views/SearchedTravels';
import { InsuranceInfo } from '../views/InsuranceInfo'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/travel-website' element={<MainView />} />
			<Route path='/signIn' element={<SignIn />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/myAccount' element={<MyAccount />} />
			<Route path='/destination/:id' element={<Destination />} />
			<Route path='/insuranceInfo' element={<InsuranceInfo/>} />
			<Route
				path='/travel-website/searchedTravels/:country/:dateStart/:price'
				element={<SearchedTravels />}
			/>
		</Routes>
	);
};

export default AppRoutes;
