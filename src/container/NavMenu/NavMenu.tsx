import { Link } from 'react-router-dom';
import './NavMenu.scss';
type NavBtnPropsType = {
	showMenu: boolean;
};
function NavMenu({ showMenu }: NavBtnPropsType) {
	return (
		<div className='nav-menu'>
			<div>
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
					</Link>
				</ul>
			</div>
		</div>
	);
}
export default NavMenu;
