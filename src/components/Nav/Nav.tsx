import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavMenu } from './NavMenu';
import { NavBtn } from './NavBtn';
import { NavLogo } from './NavLogo';
import './Nav.scss';

function Nav() {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [backGround, setBackGround] = useState<boolean>(false);
	const locationObj = useLocation();
	const location = locationObj.pathname;

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setBackGround(true);
			} else {
				setBackGround(false);
			}
		});
		return () => window.removeEventListener('scroll', () => {});
	}, []);

	return (
		<nav
			className='nav'
			style={backGround ? { backgroundColor: 'rgba(238, 238, 238, 0.9' } : {}}
		>
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
