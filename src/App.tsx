import './App.css';

import AppRoutes from './routes/AppRoutes';
import { UserContextProvider } from './context/UserContext';
import { FilteredTravelsContextProvider } from './context/FilteredTravelsContext';


function App() {
	return (
		<FilteredTravelsContextProvider>
			<UserContextProvider>
				<AppRoutes />
			</UserContextProvider>
		</FilteredTravelsContextProvider>
	);
}
export default App;
