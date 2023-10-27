import './App.css';

import AppRoutes from './routes/AppRoutes';
import { UserContextProvider } from './context/UserContext';
import { FilteredTravelsContextProvider } from './context/FilteredTravelsContext';

import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from './rootReducers';
import { Provider } from 'react-redux/es/exports';

export const store = configureStore({
	reducer: rootReducers,
});

function App() {
	return (
		<FilteredTravelsContextProvider>
			<UserContextProvider>
				<Provider store={store}>
					<AppRoutes />
				</Provider>
			</UserContextProvider>
		</FilteredTravelsContextProvider>
	);
}
export default App;
