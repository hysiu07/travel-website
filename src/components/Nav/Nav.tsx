import { useState } from 'react';

import { LuPlane } from 'react-icons/lu';

import { Link } from 'react-router-dom';

import './Nav.scss';
import { NavMenu } from '../../container/NavMenu';
import NavBtn from '../../container/NavBtn/NavBtn';

function Nav() {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	return (
		<nav className='nav'>
			<div className='nav__container'>
				<div className='nav__logo-box'>
					<LuPlane size={40} className='nav__logo-icon' />
					<Link to='/' className='nav__logo-link'>
						YourTrip
					</Link>
					<span className='nav__logo-dot'></span>
				</div>
				<NavMenu showMenu={showMenu} />
				<NavBtn showMenu={showMenu} setShowMenu={setShowMenu} />
			</div>
		</nav>
	);
}
export default Nav;
