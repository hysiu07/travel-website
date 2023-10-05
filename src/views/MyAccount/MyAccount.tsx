import './MyAccount.scss';
import { Nav } from '../../components';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { AiOutlineAppstore } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { DesktopComponent } from './DesktopComponent';
import { TravelsComponents } from './TravelsComponents';
import Reservations from './Resevations/Reservations';
function MyAccount() {
	const userContext = useContext(UserContext);
	const navigate = useNavigate();
	const name = userContext?.user?.name;
	const [menuType, setMenuType] = useState<string>('desktop');
	const [hiddenNav, setHiddenNav] = useState(false);

	console.log(userContext?.user);
	
	return (
		<div className='my-account'>
			{hiddenNav ? '' : <Nav />}

			<div className='my-account__shadow'></div>
			<div className='my-account__panel'>
				<div className='box-welcome'>
					<h2>Hello {name}!</h2>
					<button
						className='logOut-btn'
						onClick={() => {
							localStorage.removeItem('user');
							userContext?.setUser(null);
							navigate('/travel-website');
						}}
					>
						LogOut
					</button>
				</div>
				<div className='container'>
					<div className='menu-panel'>
						<div
							className={'menu-item ' + (menuType === 'desktop' && 'active')}
							onClick={() => {
								setMenuType('desktop');
							}}
						>
							<AiOutlineAppstore size={30} />
							<p>Desktop</p>
						</div>
						<div
							className={'menu-item ' + (menuType === 'travels' && 'active')}
							onClick={() => {
								setMenuType('travels');
							}}
						>
							<AiTwotoneHeart size={30} />
							<p>Travels</p>
						</div>
						<div
							className={
								'menu-item ' + (menuType === 'reservations' && 'active')
							}
							onClick={() => {
								setMenuType('reservations');
							}}
						>
							<BsFillCalendarWeekFill size={30} />
							<p>Reservations</p>
						</div>
						<div
							className={'menu-item ' + (menuType === 'settings' && 'active')}
							onClick={() => {
								setMenuType('settings');
							}}
						>
							<FiSettings size={30} />
							<p>Settings</p>
						</div>
					</div>
					<div className='view-panel'>
						{(menuType === 'desktop' && <DesktopComponent />) ||
							(menuType === 'travels' && (
								<TravelsComponents setHiddenNav={setHiddenNav} />
							)) ||
							(menuType === 'reservations' && <Reservations  />)}
					</div>
				</div>
			</div>
		</div>
	);
}
export default MyAccount;
