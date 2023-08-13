import { useState } from 'react';

import { LuPlane } from 'react-icons/lu';
import { BiMenu } from 'react-icons/bi';

import { Link } from 'react-router-dom';

import './Nav.scss';

import useWindowWidth from '../../container/Hooks/useWindowWidth';

function Nav() {
	const [showMenu, setShowMenu] = useState<boolean | null>(null);
	const { width } = useWindowWidth();

	window.addEventListener('resize', () => {
		if (width < 800) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	});

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

				<div className='nav__menu'>
					{showMenu ? (
						<BiMenu size={40} className='nav__menu-btn' />
					) : (
						<div>
							<ul className='nav__links'>
								<li>
									<a href='#' className='nav__link'>
										Destinations
									</a>
								</li>
								<li>
									<a href='#' className='nav__link'>
										Last Minute
									</a>
								</li>

								<li>
									<a href='#' className='nav__link'>
										News
									</a>
								</li>
								<li>
									<a href='#' className='nav__link'>
										About
									</a>
								</li>
								<li>
									<a href='#' className='nav__link'>
										Contact
									</a>
								</li>
								<Link to='/signIn' className='nav__logo-link'>
									SignIn
								</Link>
							</ul>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
export default Nav;
