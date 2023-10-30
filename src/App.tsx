import './App.css';

import AppRoutes from './routes/AppRoutes';

import { FilteredTravelsContextProvider } from './context/FilteredTravelsContext';

import { Provider } from 'react-redux/es/exports';
import { persistor, store } from './configureStorePersist';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
	return (
		<FilteredTravelsContextProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AppRoutes />
				</PersistGate>
			</Provider>
		</FilteredTravelsContextProvider>
	);
}
export default App;
