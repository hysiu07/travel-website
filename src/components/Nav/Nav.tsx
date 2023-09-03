import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Nav.scss';
import { NavMenu } from './NavMenu';
import { NavBtn } from './NavBtn';
import { NavLogo } from './NavLogo';

function Nav() {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const locationObj = useLocation();
	const location = locationObj.pathname;

	return (
		<nav className='nav'>
			<div className='nav__container'>
				<NavLogo />
				<NavMenu
					showMenu={showMenu}
					location={location}
					setShowMenu={setShowMenu}
				/>
				<NavBtn showMenu={showMenu} setShowMenu={setShowMenu} />
			</div>
		</nav>
	);
}
export default Nav;
