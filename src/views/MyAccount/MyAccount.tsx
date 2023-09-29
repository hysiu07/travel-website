import './MyAccount.scss';
import { Nav } from '../../components';
import { useContext,useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
function MyAccount() {
	const userContext = useContext(UserContext)
	console.log(userContext?.user);
	// useEffect(() => {
	// 	const userLocalStorage = localStorage.getItem('user');
	// 	if (typeof userLocalStorage === 'string') {
	// 		const user2 = JSON.parse(userLocalStorage);
	// 		userContext?.setUser(user2);
	// 	}
	// }, []);
	return (
		<div className='my-account'>
			<Nav />
			<div className='my-account__shadow'></div>
			<div className='my-account__panel'>
				<h2>Witaj</h2>
				<button
					onClick={() => {
						localStorage.removeItem('user');
					}}
				>
					LogOut
				</button>
			</div>
		</div>
	);
}
export default MyAccount;
