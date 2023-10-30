import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';

import { AiOutlineAppstore } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

import { DesktopComponent } from './DesktopComponent';
import { TravelsComponents } from './TravelsComponents';
import { Nav } from '../../components';
import Reservations from './Resevations/Reservations';

import { connect } from 'react-redux';
import { handleLoggOutUser } from '../../redux/reduxUserInfo';
import './MyAccount.scss';

type MyAccountPropsType = {
	loggOutUser: any;
	infoUser: any;
};

function MyAccount({ loggOutUser, infoUser }: MyAccountPropsType) {
	const [searchParams, setSearchParams] = useSearchParams();
	const params = useParams();
	const addSearchParams = (key: string, value: string) => {
		searchParams.set(key, value);
		setSearchParams(searchParams);
	};

	const navigate = useNavigate();

	const name = infoUser.name;

	const [menuType, setMenuType] = useState<string>('desktop');
	const [hiddenNav, setHiddenNav] = useState(false);

	useEffect(() => {
		const menuTypeParams = searchParams.get('menuType');
		if (menuTypeParams === 'desktop') {
			setMenuType('desktop');
		} else if (menuTypeParams === 'travels') {
			setMenuType('travels');
		} else if (menuTypeParams === 'reservations') {
			setMenuType('reservations');
		} else {
			setMenuType('settings');
		}
	}, [params]);

	useEffect(() => {
		const menuTypeParams = searchParams.get('menuType');
		if (menuTypeParams === 'desktop') {
			setMenuType('desktop');
		} else if (menuTypeParams === 'travels') {
			setMenuType('travels');
		} else if (menuTypeParams === 'reservations') {
			setMenuType('reservations');
		} else {
			setMenuType('settings');
		}
	}, []);
	return (
		<div className='my-account'>
			{hiddenNav ? '' : <Nav />}

			<div className='my-account__shadow'></div>
			<div className='my-account__panel'>
				<div className='box-welcome'>
					<h2>Hello {name}!</h2>
					<button
						className='logOut-btn'
						onClick={
							() => {
								loggOutUser();
								navigate('/travel-website');
							}
						}
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
								addSearchParams('menuType', 'desktop');
							}}
						>
							<AiOutlineAppstore size={30} />
							<p>Desktop</p>
						</div>
						<div
							className={'menu-item ' + (menuType === 'travels' && 'active')}
							onClick={() => {
								setMenuType('travels');
								addSearchParams('menuType', 'travels');
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
								addSearchParams('menuType', 'reservations');
							}}
						>
							<BsFillCalendarWeekFill size={30} />
							<p>Reservations</p>
						</div>
						<div
							className={'menu-item ' + (menuType === 'settings' && 'active')}
							onClick={() => {
								setMenuType('settings');
								addSearchParams('menuType', 'settings');
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
							(menuType === 'reservations' && <Reservations />)}
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state: any) => {
	return { infoUser: state.userInfo.user };
};
const mapDispatchToProps = (dispatch: any) => {
	return {
		loggOutUser: () => {
			dispatch(handleLoggOutUser());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
