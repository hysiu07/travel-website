import { useEffect, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

import { connect } from 'react-redux';

import './NavMenu.scss';
type PropsNavType = {
	setShowMenu: Dispatch<SetStateAction<boolean>>;
	showMenu: boolean;
	location?: string;
	infoUser?: any;
};
function NavMenu({ showMenu, location, setShowMenu, infoUser }: PropsNavType) {
	
	const [hiddenLink, setHiddenLink] = useState<boolean | null>(true);

	const userLogged: boolean = infoUser.isLoggIn;

	useEffect(() => {
		if (location === '/travel-website/' || location === '/travel-website') {
			setHiddenLink(true);
		} else {
			setHiddenLink(false);
		}
	}, []);
	return (
		<div className='nav-menu'>
			<div>
				{hiddenLink ? (
					<ul
						className='nav-menu__links'
						style={showMenu ? { right: '0' } : { right: '-150%' }}
					>
						<div className='nav-menu__shadow'></div>
						<li>
							<a
								href='#destinations'
								className='link'
								onClick={() => {
									setShowMenu(!showMenu);
								}}
							>
								Destinations
							</a>
						</li>
						<li>
							<a
								href='#last-minute'
								className='link'
								onClick={() => {
									setShowMenu(!showMenu);
								}}
							>
								Last Minute
							</a>
						</li>
						<li>
							<a
								href='#about'
								className='link'
								onClick={() => {
									setShowMenu(!showMenu);
								}}
							>
								About
							</a>
						</li>
						<li>
							<a
								href='#contact'
								className='link'
								onClick={() => {
									setShowMenu(!showMenu);
								}}
							>
								Contact
							</a>
						</li>
						{userLogged ? (
							<Link to='/myAccount?menuType=desktop' className='logo link'>
								MyAccount
								<FaUser className='user-icon' />
							</Link>
						) : (
							<Link to='/signIn' className='logo link'>
								SignIn
								<FaUser className='user-icon' />
							</Link>
						)}
					</ul>
				) : (
					<ul
						className='nav-menu__links'
						style={showMenu ? { right: '0' } : { right: '-150%' }}
					>
						<div className='nav-menu__shadow'></div>
						<Link to='/travel-website' className='logo link'>
							Home <AiFillHome />
						</Link>
						{userLogged ? (
							<Link to='/myAccount?menuType=desktop' className='logo link'>
								MyAccount
								<FaUser className='user-icon' />
							</Link>
						) : (
							<Link to='/signIn' className='logo link'>
								SignIn
								<FaUser className='user-icon' />
							</Link>
						)}
					</ul>
				)}
			</div>
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		infoUser: state.userInfo.user,
	};
};
export default connect(mapStateToProps)(NavMenu);
