import './MyAccount.scss';
import { Nav } from '../../components';
function MyAccount() {
	return (
		<div className='my-account'>
			<Nav />
			<button
				onClick={() => {
					localStorage.removeItem('user');
				}}
			>
				LogOut
			</button>
		</div>
	);
}
export default MyAccount;
