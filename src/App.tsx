import './App.css';
import MainView from './views/MainView';
import AppRoutes from './routes/AppRoutes';
import { UserContextProvider } from './context/UserContext';
// import axios from 'axios';
// type AxiosType = {
//   userId: number
//   id: number
//   title: string
//   body: string
// }

function App() {
	// axios.get<AxiosType[]>('https://jsonplaceholder.typicode.com/posts').then(res => console.log(res.data))
	return (
		<UserContextProvider>
			<AppRoutes />
		</UserContextProvider>
	);
}
export default App;
