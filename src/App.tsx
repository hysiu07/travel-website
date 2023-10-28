import './App.css';

import AppRoutes from './routes/AppRoutes';
import { UserContextProvider } from './context/UserContext';
import { FilteredTravelsContextProvider } from './context/FilteredTravelsContext';

import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from './rootReducers';
import { Provider } from 'react-redux/es/exports';
import { persistor, store } from './configureStorePersist';
import { PersistGate } from 'redux-persist/integration/react';
// export const store = configureStore({
// 	reducer: rootReducers,
// });

function App() {
	return (
		<FilteredTravelsContextProvider>
			<UserContextProvider>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<AppRoutes />
					</PersistGate>
				</Provider>
			</UserContextProvider>
		</FilteredTravelsContextProvider>
	);
}
export default App;
