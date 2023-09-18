import './NavLogo.scss';
import { Link } from 'react-router-dom';
import { LuPlane } from 'react-icons/lu';

function NavLogo() {
	return (
		<div className='logo-box'>
			<LuPlane size={40} className='logo-icon' />
			<Link to='/travel-website' className='logo-link'>
				YourTrip
			</Link>
			<span className='logo-dot'></span>
		</div>
	);
}

export default NavLogo;
