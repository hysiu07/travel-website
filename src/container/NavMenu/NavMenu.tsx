import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './NavMenu.scss';

type PropsNavType = {
	showMenu: boolean;
	location?: string;
};

function NavMenu({ showMenu, location }: PropsNavType) {
	const [hiddenLink, setHiddenLink] = useState<boolean | null>(null);
	useEffect(() => {
		if (location !== '/') {
			setHiddenLink(true);
		} else {
			setHiddenLink(false);
		}
	});
	
	return (
		<div className='nav-menu'>
			<div>
				{!hiddenLink ? (
					<ul
						className='nav-menu__links'
						style={showMenu ? { right: '0' } : { right: '-150%' }}
					>
						<li>
							<a href='#destinations' className='link'>
								Destinations
							</a>
						</li>
						<li>
							<a href='#last-minute' className='link'>
								Last Minute
							</a>
						</li>
						<li>
							<a href='#about' className='link'>
								About
							</a>
						</li>
						<li>
							<a href='#contact' className='link'>
								Contact
							</a>
						</li>
						<Link to='/signIn' className='logo link'>
							SignIn
							<FaUser className='user-icon'/>
						</Link>
					</ul>
				) : (
					<ul
						className='nav-menu__links'
						style={showMenu ? { right: '0' } : { right: '-150%' }}
					>
						<Link to='/' className='logo link'>
							Home
						</Link>
					</ul>
				)}
			</div>
		</div>
	);
}
export default NavMenu;
