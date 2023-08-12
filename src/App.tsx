import './App.css';
import MainView from './views/MainView';
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
   
		<div>
			<MainView />
		</div>
	);
}
export default App;
