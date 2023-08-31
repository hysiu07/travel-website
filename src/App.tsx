import './App.css';

import AppRoutes from './routes/AppRoutes';
import { UserContextProvider } from './context/UserContext';

function App() {
	
	return (
		<UserContextProvider>
			<AppRoutes />
		</UserContextProvider>
	);
}
export default App;
