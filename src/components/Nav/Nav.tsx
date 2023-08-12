import { LuPlane } from 'react-icons/lu';
import { BiMenu } from 'react-icons/bi';

import { Link } from 'react-router-dom';

import './Nav.scss';

function Nav() {
    const i = () => {
        console.log(window.innerWidth);
    }
   window.addEventListener('resize',i)
	return (
		<nav className='nav'>
			<div className='nav__container'>
				<div className='nav__logo-box'>
					<LuPlane size={40} className='nav__logo-icon' />
					{/* <span className='nav__brand-name'>YourTravel</span> */}
					<Link to='/' className='nav__logo-link'>
						YourTrip
					</Link>
					<span className='nav__logo-dot'></span>
				</div>
				<div>
					<ul className='nav__links'>
						<li>
							<a href='#' className='nav__link'>
								Last Minute
							</a>
						</li>
						<li>
							<a href='#' className='nav__link'>
								Destinations
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
					</ul>
				</div>
				<div className='nav__menu'>
					<BiMenu size={40} className='nav__menu-btn' />
				</div>
			</div>
		</nav>
	);
}
export default Nav;
